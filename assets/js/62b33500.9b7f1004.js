"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[967],{3905:(e,a,n)=>{n.d(a,{Zo:()=>l,kt:()=>m});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},l=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return n?t.createElement(m,r(r({ref:a},l),{},{components:n})):t.createElement(m,r({ref:a},l))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[d]="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7090:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},r="Wydajno\u015b\u0107",p={unversionedId:"Standardy PHP/performance",id:"Standardy PHP/performance",title:"Wydajno\u015b\u0107",description:"Quick wins",source:"@site/docs/Standardy PHP/performance.md",sourceDirName:"Standardy PHP",slug:"/Standardy PHP/performance",permalink:"/WLC-Good-Practices/Standardy PHP/performance",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bezpiecze\u0144stwo",permalink:"/WLC-Good-Practices/Standardy PHP/security"},next:{title:"Internalizacja",permalink:"/WLC-Good-Practices/Standardy PHP/internalization"}},s={},c=[{value:"Quick wins",id:"quick-wins",level:2},{value:"Wydajne zapytania do bazy z u\u017cyciem <code>WP_Query</code>",id:"wydajne-zapytania-do-bazy-z-u\u017cyciem-wp_query",level:3},{value:"Pozosta\u0142e rady",id:"pozosta\u0142e-rady",level:3},{value:"Cache",id:"cache",level:2},{value:"Transients API",id:"transients-api",level:3},{value:"Object cache",id:"object-cache",level:3},{value:"Non-persistent vs persistent",id:"non-persistent-vs-persistent",level:4}],l={toc:c},d="wrapper";function y(e){let{components:a,...n}=e;return(0,i.kt)(d,(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wydajno\u015b\u0107"},"Wydajno\u015b\u0107"),(0,i.kt)("h2",{id:"quick-wins"},"Quick wins"),(0,i.kt)("h3",{id:"wydajne-zapytania-do-bazy-z-u\u017cyciem-wp_query"},"Wydajne zapytania do bazy z u\u017cyciem ",(0,i.kt)("inlineCode",{parentName:"h3"},"WP_Query")),(0,i.kt)("p",null,"-- ",(0,i.kt)("strong",{parentName:"p"},"Nie u\u017cywaj")," ",(0,i.kt)("inlineCode",{parentName:"p"},"posts_per_page => -1"),". Je\u017celi na stronie b\u0119dzie 10 tys. post\xf3w, takie zapytanie mo\u017ce sprawi\u0107, \u017ce strona przestanie dzia\u0142a\u0107. Pami\u0119taj, \u017ce lo\u015b\u0107 post\xf3w na stronie b\u0119dzie ros\u0142a z czasem."),(0,i.kt)("p",null,"-- Precyzyjnie wskazuj jakie posty chcesz wyci\u0105gn\u0105\u0107 z bazy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Query for 500 published posts of certain post type.\nnew WP_Query( array(\n  'posts_per_page' => 500,\n  'post_type'      => 'my_awesome_post_type'\n  'post_status'    => 'publish'\n));\n")),(0,i.kt)("p",null,"-- Je\u017celi potrzebujesz tylko list\u0119 ID-ik\xf3w post\xf3w, skorzystaj z ",(0,i.kt)("inlineCode",{parentName:"p"},"fields => ids")),(0,i.kt)("p",null,"-- ",(0,i.kt)("strong",{parentName:"p"},"Zawsze u\u017cywaj")," ",(0,i.kt)("inlineCode",{parentName:"p"},"no_found_rows => true"),", je\u017celi nie b\u0119dziesz korzysta\u0142 z paginacji. Dzi\u0119ki temu nie zostanie wykonane zapytanie ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL_CALC_FOUND_ROWS"),", co drastycznie przyspieszy zapytanie."),(0,i.kt)("p",null,"-- Unikaj korzystania z ",(0,i.kt)("inlineCode",{parentName:"p"},"post__not_in")),(0,i.kt)("h3",{id:"pozosta\u0142e-rady"},"Pozosta\u0142e rady"),(0,i.kt)("p",null,"-- ",(0,i.kt)("inlineCode",{parentName:"p"},"in_array()")," powinno by\u0107 u\u017cywane rozwa\u017cnie, gdy\u017c jest to funkcja znana ze s\u0142abej skalowalno\u015bci, nie jest zalecana w przydaku du\u017cego zbioru danych. Zalecane jest takie budowanie tablic, kt\xf3re faworyzuje sprawdzanie klucza za pomoc\u0105 funkcji ",(0,i.kt)("inlineCode",{parentName:"p"},"isset()"),"."),(0,i.kt)("h2",{id:"cache"},"Cache"),(0,i.kt)("p",null,"Cachowanie to po prostu zapisywanie danych w jakim\u015b miejscu (np. w bazie danych lub w pami\u0119ci) w celu ponownego, szybkiego, skorzystania z tych danych. Jest to fundamentalny koncept w WordPressie, z kt\xf3rym powinien by\u0107 zaznajomiony ka\u017cdy developer, a w szczeg\xf3lno\u015bci ten pracuj\u0105cy ze stronami generuj\u0105cymi du\u017cy ruch (high traffic environments)."),(0,i.kt)("h3",{id:"transients-api"},"Transients API"),(0,i.kt)("p",null,"Transients API to prosty mechanizm cachowania, kt\xf3ry zapisuje dane bazie danych w tabeli ",(0,i.kt)("inlineCode",{parentName:"p"},"wp_options"),", zatem mo\u017cemy powiedzie\u0107, \u017ce zapis jest trwa\u0142y (persistent)."),(0,i.kt)("p",null,"Podczas tworzenia transienta mo\u017cemy ustawi\u0107 nazw\u0119 transienta, po kt\xf3rej po\u017aniej b\u0119dziemy go wydobywa\u0107 z bazy danych oraz czas po kt\xf3rym transient wyga\u015bnie i zostanie usuni\u0119ty."),(0,i.kt)("p",null,"Przyk\u0142ad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Always check if cached transient exists\n$special_query_results = get_transient( 'special_query_results' )\n\n// If it exists, it will be ready to use\n// If false is returned, we need to set transient\nif ( false === $special_query_results ) {\n    // Request data\n    $special_query_results = new WP_Query( array(\n      'posts_per_page' => 500,\n      'post_type'      => 'my_awesome_post_type'\n      'post_status'    => 'publish'\n    ) );\n    \n    // Set transient\n    set_transient( 'special_query_results', $special_query_results, 12 * HOUR_IN_SECONDS );\n}\n// Use the data like you would have normally...\n")),(0,i.kt)("p",null,"-- Mo\u017cliwe jest stworzenie transienta, kt\xf3ry nigdy nie wyga\u015bnie, omijaj\u0105c parametr ",(0,i.kt)("inlineCode",{parentName:"p"},"$expiration"),", jednak nie jest to zalecane gdy\u017c takie transienty s\u0105 autoloadowane na ka\u017cdej podstronie, co mo\u017ce doprowadzi\u0107 do spadku wydajno\u015bci."),(0,i.kt)("p",null,"-- W przypadku \u015brodowisk ze skonfigurowanym trwa\u0142ym mechanizmem cachowania (",(0,i.kt)("strong",{parentName:"p"},"persistent caching mechanism"),"), wykorzystuj\u0105cym np. Memcached lub Redis, transienty staj\u0105 si\u0119 wrapperem dla zwyk\u0142ych metod obiektu ",(0,i.kt)("inlineCode",{parentName:"p"},"WP_Object_Cache")," (s\u0105 zapisywane w pami\u0119ci, a nie w tabeli ",(0,i.kt)("inlineCode",{parentName:"p"},"wp_options"),")."),(0,i.kt)("p",null,"-- W stronach generuj\u0105cych du\u017cy ruch, nie nale\u017cy korzysta\u0107 z transient\xf3w, gdy\u017c b\u0119d\u0105 one zapycha\u0142y tabel\u0119 ",(0,i.kt)("inlineCode",{parentName:"p"},"wp_options"),", w przypadku takich stron wskazane jest skonfigurowanie ",(0,i.kt)("strong",{parentName:"p"},"persistent caching mechanism")," oraz korzystanie z dobrodziejstw ",(0,i.kt)("inlineCode",{parentName:"p"},"WP_Object_Cache"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/transients/"},"Dokumentacje i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("h3",{id:"object-cache"},"Object cache"),(0,i.kt)("p",null,"Object cache to niew\u0105tpliwie najlepsze narz\u0119dzie w WordPressie do cachowania d\u0142ugo trwaj\u0105cych zapyta\u0144 do bazy danych, skomplikowanych funkcji, request\xf3w do zewn\u0119trznych serwis\xf3w i tym podobnych. "),(0,i.kt)("p",null,"Mimo to znajomo\u015b\u0107 Object cache zdaje si\u0119 by\u0107 dosy\u0107 niszowa lub temat nie jest dla wszystkich jasny."),(0,i.kt)("h4",{id:"non-persistent-vs-persistent"},"Non-persistent vs persistent"),(0,i.kt)("p",null,"Domy\u015blnie, zapisywanie obiekt\xf3w w pami\u0119ci RAM, bo to tam trzymane s\u0105 dane, nie jest trwa\u0142e (non-persistent) i pozostaj\u0105 one w pami\u0119ci tylko i wy\u0142\u0105cznie na czas trwania requesta (tego konkretnego page loadu), a wi\u0119c przyk\u0142adowo nie mo\u017cna wykorzysta\u0107 zapisanych danych po za\u0142adowaniu innej strony. Taki non-persistent cache nie jest zatem a\u017c tak u\u017cyteczny i ma ogranoczone zastosowanie."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Twa\u0142y zapisywanie obiekt\xf3w w pami\u0119ci")," mo\u017cemy osi\u0105gn\u0105\u0107 poprzez skonfigurowanie \u015brodowiska z trwa\u0142ym mechanizmem cachowania (",(0,i.kt)("strong",{parentName:"p"},"persistent caching mechanism"),"), wykorzystuj\u0105cym np. Memcached, Redis lub inny system buforowania pami\u0119ci."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u015arodisko lokalne z dzia\u0142aj\u0105cym Object cachem  + Redis"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Zainstaluj ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://wordpress.org/plugins/redis-cache/"},"plugin Redis Object Cache"))),(0,i.kt)("li",{parentName:"ol"},"Zainstaluj Redis na swojej maszynie, post\u0119puj ",(0,i.kt)("a",{parentName:"li",href:"https://redis.io/docs/getting-started/installation/"},"zgodnie ze wskaz\xf3wkami")))),(0,i.kt)("p",null,"Zasada dzia\u0142ania, jest podobna jak w Transientach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Always check if cached object exists\n$all_awesome_posts = wp_cache_get( 'all_posts', 'posts' ); // cache item key, cache item group\n\n// If it exists, it will be ready to use\n// If false is returned, we need to set the object\nif ( false === $all_awesome_posts ) {\n    // Request data\n    $data = new WP_Query( array(\n        'post_status' => 'publish',\n    ) );\n    \n    if ( ! is_wp_error( $data ) {\n        // Set object cache item\n        wp_cache_set( 'all_posts', $data, 'posts', 600 ); // cache item key, data, cache item group, expire value\n    }\n}\n\n// Use the data like you would have normally...\n")),(0,i.kt)("p",null,"Dost\u0119pne metody:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_get()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_set()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_delete()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_flush()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_add()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_replace()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_add_global_groups()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_add_non_persistent_groups()")),(0,i.kt)("p",null,"Od wersji Wordpressa 6.1 dost\u0119pne s\u0105 nowe metody, jednak nie we wszystkich implementacjach cacha dzia\u0142aj\u0105:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_get_multiple()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_set_multiple()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_delete_multiple()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_add_multiple()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_flush_group()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_cache_flush_runtime()")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/classes/wp_object_cache/"},"Dokumentacja i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("p",null,"-- Klasa ",(0,i.kt)("inlineCode",{parentName:"p"},"WP_Object_Cache")," pozwala na dodawanie, usuwanie, a nawet podmieniania danych. Pozwala na gropowanie zcachowanych danych oraz zarz\u0105dzanie grupami."),(0,i.kt)("p",null,"-- Napisany kod nie powinien zak\u0142ada\u0107, \u017ce obiekt istnieje. Zawsze nale\u017cy si\u0119 upewni\u0107, \u017ce tak jest i by\u0107 gotowym na wygenerowanie obiektu."),(0,i.kt)("p",null,"-- Zcachowany w pami\u0119ci obiekt mo\u017ce wygasn\u0105\u0107 po zadanym mu czasie ",(0,i.kt)("inlineCode",{parentName:"p"},"expire"),", je\u017celi czas ten nie zosta\u0142 zadany, to powinni\u015bmy sami zadba\u0107 o zregenerowanie cacha."),(0,i.kt)("p",null,"-- W przypadku customowych relacji pomi\u0119dzy tre\u015bciami, przyk\u0142adowo mamy wystawiony customowy endpoint API, kt\xf3ry chcemy cachowa\u0107, a kt\xf3ry korzysta z danych z jakiego\u015b post typu, powinni\u015bmy wdro\u017cy\u0107 ",(0,i.kt)("strong",{parentName:"p"},"mechanizm purgowania lub podmieniania zawarto\u015bci cacha")," po updacie danego wpisu. Sprawdzonym rozwi\u0105zaniem b\u0119dzie tutaj podpi\u0119cie si\u0119 pod hook ",(0,i.kt)("inlineCode",{parentName:"p"},"wp_after_insert_post"),", kt\xf3ry jest wykonywany wystarczaj\u0105co p\xf3\u017ano."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Hook into action\nadd_action( 'wp_after_insert_post', 'my_awesome_purge_mechanism', 10, 1 );\n\n// Logic for cache purging\nfunction my_awesome_purge_mechanism( $post_id ) {\n    // Always check if cached object exists\n    $my_endpoint_data = wp_cache_get( 'my_endpoint_data', 'posts' ); // cache item key, cache item group\n    \n    // If it exists, we can replace data stored in cache to make sure data is up-to-date\n    if ( false !== $my_endpoint_data ) {\n        // Request data\n        $data = wp_remote_get( get_rest_url( null, '/wp/v2/my_awesome_endpoint/' . $post_id ) );\n    \n        if ( ! is_wp_error( $data ) {\n            // Replace data within object cache item\n            wp_cache_replace( 'my_endpoint_data', $data, 'posts', 600 ); // cache item key, data, cache item group, expire value\n        }\n    } else {\n        // Request data\n        $data = wp_remote_get( get_rest_url( null, '/wp/v2/my_awesome_endpoint/' . $post_id ) );\n        \n        if ( ! is_wp_error( $data ) {\n            // Set cache item as it was not created yet\n            wp_cache_set( 'my_endpoint_data', $data, 'posts', 600 ); // cache item key, data, cache item group, expire value\n        }\n    }\n}\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Zapytania o zewn\u0119trzne zasoby po API zawsze powinny by\u0107 cachowane.")))}y.isMDXComponent=!0}}]);