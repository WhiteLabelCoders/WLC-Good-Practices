---
sidebar_position: 2
---

# Niestandardowe bloki

Czasem zdarza się tak, że domyślne bloki wbudowane w WordPress’a są niewystarczające aby spełnić oczekiwania naszych klientów. Dlatego w tym dziale zajmiemy się budowaniem niestandardowych bloków z użyciem komponentów Reactowych oraz przedstawię kilka podejść jakimi możemy się kierować przy wyborze drogi budowania bloków.

## Tworzenie bloku

Na samym początku powinniśmy się zastanowić czy chcemy budować bloki jako osobne pluginy czy raczej zbudować plugin, który będzie zawierał nasze bloki. Oba podejścia są dobre, a to wszystko zależy od projektu. Jednakże trzeba pamiętać o jednej rzeczy - rekomendowane podejście WordPressa to **jeden blok = jeden plugin**. Daje nam też trochę większe pole manewru jeżeli chodzi o kompilacje styli i podpięcie ich pod konkretny blok, który zrobimy. Do plusów możemy zaliczyć również dużo prostsze zarządzanie wersjami, ponieważ możemy założyć, że będziemy mieli jedno repozytorium dla jednego pluginu. Jeżeli okaże się, że nasz plugin na tyle się rozwinął, że fajnie by było go udostępnić światu w postaci oficjalnego pluginu dla WP w zasadzie nie musimy robić dodatkowych rzeczy.

Pamiętajmy o tym, że jeżeli tworzymy plugin starajmy się pisać go w OOP, poniżej przykład rejestracji:

```
<?php
/**
 * Plugin Name: WLC Blocks Boilerplate
 * Plugin URI: https://github.com/WhiteLabelCoders
 * Description: WLC WordPress Gutenberg block-type Plugin
 * Version: 1.0.0
 * Author: WLC
 * Author URI: https://whitelabelcoders.com
 * Text Domain: wlc-blocks-boilerplate
 * Domain Path: /languages
 * Requires PHP: 5.6.20
 * Tested up to: 6.2.2
 * License: GPLv2 or later
 *
 * @package WLC_Blocks_Boilerplate
 */

Kolejną rzeczą jest stworzenie package.json oraz odpowiedniej struktury katalogów.

package.json
```
{
  "name": "wlc-blocks-boilerplate",
  "version": "1.0.0",
  "description": "WLC WordPress Gutenberg block-type Plugin",
  "main": "editor.js",
  "scripts": {
    "start": "wp-scripts start src/editor.js src/frontend.js",
    "build": "wp-scripts build src/editor.js src/frontend.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "WLC",
  "devDependencies": {
    "@wordpress/eslint-plugin": "^13.5.0",
    "@wordpress/scripts": "^24.1.0"
  }
}

Następnie musimy zadeklarować plik o nazwie block.json, w którym zapiszemy najważniejsze informacje o bloku czyli jego nazwę oraz potrzebne atrybuty czy skrypty. Ważne jest aby umieszczać na samym początku deklaracji $schema, ponieważ będziemy mieli możliwość korzystania z podpowiedzi jakie elementy możemy zadeklarować, a jakich nie.
```
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 2,
    "name": "wlc-blocks/boilerplate",
    "title": "WLC Blocks Boilerplate",
    "category": "common",
    "icon": "star-empty",
    "description": "WLC WordPress Gutenberg block-type plugins",
    "attributes": {
        "headline": {
            "type": "string",
            "default": "Pierwszy blok w Gutenbergu"
        },
        "bgColor": {
            "type": "string",
            "default": "#f1f1f1"
        },
        "borderColor": {
            "type": "string",
            "default": "#cac8c8"
        },
        "headlineAlignment": {
            "type": "string",
            "default": "left"
        },
        "users":{
            "type": "array",
            "default": "[]"
        }
    },
    "example": {
        "headline": "Pierwszy blok w Gutenbergu",
        "bgColor": "#f1f1f1",
        "borderColor": "#cac8c8",
        "headlineAlignment": "left"
    },
    "textdomain": "wlc-blocks-boilerplate",
    "editorScript": "file:./build/editor.js",
    "editorStyle": "file:./build/editor.css",
    "script": "file:./build/frontend.js",
    "style": "file:./build/frontend.css"
}

@wordpress/scripts jest tak skonstruowany, że wymaga na nas odpowiedniej struktury czyli musimy mieć katalog src, w którym umieszczamy nasze pliki źródłowe dla bloków. Katalogi typu languages i css są opcjonalne, natomiast mocno rekomendowane przez WLC. Katalog build jest generowany automatycznie.

Całość wygląda mniej więcej tak:

projekt
├── src/
│   ├── editor.js
│   └── frontend.js
├── languages/
├── css/
├── build/
│   ├── editor.js
│   ├── editor.css
│   ├── frontend.js
│   └── frontend.css
├── block.json
└── package.json

## Stosowanie DocBlocków

W WLC rekomendujemy użycie DocBlocków, które mówią nam co dana funkcja przyjmuje i jakiego typu dane zwraca:

/**
* Functional React Component to edit the block on the Gutenberg Editor
*
* @param {*} props - Block attributes
* @returns {string} - The component html
*/

## WordPress Dependencies

Jeżeli zaciągamy pakiety z biblioteki WordPress powinniśmy oznaczać je w komentarzu, przykład:

```
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

## Internal Dependencies

Główną różnicą jest to, że podczas importowania plików wewnętrznych należy używać ścieżek względnych specyficznych dla katalogu najwyższego poziomu, w którym pracujesz. Jeżeli zaciągamy własne pakiety z plików powinniśmy oznaczać je jako internal w komentarzu, przykład:

```
/**
 * Internal dependencies
 */
import VisualEditor from '../visual-editor';

## External Dependencies

Jeżeli importujesz zewnętrzną bibliotekę powinieneś oznaczyć ją w komentarzu jako External, przykład:

```
/**
 * External dependencies
 */
import moment from 'moment';

## Rejestracja stylu elementu dla bloku

Aby zarejestrować styl np. dla przycisku, bądź obrazka wystarczy że użyjesz tego fragmentu kodu:

```
import { registerBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/image', {
  name: 'rounded',
  label: 'Rounded',
} );

## Wyrejestrowanie stylu elementu dla bloku

Wyrejestrowywanie odbywa się w analogiczny sposób:

```
import { unregisterBlockStyle } from '@wordpress/blocks';

unregisterBlockStyle( 'core/image', 'rounded' );

## Modyfikacja bloków za pomocą hooków

Jeżeli zachodzi potrzeba aby dodać do Twoich bloków jakąś dodatkową funkcjonalność, nie musisz do każdego z osobna dodawać tego samego kodu. Możesz użyć do tego hooków i wpiąć się gdzie tylko chcesz, aby uzyskać pożądany efekt.

Jeżeli chcesz dodać nowy atrybut czy support dla bloku użyj:

```
blocks.registerBlockType
import { addFilter } from '@wordpress/hooks';
add_filter(
'blocks.registerBlockType',
'namespace/filter-name',
 function(settings, name) {
	…
 }
);

Do dodawania niestandardowych elementów sterujących do paska narzędzi bloków lub paska bocznego ustawień użyj:

```
editor.BlockEdit
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
add_filter(
'blocks.BlockListBlock',
'namespace/filter-name',
 createHigherOrderComponent((BlockList) =>  {
	…
 })
);


Aby dodać dodatkowe właściwości do wrappera w metodzie save użyj:

```
blocks.getSaveContent.extraProps
import { addFilter } from '@wordpress/hooks';
add_filter(
'blocks.getSaveContent.extraProps',
'namespace/filter-name',
 function(props, block, attributes) {
	…
 })
);
