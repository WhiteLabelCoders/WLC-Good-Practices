"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[662],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>m});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),k=r,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||a;return o?t.createElement(m,i(i({ref:n},c),{},{components:o})):t.createElement(m,i({ref:n},c))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}k.displayName="MDXCreateElement"},6677:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2},i="Niestandardowe bloki",l={unversionedId:"Standardy Javascript/gutenberg-block",id:"Standardy Javascript/gutenberg-block",title:"Niestandardowe bloki",description:"Czasem zdarza si\u0119 tak, \u017ce domy\u015blne bloki wbudowane w WordPress\u2019a s\u0105 niewystarczaj\u0105ce aby spe\u0142ni\u0107 oczekiwania naszych klient\xf3w. Dlatego w tym dziale zajmiemy si\u0119 budowaniem niestandardowych blok\xf3w z u\u017cyciem komponent\xf3w Reactowych oraz przedstawi\u0119 kilka podej\u015b\u0107 jakimi mo\u017cemy si\u0119 kierowa\u0107 przy wyborze drogi budowania blok\xf3w.",source:"@site/docs/Standardy Javascript/gutenberg-block.md",sourceDirName:"Standardy Javascript",slug:"/Standardy Javascript/gutenberg-block",permalink:"/WLC-Good_Practices/Standardy Javascript/gutenberg-block",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Informacje og\xf3lne",permalink:"/WLC-Good_Practices/Standardy Javascript/intro"},next:{title:"Standardy kodowania",permalink:"/WLC-Good_Practices/Standardy PHP/coding-standards"}},s={},d=[{value:"Tworzenie bloku",id:"tworzenie-bloku",level:2},{value:"Stosowanie DocBlock\xf3w",id:"stosowanie-docblock\xf3w",level:2},{value:"WordPress Dependencies",id:"wordpress-dependencies",level:2},{value:"Internal Dependencies",id:"internal-dependencies",level:2},{value:"External Dependencies",id:"external-dependencies",level:2},{value:"Rejestracja stylu elementu dla bloku",id:"rejestracja-stylu-elementu-dla-bloku",level:2},{value:"Wyrejestrowanie stylu elementu dla bloku",id:"wyrejestrowanie-stylu-elementu-dla-bloku",level:2},{value:"Modyfikacja blok\xf3w za pomoc\u0105 hook\xf3w",id:"modyfikacja-blok\xf3w-za-pomoc\u0105-hook\xf3w",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"niestandardowe-bloki"},"Niestandardowe bloki"),(0,r.kt)("p",null,"Czasem zdarza si\u0119 tak, \u017ce domy\u015blne bloki wbudowane w WordPress\u2019a s\u0105 niewystarczaj\u0105ce aby spe\u0142ni\u0107 oczekiwania naszych klient\xf3w. Dlatego w tym dziale zajmiemy si\u0119 budowaniem niestandardowych blok\xf3w z u\u017cyciem komponent\xf3w Reactowych oraz przedstawi\u0119 kilka podej\u015b\u0107 jakimi mo\u017cemy si\u0119 kierowa\u0107 przy wyborze drogi budowania blok\xf3w."),(0,r.kt)("h2",{id:"tworzenie-bloku"},"Tworzenie bloku"),(0,r.kt)("p",null,"Na samym pocz\u0105tku powinni\u015bmy si\u0119 zastanowi\u0107 czy chcemy budowa\u0107 bloki jako osobne pluginy czy raczej zbudowa\u0107 plugin, kt\xf3ry b\u0119dzie zawiera\u0142 nasze bloki. Oba podej\u015bcia s\u0105 dobre, a to wszystko zale\u017cy od projektu. Jednak\u017ce trzeba pami\u0119ta\u0107 o jednej rzeczy - rekomendowane podej\u015bcie WordPressa to ",(0,r.kt)("strong",{parentName:"p"},"jeden blok = jeden plugin"),". Daje nam te\u017c troch\u0119 wi\u0119ksze pole manewru je\u017celi chodzi o kompilacje styli i podpi\u0119cie ich pod konkretny blok, kt\xf3ry zrobimy. Do plus\xf3w mo\u017cemy zaliczy\u0107 r\xf3wnie\u017c du\u017co prostsze zarz\u0105dzanie wersjami, poniewa\u017c mo\u017cemy za\u0142o\u017cy\u0107, \u017ce b\u0119dziemy mieli jedno repozytorium dla jednego pluginu. Je\u017celi oka\u017ce si\u0119, \u017ce nasz plugin na tyle si\u0119 rozwin\u0105\u0142, \u017ce fajnie by by\u0142o go udost\u0119pni\u0107 \u015bwiatu w postaci oficjalnego pluginu dla WP w zasadzie nie musimy robi\u0107 dodatkowych rzeczy."),(0,r.kt)("p",null,"Pami\u0119tajmy o tym, \u017ce je\u017celi tworzymy plugin starajmy si\u0119 pisa\u0107 go w OOP, poni\u017cej przyk\u0142ad rejestracji:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\n/**\n * Plugin Name: WLC Blocks Boilerplate\n * Plugin URI: https://github.com/WhiteLabelCoders\n * Description: WLC WordPress Gutenberg block-type Plugin\n * Version: 1.0.0\n * Author: WLC\n * Author URI: https://whitelabelcoders.com\n * Text Domain: wlc-blocks-boilerplate\n * Domain Path: /languages\n * Requires PHP: 5.6.20\n * Tested up to: 6.2.2\n * License: GPLv2 or later\n *\n * @package WLC_Blocks_Boilerplate\n */\n")),(0,r.kt)("p",null,"Kolejn\u0105 rzecz\u0105 jest stworzenie package.json oraz odpowiedniej struktury katalog\xf3w."),(0,r.kt)("p",null,"package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name": "wlc-blocks-boilerplate",\n  "version": "1.0.0",\n  "description": "WLC WordPress Gutenberg block-type Plugin",\n  "main": "editor.js",\n  "scripts": {\n    "start": "wp-scripts start src/editor.js src/frontend.js",\n    "build": "wp-scripts build src/editor.js src/frontend.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "WLC",\n  "devDependencies": {\n    "@wordpress/eslint-plugin": "^13.5.0",\n    "@wordpress/scripts": "^24.1.0"\n  }\n}\n')),(0,r.kt)("p",null,"Nast\u0119pnie musimy zadeklarowa\u0107 plik o nazwie block.json, w kt\xf3rym zapiszemy najwa\u017cniejsze informacje o bloku czyli jego nazw\u0119 oraz potrzebne atrybuty czy skrypty. Wa\u017cne jest aby umieszcza\u0107 na samym pocz\u0105tku deklaracji $schema, poniewa\u017c b\u0119dziemy mieli mo\u017cliwo\u015b\u0107 korzystania z podpowiedzi jakie elementy mo\u017cemy zadeklarowa\u0107, a jakich nie."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "$schema": "https://schemas.wp.org/trunk/block.json",\n    "apiVersion": 2,\n    "name": "wlc-blocks/boilerplate",\n    "title": "WLC Blocks Boilerplate",\n    "category": "common",\n    "icon": "star-empty",\n    "description": "WLC WordPress Gutenberg block-type plugins",\n    "attributes": {\n        "headline": {\n            "type": "string",\n            "default": "Pierwszy blok w Gutenbergu"\n        },\n        "bgColor": {\n            "type": "string",\n            "default": "#f1f1f1"\n        },\n        "borderColor": {\n            "type": "string",\n            "default": "#cac8c8"\n        },\n        "headlineAlignment": {\n            "type": "string",\n            "default": "left"\n        },\n        "users":{\n            "type": "array",\n            "default": "[]"\n        }\n    },\n    "example": {\n        "headline": "Pierwszy blok w Gutenbergu",\n        "bgColor": "#f1f1f1",\n        "borderColor": "#cac8c8",\n        "headlineAlignment": "left"\n    },\n    "textdomain": "wlc-blocks-boilerplate",\n    "editorScript": "file:./build/editor.js",\n    "editorStyle": "file:./build/editor.css",\n    "script": "file:./build/frontend.js",\n    "style": "file:./build/frontend.css"\n}\n')),(0,r.kt)("p",null,"@wordpress/scripts jest tak skonstruowany, \u017ce wymaga na nas odpowiedniej struktury czyli musimy mie\u0107 katalog src, w kt\xf3rym umieszczamy nasze pliki \u017ar\xf3d\u0142owe dla blok\xf3w. Katalogi typu languages i css s\u0105 opcjonalne, natomiast mocno rekomendowane przez WLC. Katalog build jest generowany automatycznie."),(0,r.kt)("p",null,"Ca\u0142o\u015b\u0107 wygl\u0105da mniej wi\u0119cej tak:"),(0,r.kt)("p",null,"projekt\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 editor.js\n\u2502   \u2514\u2500\u2500 frontend.js\n\u251c\u2500\u2500 languages/\n\u251c\u2500\u2500 css/\n\u251c\u2500\u2500 build/\n\u2502   \u251c\u2500\u2500 editor.js\n\u2502   \u251c\u2500\u2500 editor.css\n\u2502   \u251c\u2500\u2500 frontend.js\n\u2502   \u2514\u2500\u2500 frontend.css\n\u251c\u2500\u2500 block.json\n\u2514\u2500\u2500 package.json"),(0,r.kt)("h2",{id:"stosowanie-docblock\xf3w"},"Stosowanie DocBlock\xf3w"),(0,r.kt)("p",null,"W WLC rekomendujemy u\u017cycie DocBlock\xf3w, kt\xf3re m\xf3wi\u0105 nam co dana funkcja przyjmuje i jakiego typu dane zwraca:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n* Functional React Component to edit the block on the Gutenberg Editor\n*\n* @param {*} props - Block attributes\n* @returns {string} - The component html\n*/\n")),(0,r.kt)("h2",{id:"wordpress-dependencies"},"WordPress Dependencies"),(0,r.kt)("p",null,"Je\u017celi zaci\u0105gamy pakiety z biblioteki WordPress powinni\u015bmy oznacza\u0107 je w komentarzu, przyk\u0142ad:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * WordPress dependencies\n */\nimport { __ } from '@wordpress/i18n';\n")),(0,r.kt)("h2",{id:"internal-dependencies"},"Internal Dependencies"),(0,r.kt)("p",null,"G\u0142\xf3wn\u0105 r\xf3\u017cnic\u0105 jest to, \u017ce podczas importowania plik\xf3w wewn\u0119trznych nale\u017cy u\u017cywa\u0107 \u015bcie\u017cek wzgl\u0119dnych specyficznych dla katalogu najwy\u017cszego poziomu, w kt\xf3rym pracujesz. Je\u017celi zaci\u0105gamy w\u0142asne pakiety z plik\xf3w powinni\u015bmy oznacza\u0107 je jako internal w komentarzu, przyk\u0142ad:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * Internal dependencies\n */\nimport VisualEditor from '../visual-editor';\n")),(0,r.kt)("h2",{id:"external-dependencies"},"External Dependencies"),(0,r.kt)("p",null,"Je\u017celi importujesz zewn\u0119trzn\u0105 bibliotek\u0119 powiniene\u015b oznaczy\u0107 j\u0105 w komentarzu jako External, przyk\u0142ad:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * External dependencies\n */\nimport moment from 'moment';\n")),(0,r.kt)("h2",{id:"rejestracja-stylu-elementu-dla-bloku"},"Rejestracja stylu elementu dla bloku"),(0,r.kt)("p",null,"Aby zarejestrowa\u0107 styl np. dla przycisku, b\u0105d\u017a obrazka wystarczy \u017ce u\u017cyjesz tego fragmentu kodu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { registerBlockStyle } from '@wordpress/blocks';\n\nregisterBlockStyle( 'core/image', {\n  name: 'rounded',\n  label: 'Rounded',\n} );\n")),(0,r.kt)("h2",{id:"wyrejestrowanie-stylu-elementu-dla-bloku"},"Wyrejestrowanie stylu elementu dla bloku"),(0,r.kt)("p",null,"Wyrejestrowywanie odbywa si\u0119 w analogiczny spos\xf3b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { unregisterBlockStyle } from '@wordpress/blocks';\n\nunregisterBlockStyle( 'core/image', 'rounded' );\n")),(0,r.kt)("h2",{id:"modyfikacja-blok\xf3w-za-pomoc\u0105-hook\xf3w"},"Modyfikacja blok\xf3w za pomoc\u0105 hook\xf3w"),(0,r.kt)("p",null,"Je\u017celi zachodzi potrzeba aby doda\u0107 do Twoich blok\xf3w jak\u0105\u015b dodatkow\u0105 funkcjonalno\u015b\u0107, nie musisz do ka\u017cdego z osobna dodawa\u0107 tego samego kodu. Mo\u017cesz u\u017cy\u0107 do tego hook\xf3w i wpi\u0105\u0107 si\u0119 gdzie tylko chcesz, aby uzyska\u0107 po\u017c\u0105dany efekt."),(0,r.kt)("p",null,"Je\u017celi chcesz doda\u0107 nowy atrybut czy support dla bloku u\u017cyj:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blocks.registerBlockType\nimport { addFilter } from '@wordpress/hooks';\nadd_filter(\n'blocks.registerBlockType',\n'namespace/filter-name',\n function(settings, name) {\n    \u2026\n }\n);\n")),(0,r.kt)("p",null,"Do dodawania niestandardowych element\xf3w steruj\u0105cych do paska narz\u0119dzi blok\xf3w lub paska bocznego ustawie\u0144 u\u017cyj:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"editor.BlockEdit\nimport { addFilter } from '@wordpress/hooks';\nimport { createHigherOrderComponent } from '@wordpress/compose';\nadd_filter(\n'blocks.BlockListBlock',\n'namespace/filter-name',\n createHigherOrderComponent((BlockList) =>  {\n    \u2026\n })\n);\n")),(0,r.kt)("p",null,"Aby doda\u0107 dodatkowe w\u0142a\u015bciwo\u015bci do wrappera w metodzie save u\u017cyj:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blocks.getSaveContent.extraProps\nimport { addFilter } from '@wordpress/hooks';\nadd_filter(\n'blocks.getSaveContent.extraProps',\n'namespace/filter-name',\n function(props, block, attributes) {\n    \u2026\n })\n);\n")))}u.isMDXComponent=!0}}]);