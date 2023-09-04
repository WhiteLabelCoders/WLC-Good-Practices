---
sidebar_position: 1
---

# Informacje ogólne

Mimo iż HTML nie jest językiem programowania a jedynie językiem znaczników, który umożliwia strukturyzację i formatowanie treści, jest podstawą używaną do tworzenia stron internetowych i należy go traktować jako fundament każdej strony WWW. HTML często jest traktowany przez programistów po macoszemu co skutkuje słabą semantyką i objawia się błędną strukturą lub stosowaniem nieodpowiednich tagów w stosunku do treści.

## Ogólnie pamiętaj by:
* stosować odpowiednią semantykę w stosunku do budowy strony oraz treści
* minimalizuj ilość zagnieżdżeń w HTML. Staraj się pisać czysty kod i nie stosuj nie potrzebnych tagów np. ``<div>``
* nie buduj struktury HTML na tabelkach
* staraj się nie stosować tagu ``<br>`` w treści
* unikaj osadzania treści za pomocą ``<iframe>`` jeżeli to tylko możliwe
* jeżeli nie ma potrzeby by dany plik js był ładowany w ``<head>`` ładuj go przed domknięciem tagu ``</body>``
* dbaj by obrazki ``<img>`` miały uzupełnione atrybuty **width**, **height**, **alt** (wyjątkiem są ozdobniki, które nie muszą mieć uzupełnionego **alt=””** jak np. ikony)
* stosuj w miarę możliwości krótkie nazwy klas. Staraj się używać adekwatnych nazw w stosunku do rodzaju sekcji, komponentu, contentu. Sugeruj się nomenklaturą **BEM** traktując poszczególne sekcje, komponenty modularnie.
* używaj **angielskich nazw** zarówno w HTML, CSS, JS
* formatuj odpowiednio swój kod, używając wcięć
* stosuj komentarze, wszędzie gdzie się tylko da :)
* zawsze używaj walidatora HTML https://validator.w3.org/

## Przykłady dobrych praktyk, które należy stosować w HTML:

Poprawna struktura pustego dokumentu HTML powinna wyglądać jak w poniższym przykładzie:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	    <link rel="stylesheet" href="style.css">
	</head>
	<body>
	    Page Content...
	    <script src="app.js"></script>
	</body>
</html>
```

Pamiętaj, by tag ``<html>`` miał **atrybut lang** równy wersji językowej.

### W przypadku Wordpressa gdy nie korzystasz z FSE powinny istnieć zapisy:
```php
<html <?php language_attributes(); ?>>
```

Dla ``<meta>`` atrybut charset:
```php
<meta charset="<?php bloginfo( 'charset' ); ?>">
```

Dla ``<body>`` zapis, który obsłuży klasy:
```php
<?php body_class(); ?>
```

Przed domknięciem tagu ``</head>`` hook, który obsłuży ``<title>`` pozostałe ``<meta>`` oraz ładowane style:
```php
<?php wp_head(); ?>
```

Oraz przed domknięciem tagu ``</body>`` **hook**, który powinien obsłużyć skrypty nie wymagające ładowania w ``<head>``. 
```php
<?php wp_footer(); ?>
```

Kompletny kod powinien wyglądać tak:
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
	    <meta charset="<?php bloginfo( 'charset' ); ?>">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
	    Page Content...
	    <?php wp_footer(); ?>
	</body>
</html>
```