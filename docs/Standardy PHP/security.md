---
sidebar_position: 3
---

# Bezpieczeństwo

## Sanityzacja danych

**Zabezpieczenie danych wejściowych**, czyli sanityzacja - dane wejściowe mogą pochodzić z różnych źródeł (np. z formularza, od użytkowników, z innych stron, z naszej własnej bazy danych) i zanim zostaną użyte w naszym kodzie, powinny zostać odpowiednio zabezpieczone. 

Powinniśmy pamiętać, że nawet admini są użytkownikami, a użytkownicy mogą wprowadzić błędne dane (np. przez pomyłkę wkleić skopiowany tekst i wysłać formularz). Sanityzacja to proces zabezpieczania, czyszczenie lub filtracji danych wejściowych. 

Stosowanie walidacja danych jest zalecane przed stosowaniem sanityzacji.

```php
$title = sanitize_text_field( $_POST['title'] );
update_post_meta( $post->ID, 'title', $title );
```

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/apis/security/sanitizing/).

`sanitize_email()`
`sanitize_file_name()`
`sanitize_hex_color()`
`sanitize_hex_color_no_hash()`
`sanitize_html_class()`
`sanitize_key()`
`sanitize_meta()`
`sanitize_mime_type()`
`sanitize_option()`
`sanitize_sql_orderby()`
`sanitize_term()`
`sanitize_term_field()`
`sanitize_text_field()`
`sanitize_textarea_field()`
`sanitize_title()`
`sanitize_title_for_query()`
`sanitize_title_with_dashes()`
`sanitize_user()`
`sanitize_url()`
`wp_kses()`
`wp_kses_post()`

## Walidacja danych

**Walidacja danych** - proces testowania danych przeciw z góry zdefiniowanym wzorcom, np. sprawdzanie czy pole nie jest puste, sprawdzanie czy numer ma właściwy format lub czy pole ilości jest większe niż 0. 

Walidacja danych powinna nastąpić przed sanityzacją.

```php
/**
 * Validate a US zip code.
 *
 * @param string $zip_code RAW zip code to check.
 *
 * @return bool
 */
function wporg_is_valid_us_zip_code( string $zip_code ): bool {
    // Scenario 1: empty.
    if ( empty( $zip_code ) ) {
        return false;
    }

    // Scenario 2: more than 10 characters.
    if ( 10 < strlen( trim( $zip_code ) ) ) {
        return false;
    }

    // Scenario 3: incorrect format.
    if ( ! preg_match( '/^d{5}(-?d{4})?$/', $zip_code ) ) {
        return false;
    }

    // Passed successfully.
    return true;
}
```

```php
if ( isset( $_POST['wporg_zip_code'] ) && wporg_is_valid_us_zip_code( $_POST['wporg_zip_code'] ) ) {
    // $_POST['wporg_zip_code'] is valid, we can carry on
}
```

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/apis/security/data-validation/).

## Escapowanie danych

**Zabezpieczanie danych wyjściowych**, czyli escapowanie - czyli zabezpieczanie danych wyjściowych poprzez usuwanie niechcianych danych, takich jak kod HTML lub tagi skryptów.

Celem escapowania jest zabezpieczenie danych przed wyświetleniem ich użytkownikowi końcowemu. Warto zwrócić uwagę na to, aby escapować bezpośrednio przed wyświetleniem, nie wcześniej (late escaping).

```php
// Okay, but not great.
$url  = esc_url( $url );
$text = esc_html( $text );

echo '<a href="' . $url . '">' . $text . '</a>';

// Much better! Late escaping.
echo '<a href="' . esc_url( $url ) . '">' . esc_html( $text ) . '</a>';
```

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/apis/security/escaping/).

`esc_html()`
`esc_js()`
`esc_url()`
`esc_url_raw()`
`esc_xml()`
`esc_attr()`
`esc_textarea()`
`wp_kses()`
`wp_kses_post()`
`wp_kses_data()`

`esc_html__()`
`esc_html_e()`
`esc_html_x()`
`esc_attr__()`
`esc_attr_e()`
`esc_attr_x()`

## Zabezpieczanie SQL

W wielu przypadkach bezpośrednie zapytania do bazy danych są nieuniknione, należy upewnić się, że zawsze są one odpowiednio przygotowane i zabezpieczone. 

Metoda `$wpdb->prepare()` powinna być używana zawsze w przypadku kiedy chcemy wyciągnąć dane z lub dodać do naszej bazy danych, pozwala ona na bezpieczne wywołanie zapytania SQL oraz uniknięcie ataków typu SQL injection.

```php
global $wpdb;

// Well prepared SQL
$sql = $wpdb->prepare(
    "SELECT `ID`
    FROM {$wpdb->prefix}posts
    WHERE `post_type` = %s
    AND `post_status` = 'publish'
    ORDER BY `post_title` ASC",
    $post_type
);

// Get results
$results = $wpdb->get_results( $sql, ARRAY_A );
```

Inne przydatne funkcje: `esc_sql`,  `esc_like`.

## Nonces

Noncje to narzędzie pozwalające uniknąć ataków typu CSRF lub cross-site request forgery. 

Główna cel noncji to uniknięcie możliwości ponownego wykonania danego requestu, np. akcji typu update lub delete post, różnego rodzaju akcje AJAX-owe, które wykonywane wielokrotnie w niekontrolowany sposób mogą prowadzić do problemów z wydajnością strony itp.

```php
// Enqueue script
wp_enqueue_script( 'my-awesome-script' );

$vars = array(
    'ajax_url' => admin_url( 'admin-ajax.php' ),
    'nonce'    => wp_create_nonce( 'my-awesome-nonce' ), // Create nonce
);

// Pass variables to script
wp_localize_script( 'my-awesome-script', 'adminWpData', $vars );
```

```php
$nonce = $_POST['nonce']; // nonce passed via AJAX

// Check for nonce security
if ( ! wp_verify_nonce( $nonce, 'my-awesome-nonce' ) ) {
    die( 'Invalid request!' );
}
```

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/apis/security/nonces/).