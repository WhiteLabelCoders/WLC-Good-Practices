"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[973],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var i=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=i.createContext({}),s=function(e){var n=i.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=t,u=c["".concat(p,".").concat(m)]||c[m]||k[m]||o;return a?i.createElement(u,r(r({ref:n},d),{},{components:a})):i.createElement(u,r({ref:n},d))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3306:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=a(7462),t=(a(7294),a(3905));const o={sidebar_position:1},r="Dobre praktyki (S)CSS",l={unversionedId:"Standardy CSS/good-practices",id:"Standardy CSS/good-practices",title:"Dobre praktyki (S)CSS",description:"DRY",source:"@site/docs/Standardy CSS/good-practices.md",sourceDirName:"Standardy CSS",slug:"/Standardy CSS/good-practices",permalink:"/WLC-Good-Practices/Standardy CSS/good-practices",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integracja Jira <-> Gitlab",permalink:"/WLC-Good-Practices/Praca projektowa/branching"},next:{title:"Informacje og\xf3lne",permalink:"/WLC-Good-Practices/Standardy HTML/intro"}},p={},s=[{value:"DRY",id:"dry",level:2},{value:"Konwencja nazw i tworzenia kodu oraz optymalizacja selektor\xf3w.",id:"konwencja-nazw-i-tworzenia-kodu-oraz-optymalizacja-selektor\xf3w",level:2},{value:"Zmienne globalne, lokalne - CSS Variables",id:"zmienne-globalne-lokalne---css-variables",level:2},{value:"Unikanie u\u017cywania !important w kodzie",id:"unikanie-u\u017cywania-important-w-kodzie",level:2},{value:"Shorthand syntax",id:"shorthand-syntax",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Znaczenie properties w CSS",id:"znaczenie-properties-w-css",level:2},{value:"LAYOUT",id:"layout",level:3},{value:"CSS Properties - LAYOUT",id:"css-properties---layout",level:4},{value:"PAINT",id:"paint",level:3},{value:"CSS Properties - PAINT",id:"css-properties---paint",level:4},{value:"COMPOSITE",id:"composite",level:3},{value:"CSS Properties - COMPOSITE",id:"css-properties---composite",level:4},{value:"RWD - Media queries",id:"rwd---media-queries",level:2},{value:"Projektowanie animacji w CSS",id:"projektowanie-animacji-w-css",level:2},{value:"Jak dobrze animowa\u0107 CSS poprzez JavaScript",id:"jak-dobrze-animowa\u0107-css-poprzez-javascript",level:2},{value:"U\u017cywanie asset\xf3w w CSS",id:"u\u017cywanie-asset\xf3w-w-css",level:2},{value:"Dokumentowanie - komentarze",id:"dokumentowanie---komentarze",level:2}],d={toc:s},c="wrapper";function k(e){let{components:n,...a}=e;return(0,t.kt)(c,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"dobre-praktyki-scss"},"Dobre praktyki (S)CSS"),(0,t.kt)("h2",{id:"dry"},"DRY"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"DRY - Don't Repeat Yourself")," - celem tej zasady jest nie powtarzanie tych samych fragment\xf3w kodu w wielu miejscach co pomaga w lepszym zarz\u0105dzaniu kodem, co wp\u0142ywa na jego utrzymanie - a przede wszystkim na rozmiar wynikowego pliku."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<button class="button button--primary">Przycisk</button>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".button {\n  /* Wsp\xf3lne style przycisk\xf3w */\n  padding: 0.625rem 1.125rem;\n  border-radius: 0.4rem;\n  /* ... */\n}\n\n.button--primary {\n  /* Dodatkowe style dla przycisk\xf3w g\u0142\xf3wnych */\n  background-color: #007bff;\n  color: #fff;\n  /* ... */\n}\n\n.button--secondary {\n  /* Dodatkowe style dla przycisk\xf3w wt\xf3rnych */\n  background-color: #6c757d;\n  color: #fff;\n  /* ... */\n}\n")),(0,t.kt)("p",null,"Tworzenie globalnych konfiguracji dla element\xf3w pozwala zachowa\u0107 jako\u015b\u0107 kodu i sp\xf3jno\u015b\u0107 w kontekscie ca\u0142ego projektu."),(0,t.kt)("h2",{id:"konwencja-nazw-i-tworzenia-kodu-oraz-optymalizacja-selektor\xf3w"},"Konwencja nazw i tworzenia kodu oraz optymalizacja selektor\xf3w."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"BEM")," -  rozwi\u0105zuje problem konwencji tworzenia kodu, jego struktury oraz pisania kodu przesadnie zagnie\u017cd\u017conego."),(0,t.kt)("p",null,"BEM (Block Element Modifier) - opiera si\u0119 na nazwach klas, kt\xf3re odzwierciedlaj\u0105 struktur\u0119 HTML i relacje mi\u0119dzy elementami. Dzi\u0119ki takiemu podej\u015bciu do organizacji kodu HTML i CSS zyskujemy mo\u017cliwo\u015b\u0107 uzyskania \u0142atwej skalowalno\u015bci projektu, rozr\xf3\u017cnienia odpowiedzialno\u015bci danych selektor\xf3w, prostej i przejrzystej stylizacji projektu."),(0,t.kt)("p",null,"Og\xf3lna struktura BEM z wyja\u015bnieniem"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".block {} // block - g\u0142owny element komponentu\n.block__element {} // zagnie\u017cdzony w HTML element\n.block--white-bg {} // modyfikator np bia\u0142e t\u0142o\n")),(0,t.kt)("p",null,"Przyk\u0142ad komponentu w BEM"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<div class="product">\n  <h3 class="product__title">Nazwa produktu</h3>\n  <p class="product__description">Opis produktu</p>\n</div>\n')),(0,t.kt)("p",null,"Reprezentacja kodu w SCSS"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},".product {\n    margin: 1.4rem;\n\n    &__title {\n        font-size : 1rem;\n        ....\n    }\n    \n    &__description {\n        font-size : 0.8rem;\n        ....\n    }\n}\n")),(0,t.kt)("p",null,"Daje nam przeniesienie w CSS na kod, kt\xf3ry nie tworzy z\u0142o\u017conej struktury i zb\u0119dnych zagnie\u017cdze\u0144:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".product {\n    margin: 1.4rem;\n}\n\n.product__title {\n    font-size: 1rem;\n}\n\n.product__description {\n    font-size: 0.8rem;\n}\n")),(0,t.kt)("p",null,"Dzi\u0119ki takiemu podej\u015bciu u\u017cywanie danego selektora jest uniwersalne w kontek\u015bcie ca\u0142ej strony i nie ma konieczno\u015bci dodatkowego powtarzania kodu. "),(0,t.kt)("p",null,"BEM rozwi\u0105zuje problem przesadnego zagnie\u017cd\u017cania element\xf3w a co za tym idzie obni\u017cenie pracy kt\xf3r\u0105 musi wykona\u0107 przegl\u0105darka podczas renderowania kodu - nie musi przeszukiwa\u0107 wielu poziom\xf3w kodu HTML i CSS by przypisa\u0107 mu warto\u015bci. Dla przyk\u0142adu"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card">\n    <h2 class="card__title"> Tytu\u0142 </h2>\n    <div class="card__description">\n        <h3 class="card__subtitle"> Podstawowe informacje: </h3>\n        <p class="card__text">Podstawowy tekst opisuj\u0105cy przedmiot.</p>\n    </div>\n</div>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* B\u0142\u0119dne stylowanie w CSS */\n\n.card div h3 {\n    font-size: 0.6rem;\n}\n\n/* Ma\u0142e zagnie\u017cdzenia w kodzi - wywo\u0142uj\u0105ce mniejsze obci\u0105zenie - akceptowalne */\n\n.card h3 {\n    font-size: 0.6rem;\n}\n\n/* Z zastosowaniem BEM nie ma konieczno\u015bci zagnie\u017cdzania selektor\xf3w w CSS */\n\n.card__subtitle {\n    font-size: 0.6rem;\n}\n")),(0,t.kt)("p",null,"Na pierwszy rzut okiem nie ma r\xf3\u017cnicy - jednak dla przegl\u0105darki podczas renderowania, procesora i performance r\xf3\u017cnica jest kolosalna, gdy\u017c podej\u015bcie BEM znacz\u0105co obni\u017ca ilo\u015b\u0107 zasob\xf3w niezb\u0119dnych. do uruchomienia kodu."),(0,t.kt)("h2",{id:"zmienne-globalne-lokalne---css-variables"},"Zmienne globalne, lokalne - CSS Variables"),(0,t.kt)("p",null,"Pozwalaj\u0105 na ujednolicenie kodu / styli w projekcie."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"U\u017cyj nazw, kt\xf3re s\u0105 \u0142atwe do zrozumienia i opisuj\u0105ce ich przeznaczenie."),(0,t.kt)("li",{parentName:"ul"},"Zdefiniuj zmienne globalne na pocz\u0105tku pliku, przed ich u\u017cyciem.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* Globalne - deklarowane w osobnym pliku np _variables.css */\n\n:root {\n    /* kolory */\n    --primary-color: #000;\n    --secondary-color: #fff;\n\n    /* font */\n    --font-default: 1rem;\n    --font-18: 1.125rem;\n}\n\n/* lokalne - pozwalaj\u0105ce nadpisa\u0107 warto\u015bci zmiennych globalnych */\n\n.button {\n    --primary-color: #ddd;\n    color: var(--primary-color);\n}\n")),(0,t.kt)("h2",{id:"unikanie-u\u017cywania-important-w-kodzie"},"Unikanie u\u017cywania !important w kodzie"),(0,t.kt)("p",null,"Unikanie u\u017cywania ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"!important"))," w kodzie CSS jest zalecane, poniewa\u017c mo\u017ce prowadzi\u0107 do utraty kontroli nad kolejno\u015bci\u0105 i specyficzno\u015bci\u0105 styl\xf3w."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"!important"))," przypisuje najwy\u017cszy priorytet danemu stylowi, co mo\u017ce powodowa\u0107 trudno\u015bci w zarz\u0105dzaniu i utrzymaniu kodu CSS."),(0,t.kt)("li",{parentName:"ul"},"Nadu\u017cywanie ",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"!important"))," mo\u017ce prowadzi\u0107 do trudno\u015bci w debugowaniu i rozwi\u0105zywaniu problem\xf3w, gdy konflikty styl\xf3w wyst\u0119puj\u0105 w kodzie."),(0,t.kt)("li",{parentName:"ul"},"problem kaskadowo\u015bci - mo\u017ce zak\u0142\xf3ca\u0107 naturaln\u0105 kaskad\u0119 CSS, w kt\xf3rej style s\u0105 aplikowane wed\u0142ug okre\u015blonej kolejno\u015bci i hierarchii."),(0,t.kt)("li",{parentName:"ul"},"trudno\u015bci w skalowalno\u015bci i rozszerzalno\u015bci - mo\u017ce utrudnia\u0107 skalowalno\u015b\u0107 i rozszerzalno\u015b\u0107 kodu CSS w przysz\u0142o\u015bci."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"!important"))," ma swoje zastosowanie w okre\u015blonych sytuacjach, takich jak nadpisywanie styl\xf3w zewn\u0119trznych bibliotek, ale warto ogranicza\u0107 jego stosowanie tylko do konkretnych przypadk\xf3w, gdy jest to naprawd\u0119 konieczne.")),(0,t.kt)("h2",{id:"shorthand-syntax"},"Shorthand syntax"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* marginesy, paddingi */\n\nmargin: 0;\nmargin: 1rem 0.5rem;\ninset: 0;\ninset: 1rem 0.5rem;\n\npadding: 0;\npadding: 1rem 0;\n\n\n/* background */\nbackground: url('../img/star.svg') no-repeat center center;\n\n/* border */\nborder: 0.5rem solid #000;\n")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"Pe\u0142na lista skr\xf3t\xf3w."),"."),(0,t.kt)("h2",{id:"syntax"},"Syntax"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Formatowanie")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* \n* - Jeden selector w linii,\n*   - spacja po selectorze przed nawiasem,\n*   - ko\u0144czenie linii \u015brednikiem\n*   - stosowanie wci\u0119\u0107 - w zale\u017cno\u015bci od konfiguracji lintera\n*/\n\n.class1,\n.class2,\n.class3 {\n    display: flex;\n    color: #fff;\n}\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Kolejno\u015b\u0107 deklaracji")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"/* Przyk\u0142ad w css */\n.selector {\n  /* Uk\u0142ad */\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  font-size: 1rem;\n\n  /* Wizualizacja */\n  color: #000;\n  background-color: #fff;\n  z-index: 1;\n\n  /* Interakcja */\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n\n  /* Inne */\n  opacity: 0.8;\n}\n")),(0,t.kt)("p",null,"Wy\u017cej wskazany przyk\u0142ad kolejno\u015bci deklaracji jest zgodny z obowi\u0105zuj\u0105cym modelem CSS Triggers - pokazuj\u0105cym jaki wp\u0142yw na performance i czas renderowania strony maj\u0105 poszczeg\xf3lne atrybuty. ",(0,t.kt)("a",{parentName:"p",href:"https://csstriggers.com/"},"CSS Triggers")," oraz wtyczka do Visual Studio Code pomagaj\u0105ca w organizacji kodu css ze wzgl\u0119du na kolejno\u015b\u0107 deklaracji a przy tym opisuj\u0105ca ich znaczenie: ",(0,t.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kisstkondoros.csstriggers"},"CSS Triggers VSC"),". "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Jednostki stosowane w kodzie")),(0,t.kt)("p",null,"Nale\u017cy unia\u0107 u\u017cywania ",(0,t.kt)("inlineCode",{parentName:"p"},"PX")," jako domy\u015blnych jednostek miary w projektach. Preferowan\u0105 jednostk\u0105 podstawow\u0105 jest ",(0,t.kt)("inlineCode",{parentName:"p"},"REM (relative to font-size of the root element). Daje ona wi\u0119ksza kontrol\u0119 nad skalowalno\u015bci\u0105 kodu przy pracach z RWD. "),"REM` - wyznacza standardow\u0105 wielko\u015b\u0107 fontu na stronie a co za tym idzie, przeliczenie wielko\u015bci wzgledem w\u0142a\u015bnie tej ustawione, dla przyk\u0142adu:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 16px; /* standardowa jednostka dla przegl\u0105darek co oznacza 1rem = 16px */\n}\n/* przyk\u0142ad */\n.paragraph {\n  font-size: 1rem; /* 16px */\n}\n\n/* lub przy zmianie */\nhtml {\n  font-size: 10px; /* wtedy 1rem = 10px */\n}\n\n.paragraph {\n  font-size: 1rem; /* 10px */\n}\n")),(0,t.kt)("h2",{id:"znaczenie-properties-w-css"},"Znaczenie properties w CSS"),(0,t.kt)("p",null,"CSS Triggers to podzia\u0142 na kolejne etapy renderowania strony internetowej - ale r\xf3wnie\u017c korzystny dla projektu podzia\u0142 logiczny w jakiej kolejno\u015bci pisa\u0107 properties."),(0,t.kt)("p",null,"W kolejno\u015bci od najbardziej obci\u0105\u017caj\u0105cych procesor i jednocze\u015bnie wykonywanych na samym pocz\u0105tku: "),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"em"},"LAYOUT"))," \u2192 ",(0,t.kt)("em",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"em"},"PAINT"))," \u2192 ",(0,t.kt)("em",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"em"},"COMPOSITE"))),(0,t.kt)("h3",{id:"layout"},"LAYOUT"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Layout to w\u0142a\u015bciwo\u015bci CSS, kt\xf3re powoduj\u0105, \u017ce przegl\u0105darka musi obliczy\u0107 po\u0142o\u017cenie i rozmiar element\xf3w na stronie."),(0,t.kt)("li",{parentName:"ul"},'Najbardziej "kosztowna" operacja w procesie renderowania, poniewa\u017c procesor graficzny musi przebudowa\u0107 dany element i jego "childy" gdy zostanie zmieniony styl odpalaj\u0105cy zmian\u0119 layoutu na stronie.'),(0,t.kt)("li",{parentName:"ul"},"Wyst\u0119puje, gdy drzewo DOM jest manipulowane, lub styl wp\u0142ywaj\u0105cy na uk\u0142ad jest zmieniany, gdy rozmiar okna przegl\u0105darki jest zmieniany, gdy w\u0142a\u015bciwo\u015b\u0107 class (className) jest zmieniana."),(0,t.kt)("li",{parentName:"ul"},"Nale\u017cy pami\u0119ta\u0107, \u017ce ka\u017cda zmiana w jednej z w\u0142a\u015bciwo\u015bci layoutu mo\u017ce mie\u0107 wp\u0142yw na inne elementy na stronie, dlatego wa\u017cne jest, aby pisa\u0107 je w odpowiedniej kolejno\u015bci i starannie testowa\u0107 ich wp\u0142yw na layout.")),(0,t.kt)("h4",{id:"css-properties---layout"},"CSS Properties - LAYOUT"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"position"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"top"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"left"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"right"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"bottom"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"width"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"height"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"min-height"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"padding"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"margin"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"display"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"border-width"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"border"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"font-size"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"float"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"text-align"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"overflow-y"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"font-weight"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"overflow"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"font-family"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"line-height"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"vertical-align"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"clear"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"white-space")),(0,t.kt)("h3",{id:"paint"},"PAINT"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Paint to drugi w kolejce kosztowny proces renderowania element\xf3w na stronie - w\u0142a\u015bciwo\u015bci nale\u017c\u0105ce do tej grupy nie uruchamiaj\u0105 Layout"),(0,t.kt)("li",{parentName:"ul"},'Odpowiada za "wype\u0142nienie" pixelami ka\u017cdego elementu na stronie po warstwach'),(0,t.kt)("li",{parentName:"ul"},"Krok Paint uruchamia si\u0119 gdy chcemy zmieni\u0107 background-color, doda\u0107 outline"),(0,t.kt)("li",{parentName:"ul"},"Ta operacja jest kosztowna gdy\u017c przegl\u0105darka musi sprawdzi\u0107 ka\u017cdy element i okre\u015bli\u0107 co jest widoczne / co powinno by\u0107 wy\u015bwietlane")),(0,t.kt)("h4",{id:"css-properties---paint"},"CSS Properties - PAINT"),(0,t.kt)("p",null," ",(0,t.kt)("inlineCode",{parentName:"p"},"color"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"border-style"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"visibility"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"background"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"text-decoration"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"background-image"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"background-position"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"background-repeat"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"outline-color"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"outline"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"outline-style"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"border-radius"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"outline-width"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"box-shadow"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"background-size")),(0,t.kt)("h3",{id:"composite"},"COMPOSITE"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Compositing to technika rozdzielania cz\u0119\u015bci strony na warstwy, rasteryzowania ich osobno i komponowania jako strony w osobnym w\u0105tku zwanym compositor thread. W przypadku przewijania, poniewa\u017c warstwy s\u0105 ju\u017c rasteryzowane, wszystko co trzeba zrobi\u0107 to skomponowa\u0107 now\u0105 klatk\u0119. Animacj\u0119 mo\u017cna osi\u0105gn\u0105\u0107 w ten sam spos\xf3b, przesuwaj\u0105c warstwy i komponuj\u0105c now\u0105 klatk\u0119."),(0,t.kt)("li",{parentName:"ul"},"Podstawowymi w\u0142a\u015bciwo\u015bciami, kt\xf3re wywo\u0142uj\u0105 composite s\u0105 opacity i transform (translate, scale, rotate)"),(0,t.kt)("li",{parentName:"ul"},'Aby dowiedzie\u0107 si\u0119, kt\xf3re elementy powinny znajdowa\u0107 si\u0119 w kt\xf3rych warstwach, g\u0142\xf3wny w\u0105tek przechodzi przez drzewo uk\u0142adu w celu utworzenia drzewa warstw (ta cz\u0119\u015b\u0107 nazywa si\u0119 "Update Layer Tree" w panelu wydajno\u015bci DevTools). Je\u015bli pewne cz\u0119\u015bci strony, kt\xf3re powinny by\u0107 oddzielnymi warstwami (jak np. menu boczne w suwaku) nie dostaj\u0105 ich, to mo\u017cesz podpowiedzie\u0107 przegl\u0105darce u\u017cywaj\u0105c atrybutu will-change w CSS.')),(0,t.kt)("h4",{id:"css-properties---composite"},"CSS Properties - COMPOSITE"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"opacity"),"\n",(0,t.kt)("inlineCode",{parentName:"p"},"transform")),(0,t.kt)("h2",{id:"rwd---media-queries"},"RWD - Media queries"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Responsive Web Design")," to pot\u0119\u017cne narz\u0119dzie do tworzenia widok\xf3w dla wszystkich urz\u0105dze\u0144."),(0,t.kt)("p",null,"Tworz\u0105c kod CSS nale\u017cy pami\u0119ta\u0107 aby tworzy\u0107 go w pierwszej kolejno\u015bci dla urz\u0105dze\u0144 mobilnych ",(0,t.kt)("inlineCode",{parentName:"p"},"MOBILE FIRST")," - ograniczaj\u0105c w ten spos\xf3b jego ilo\u015b\u0107 potrzebn\u0105 do za\u0142adowania na mniejszych urz\u0105dzeniach. Dlatego w pierwszej kolejno\u015bci tworzymy kod kt\xf3ry nie wymaga dodawania media queries."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"MOBILE FIRST")," to podej\u015bcie, w kt\xf3rym projektowanie i rozwijanie interfejsu u\u017cytkownika rozpoczyna si\u0119 od wersji przeznaczonej dla urz\u0105dze\u0144 mobilnych."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},".box {\n    /* kod og\xf3lny - niezb\u0119dny dla mobile i wykorzystywany na ka\u017cdej rozdzielczo\u015bci*/\n    display: flex;\n    justify-content: center;\n    width: 100%;\n\n    /* kod dla wi\u0119kszych urz\u0105dze\u0144 nadpisuj\u0105cy warto\u015bci urz\u0105dze\u0144 mobilnych */\n    \n    @media and (min-width: 768px) {\n        /* zmiana szeroko\u015bci elementu wchodz\u0105ca gdy zostanie osi\u0105gniety na urz\u0105dzewniu odpowiedni rozmiar ekranu */\n        width: 50%;\n    }\n}\n")),(0,t.kt)("p",null,"W projektach nale\u017cy u\u017cywa\u0107 wcze\u015bniej predefiniowanych breakpoint\xf3w oraz mixin\xf3w, kt\xf3ry u\u0142atwiaj\u0105 prac\u0119 z kodem a tak\u017ce utrzymanie projektu."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},"/* breakpoints */\n\n    // Start\n  xxs: 0,\n  // Phone\n  xs: 375px,\n  // Phone\n  sm: 576px,\n  // Tablet\n  md: 782px,\n  // Tablet\n  lg: 992px,\n  // Desktop\n  xl: 1200px,\n  // Desktop\n  xxl: 1440px,\n  // Desktop\n  3xl: 1920px,\n  // Large desktop\n  4xl: 2560px\n\n/* mixins - md warto\u015b\u0107 pobrana z listy powy\u017cej */\n\n@include media-breakpoint-up(md) {\n    ....\n}\n\n/* dopuszczalny media query gdy zmiana ma znajdowa\u0107 si\u0119 w danym przedziale */\n\n@include media-breakpoint-between(md, xl) {\n    ....\n}\n")),(0,t.kt)("h2",{id:"projektowanie-animacji-w-css"},"Projektowanie animacji w CSS"),(0,t.kt)("p",null,"Animacje w CSS s\u0105 niezwykle istotne w kwestii wykorzystania GPU - koszt zb\u0119dnej akcji w CSS odbije si\u0119 na performance strony lub aplikacji. Du\u017ca ilo\u015b\u0107 animacji obci\u0105\u017cy niepotrzebnie procesor i sprawi, \u017ce wynik kodu b\u0119dzie s\u0142aby a jednocze\u015bnie nieprzyjemny dla oka."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Preferowane w\u0142a\u015bciwo\u015bci do u\u017cywania w animacjach ",(0,t.kt)("inlineCode",{parentName:"li"},"transform")," ",(0,t.kt)("inlineCode",{parentName:"li"},"scale")," ",(0,t.kt)("inlineCode",{parentName:"li"},"rotate")," - wykorzystuj\u0105 one akceleracj\u0119 sprz\u0119tow\u0105 GPU i s\u0105 bardziej wydajne ni\u017c animowanie pozycji ",(0,t.kt)("inlineCode",{parentName:"li"},"left")," ",(0,t.kt)("inlineCode",{parentName:"li"},"top")," ",(0,t.kt)("inlineCode",{parentName:"li"},"right")," ",(0,t.kt)("inlineCode",{parentName:"li"},"bottom")," lub wielko\u015bci elementu ",(0,t.kt)("inlineCode",{parentName:"li"},"width")," ",(0,t.kt)("inlineCode",{parentName:"li"},"height"))),(0,t.kt)("p",null,"Przyk\u0142ad:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".element {\n  transform: translateX(100px) scale(1.1);\n  transition: transform 0.3s ease;\n}\n")),(0,t.kt)("p",null,"b\u0119dzie lepszy ni\u017c:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".element {\n  left: 100px;\n  width: 110%;\n  transition: all 0.3s ease;\n}\n")),(0,t.kt)("p",null,"Konieczne w zachowaniu p\u0142ynno\u015bci animacji s\u0105 funkcje przej\u015bcia:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"linear")," - oferuje sta\u0142e tempo animacji, bez przyspiesze\u0144 ani zwolnie\u0144 - nie generuje du\u017cego obci\u0105\u017cenia"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"ease")," - oferuje \u0142agodne przyspieszenie na pocz\u0105tku i zwalnianie na ko\u0144cu animacji - ma stosunkowo niewielkie obci\u0105\u017cenie"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"ease-in")," - zapewnia \u0142agodne przyspieszanie na pocz\u0105tku animacji - funkcja wymaga obliczenia nieliniowego, co mo\u017ce prowadzi\u0107 do wi\u0119kszego obci\u0105\u017cenia dla GPU w por\xf3wnaniu do ",(0,t.kt)("inlineCode",{parentName:"li"},"ease")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"ease-out"),"  - zapewnia \u0142agodne zwalnianie na ko\u0144cu animacji - Podobnie jak ",(0,t.kt)("inlineCode",{parentName:"li"},"ease-in"),", ta funkcja r\xf3wnie\u017c wymaga obliczenia nieliniowego, co mo\u017ce wp\u0142ywa\u0107 na wydajno\u015b\u0107 GPU"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"ease-in-out")," oferuje \u0142agodne przyspieszanie na pocz\u0105tku i zwalnianie na ko\u0144cu animacji - Ze wzgl\u0119du na obliczenia nieliniowe, mo\u017ce to prowadzi\u0107 do nieco wi\u0119kszego obci\u0105\u017cenia GPU w por\xf3wnaniu do ",(0,t.kt)("inlineCode",{parentName:"li"},"ease"))),(0,t.kt)("h2",{id:"jak-dobrze-animowa\u0107-css-poprzez-javascript"},"Jak dobrze animowa\u0107 CSS poprzez JavaScript"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"U\u017cyj metody ",(0,t.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame"),":"),(0,t.kt)("li",{parentName:"ul"},"Zamiast bezpo\u015brednio manipulowa\u0107 stylami CSS w p\u0119tli ",(0,t.kt)("inlineCode",{parentName:"li"},"for")," lub ",(0,t.kt)("inlineCode",{parentName:"li"},"while"),", warto u\u017cy\u0107 metody ",(0,t.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," do synchronizacji animacji z od\u015bwie\u017caniem ekranu."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," minimalizuje obci\u0105\u017cenie procesora i zapewnia p\u0142ynniejsze animacje.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"function animate() {\n  // Zmiana warto\u015bci CSS\n  element.style.transformX = newValue + 'px';\n\n  // Wywo\u0142anie metody requestAnimationFrame\n  requestAnimationFrame(animate);\n}\n\nanimate();\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"U\u017cyj klasy CSS do definiowania animacji"),(0,t.kt)("li",{parentName:"ul"},"Mo\u017cesz zdefiniowa\u0107 animacj\u0119 w CSS za pomoc\u0105 regu\u0142 ",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"@keyframes")),", a nast\u0119pnie u\u017cy\u0107 klasy CSS do uruchamiania i kontrolowania animacji za pomoc\u0105 JavaScript."),(0,t.kt)("li",{parentName:"ul"},"To podej\u015bcie oddziela logik\u0119 animacji od kodu JavaScript, co u\u0142atwia zarz\u0105dzanie i modyfikacj\u0119 animacji.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"element.classList.add('slide-in');\n")),(0,t.kt)("p",null,"Istnieje wiele bibliotek JavaScript, takich jak GSAP (GreenSock Animation Platform), Anime.js, Velocity.js, kt\xf3re zapewniaj\u0105 zaawansowane funkcje animacji CSS i s\u0105 zoptymalizowane pod k\u0105tem wydajno\u015bci. Przyk\u0142ad przy u\u017cyciu biblioteki GSAP"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"gsap.to(element, { duration: 1, x: 100, opacity: 0.5 });\n")),(0,t.kt)("h2",{id:"u\u017cywanie-asset\xf3w-w-css"},"U\u017cywanie asset\xf3w w CSS"),(0,t.kt)("p",null,"Gradienty i figury geometryczne - lepszy sposob jest zakodowanie ich w css zamiast wczytywa\u0107 dodatkowe \u017cr\xf3d\u0142a, kt\xf3re musz\u0105 zosta\u0107 pobrane."),(0,t.kt)("h2",{id:"dokumentowanie---komentarze"},"Dokumentowanie - komentarze"),(0,t.kt)("p",null,"Komentarze w kodzie CSS s\u0105 dobrymi informacjami o konkretnej funkcji w kodzie, zmianach lub nietypowym dzia\u0142aniu - kt\xf3re nie powinno zosta\u0107 nadpisane. "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},"/* ====================\nSekcja nag\u0142\xf3wka\n==================== */\n\n.header {\n    /* Styl nag\u0142\xf3wka */\n  /* ... */\n}\n\n/* Komentarz opisuj\u0105cy konkretne regu\u0142y CSS */\n\n.button {\n  /* Styl przycisk\xf3w */\n  /* ... */\n}\n\n.button--primary {\n  /* Styl przycisk\xf3w g\u0142\xf3wnych */\n  /* ... */\n}\n\n/*\n * Klasa .box\n * ---------------\n * Klasa .box stosowana jest do stylizacji kontener\xf3w.\n * Zawiera podstawowe style i rozmiary dla kontener\xf3w.\n */\n\n.box {\n  /* Styl kontenera */\n  /* ... */\n}\n")))}k.isMDXComponent=!0}}]);