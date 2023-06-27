---
sidebar_position: 4
---

# Wydajność

## Quick wins

### Wydajne zapytania do bazy z użyciem `WP_Query`

-- **Nie używaj** `posts_per_page => -1`. Jeżeli na stronie będzie 10 tys. postów, takie zapytanie może sprawić, że strona przestanie działać. Pamiętaj, że lość postów na stronie będzie rosła z czasem.

-- Precyzyjnie wskazuj jakie posty chcesz wyciągnąć z bazy:

````php
<?php
// Query for 500 published posts of certain post type.
new WP_Query( array(
  'posts_per_page' => 500,
  'post_type'      => 'my_awesome_post_type'
  'post_status'    => 'publish'
));
?>
````

-- Jeżeli potrzebujesz tylko listę ID-ików postów, skorzystaj z `fields => ids`

-- **Zawsze używaj** `no_found_rows => true`, jeżeli nie będziesz korzystał z paginacji. Dzięki temu nie zostanie wykonane zapytanie `SQL_CALC_FOUND_ROWS`, co drastycznie przyspieszy zapytanie.

-- Unikaj korzystania z `post__not_in`

### Pozostałe rady

-- `in_array()` powinno być używane rozważnie, gdyż jest to funkcja znana ze słabej skalowalności, nie jest zalecana w przydaku dużego zbioru danych. Zalecane jest takie budowanie tablic, które faworyzuje sprawdzanie klucza za pomocą funkcji `isset()`.

## Cache

Cachowanie to po prostu zapisywanie danych w jakimś miejscu (np. w bazie danych lub w pamięci) w celu ponownego, szybkiego, skorzystania z tych danych. Jest to fundamentalny koncept w WordPressie, z którym powinien być zaznajomiony każdy developer, a w szczególności ten pracujący ze stronami generującymi duży ruch (high traffic environments).

### Transients API

Transients API to prosty mechanizm cachowania, który zapisuje dane bazie danych w tabeli `wp_options`, zatem możemy powiedzieć, że zapis jest trwały (persistent).

Podczas tworzenia transienta możemy ustawić nazwę transienta, po której poźniej będziemy go wydobywać z bazy danych oraz czas po którym transient wygaśnie i zostanie usunięty.

Przykład:

````php
    // Always check if cached transient exists
    $special_query_results = get_transient( 'special_query_results' )
    
    // If it exists, it will be ready to use
    // If false is returned, we need to set transient
    if ( false === $special_query_results ) {
        // Request data
        $special_query_results = new WP_Query( array(
          'posts_per_page' => 500,
          'post_type'      => 'my_awesome_post_type'
          'post_status'    => 'publish'
        ) );
        
        // Set transient
        set_transient( 'special_query_results', $special_query_results, 12 * HOUR_IN_SECONDS );
    }
    // Use the data like you would have normally...
````

-- Możliwe jest stworzenie transienta, który nigdy nie wygaśnie, omijając parametr `$expiration`, jednak nie jest to zalecane gdyż takie transienty są autoloadowane na każdej podstronie, co może doprowadzić do spadku wydajności.

-- W przypadku środowisk ze skonfigurowanym trwałym mechanizmem cachowania (**persistent caching mechanism**), wykorzystującym np. Memcached lub Redis, transienty stają się wrapperem dla zwykłych metod obiektu `WP_Object_Cache` (są zapisywane w pamięci, a nie w tabeli `wp_options`).

-- W stronach generujących duży ruch, nie należy korzystać z transientów, gdyż będą one zapychały tabelę `wp_options`, w przypadku takich stron wskazane jest skonfigurowanie **persistent caching mechanism** oraz korzystanie z dobrodziejstw `WP_Object_Cache`.


[Dokumentacje i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/apis/transients/).

### Object cache

Object cache to niewątpliwie najlepsze narzędzie w WordPressie do cachowania długo trwających zapytań do bazy danych, skomplikowanych funkcji, requestów do zewnętrznych serwisów i tym podobnych. 

Mimo to znajomość Object cache zdaje się być dosyć niszowa lub temat nie jest dla wszystkich jasny.

#### Non-persistent vs persistent

Domyślnie, zapisywanie obiektów w pamięci RAM, bo to tam trzymane są dane, nie jest trwałe (non-persistent) i pozostają one w pamięci tylko i wyłącznie na czas trwania requesta, a więc przykładowo nie można wykorzystać zapisanych danych po załadowaniu innej strony. Taki non-persistent cache nie jest zatem aż tak użyteczny i ma ogranoczone zastosowanie.

**Twały zapisywanie obiektów w pamięci** możemy osiągnąć poprzez skonfigurowanie środowiska z trwałym mechanizmem cachowania (**persistent caching mechanism**), wykorzystującym np. Memcached, Redis lub inny system buforowania pamięci.

:::info

Środisko lokalne z działającym Object cachem  + Redis

1. Zainstaluj **[plugin Redis Object Cache](https://wordpress.org/plugins/redis-cache/)**
2. Zainstaluj Redis na swojej maszynie, postępuj [zgodnie ze wskazówkami](https://redis.io/docs/getting-started/installation/)

:::

Zasada działania, jest podobna jak w Transientach:

````php
    // Always check if cached object exists
    $all_awesome_posts = wp_cache_get( 'all_posts', 'posts' ); // cache item key, cache item group

    // If it exists, it will be ready to use
    // If false is returned, we need to set the object
    if ( false === $all_awesome_posts ) {
        // Request data
	    $data = new WP_Query( array(
		    'post_status' => 'publish',
	    ) );

        // Set object cache item
	    wp_cache_set( 'all_posts', $data, 'posts', 600 ); // cache item key, data, cache item group, expire value
    }

    // Use the data like you would have normally...
````

Dostępne metody:

`wp_cache_get()`
`wp_cache_set()`
`wp_cache_delete()`
`wp_cache_flush()`
`wp_cache_add()`
`wp_cache_replace()`
`wp_cache_add_global_groups()`
`wp_cache_add_non_persistent_groups()`

Od wersji Wordpressa 6.1 dostępne są nowe metody, jednak nie we wszystkich implementacjach cacha działają:

`wp_cache_get_multiple()`
`wp_cache_set_multiple()`
`wp_cache_delete_multiple()`
`wp_cache_add_multiple()`
`wp_cache_flush_group()`
`wp_cache_flush_runtime()`

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/reference/classes/wp_object_cache/).

-- Dostępny rozmiar pamięci RAM to 1MB, ma to swoje ograniczenia

-- Klasa `WP_Object_Cache` pozwala na dodawanie, usuwanie, a nawet podmieniania danych. Pozwala na gropowanie zcachowanych danych oraz zarządzanie grupami.