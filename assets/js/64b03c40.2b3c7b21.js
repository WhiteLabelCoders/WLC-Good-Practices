"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[896],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>c});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,c=d["".concat(p,".").concat(u)]||d[u]||k[u]||o;return n?t.createElement(c,r(r({ref:a},m),{},{components:n})):t.createElement(c,r({ref:a},m))}));function c(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3159:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Znaczniki semantyczne",l={unversionedId:"Standardy HTML/semantics",id:"Standardy HTML/semantics",title:"Znaczniki semantyczne",description:"Dbaj o to by budowana przez Ciebie strona by\u0142a poprawna semantycznie ju\u017c na poziomie layoutu.",source:"@site/docs/Standardy HTML/semantics.md",sourceDirName:"Standardy HTML",slug:"/Standardy HTML/semantics",permalink:"/WLC-Good-Practices/Standardy HTML/semantics",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Informacje og\xf3lne",permalink:"/WLC-Good-Practices/Standardy HTML/intro"},next:{title:"Informacje og\xf3lne",permalink:"/WLC-Good-Practices/Standardy Javascript/intro"}},p={},s=[{value:"Nag\u0142\xf3wki",id:"nag\u0142\xf3wki",level:2},{value:"Listy",id:"listy",level:2},{value:"Cytaty",id:"cytaty",level:2},{value:"Elemety frazuj\u0105ce",id:"elemety-frazuj\u0105ce",level:2},{value:"Linki",id:"linki",level:2},{value:"Button",id:"button",level:2},{value:"Obrazki",id:"obrazki",level:2},{value:"Pozosta\u0142e",id:"pozosta\u0142e",level:2}],m={toc:s},d="wrapper";function k(e){let{components:a,...o}=e;return(0,i.kt)(d,(0,t.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"znaczniki-semantyczne"},"Znaczniki semantyczne"),(0,i.kt)("p",null,"Dbaj o to by budowana przez Ciebie strona by\u0142a poprawna semantycznie ju\u017c na poziomie layoutu.\nDo budowy stosuj odpowiednio tagi ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<nav>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<main>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<section>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<article>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<aside>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," zgodnie z ich przeznaczeniem np:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <header class="page-header">\n        <nav>...</nav>\n    </header>\n\n    <main>\n        <section>\n            <p>Section Description</p>\n            <img src="image.png" alt="banner-image-title"/>\n        </section>\n        <article>\n            <h1>Page Title</h1>\n            <p>Lorem ipsum ...</p>\n        </article>\n    </main>\n    \n    <aside>\n        <div>...</div>\n    </aside>\n\n    <footer class="page-footer">\n        <p>Footer info</p>\n    </footer>\n</body>\n')),(0,i.kt)("p",null,"W powy\u017cszym przyk\u0142adzie mo\u017cna zauwa\u017cy\u0107, \u017ce tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>")," i ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," maj\u0105 klas\u0119, dlaczego?.\nCz\u0119sto wyst\u0119puje zjawisko, \u017ce strony posiadaj\u0105 tylko jeden ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>")," i jeden ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," i w samych stylach mamy podobne zapisy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"header {\n    ...\n}\n\nfooter {\n    ...\n}\n")),(0,i.kt)("p",null,"Nale\u017cy pami\u0119ta\u0107 jednak, \u017ce tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>")," i ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," mo\u017ce wyst\u0119powa\u0107 w wi\u0119kszej ilo\u015bci na jednej stronie np. oba mog\u0105 by\u0107 zagnie\u017cd\u017cone w ",(0,i.kt)("inlineCode",{parentName:"p"},"<article>"),",\ngdzie dla przyk\u0142adu ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," zawiera informacje o autorze. Pami\u0119taj o tym i je\u017celi uznasz, \u017ce warto w Twoim przypadku projektowym wykorzysta\u0107 dodatkowy ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>")," lub ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," zr\xf3b to."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<header>")," - stosuj do stworzenia g\u0142\xf3wnego elementu layoutu gdzie zamieszczasz logo, g\u0142\xf3wne menu, obs\u0142ug\u0119 wersji j\u0119zykowych etc.. Ma zastosowanie r\xf3wnie\u017c np. w ",(0,i.kt)("inlineCode",{parentName:"p"},"<article>"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<nav>")," - stosuj do tworzenia wszelkich nawigacji strony, np. w g\u0142\xf3wnym menu lub nawigacji bocznej."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<footer>")," - stosuj do stworzenia g\u0142\xf3wnego elementu layoutu czyli tak zwan\u0105 stopk\u0119 strony, lub w tagu ",(0,i.kt)("inlineCode",{parentName:"p"},"<article>")," np. umieszczaj\u0105c tam dane o autorze artyku\u0142u."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<main>")," - stosuj by umieszcza\u0107 w nim g\u0142\xf3wny content strony. Ma te\u017c zastosowanie w ",(0,i.kt)("inlineCode",{parentName:"p"},"<article>")," do oznaczenia tre\u015bci g\u0142\xf3wnej artyku\u0142u."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<aside>")," - stosuj zamieszczaj\u0105c w nim dodatkow\u0105 tre\u015b\u0107 do tre\u015bci g\u0142\xf3wnej np. dla ",(0,i.kt)("inlineCode",{parentName:"p"},"<main>"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"<section>")," - stosuj do grupowania tre\u015bci contentu, kt\xf3ry nie jest artyku\u0142em, a posiada nag\u0142\xf3wek ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," lub ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>"),".\nJe\u017celi nie masz nag\u0142\xf3wka u\u017cyj tagu ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," poniewa\u017c walidator b\u0119dzie weryfikowa\u0142 czy section ma nag\u0142\xf3wek i dostaniesz b\u0142\u0105d walidacji\n",(0,i.kt)("inlineCode",{parentName:"p"},"<article>")," - stosuj do umieszczania w nim tre\u015bci. Sam article mo\u017ce mie\u0107 zagnie\u017cd\u017cony ",(0,i.kt)("inlineCode",{parentName:"p"},"<header>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<main>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<aside>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<footer>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<article>\n\n    <header>\n        <h1>Article title</h1>\n        <p>Short description</p>\n    </header>\n\n    <main>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n        <p>Lorem Ipsum</p>\n    </main>\n\n    <aside>\n        <h3>Table of content</h3>\n        <ul>\n            <li><a href="link">Table of content link</a></li>\n        </ul>\n    </aside>\n\n    <footer>\n        <p>Written by a Admin</p>\n        <time datetime="2023-09-31">Published: Today</time>\n    </footer>\n\n</article>\n')),(0,i.kt)("h2",{id:"nag\u0142\xf3wki"},"Nag\u0142\xf3wki"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h3>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h4>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h5>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>")," - stosuj nag\u0142\xf3wki pami\u0119taj\u0105c o hierarchii. Je\u017celi na stronie masz nag\u0142\xf3wek ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),", to kolejny powinien by\u0107 nag\u0142\xf3wkiem ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>")," itd.\nNie zaburzaj hierarchii nag\u0142\xf3wk\xf3w strony stosuj\u0105c np. nag\u0142\xf3wek ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," potem ",(0,i.kt)("inlineCode",{parentName:"p"},"<h3>"),". Nag\u0142\xf3wek ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," jest bardzo istotny i powinien wyst\u0119powa\u0107 na ka\u017cdej stronie."),(0,i.kt)("h2",{id:"listy"},"Listy"),(0,i.kt)("p",null,"Przed utworzeniem listy zastan\xf3w si\u0119 jak\u0105 list\u0119 najlepiej zastosowa\u0107 w stosunku do contentu.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>")," - dla nie uporz\u0105dkowanych list, gdzie kolejno\u015bci pozycji listy nie ma wi\u0119kszego znaczenia.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<ol>")," - dla uporz\u0105dkowanych list, gdzie kolejno\u015b\u0107 pozycji listy ma znaczenie.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<dl>")," - dla list opisowych, gdzie mamy do dyspozycji \u201cterm\u201d i \u201cdefinition\u201d. Przyk\u0142adem niech b\u0119dzie komponent ",(0,i.kt)("strong",{parentName:"p"},"FAQ"),". Jako \u201cterm\u201d mo\u017cemy uzupe\u0142ni\u0107 pytanie a jako \u201cdefinition\u201d odpowied\u017a."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<dl>\n    <dt>Question</dt>\n    <dd>Answer</dd>\n\n    <dt>Question 2</dt>\n    <dd>Answer 2</dd>\n</dl>\n")),(0,i.kt)("p",null,"Kolejnym przyk\u0142adem mo\u017ce by\u0107 lista opisowa w\u0142a\u015bciwo\u015bci produktu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<dl>\n    <dt>Weight:</dt>\n    <dd>20kg</dd>\n\n    <dt>Width:</dt>\n    <dd>150cm</dd>\n\n    <dt>Color:</dt>\n    <dd>Blue</dd>\n</dl>\n")),(0,i.kt)("h2",{id:"cytaty"},"Cytaty"),(0,i.kt)("p",null,"S\u0105 trzy mo\u017cliwo\u015bci osadzania cytat\xf3w. Dwa ",(0,i.kt)("strong",{parentName:"p"},"inlineowe"),", kt\xf3re si\u0119 nie separuj\u0105 od tre\u015bci i nie \u0142ami\u0105 linii oraz ",(0,i.kt)("strong",{parentName:"p"},"blokowy"),", kt\xf3ry wygl\u0105da jak odseparowany.\nGeneralnie przegl\u0105darki s\u0105 w stanie rozpozna\u0107 cytat je\u017celi stosujesz w tre\u015bci znak cytatu ",(0,i.kt)("strong",{parentName:"p"},"\u201d"),", ale s\u0105 sytuacje w kt\xf3rych b\u0119dzie potrzeba stosowania odpowiednich tag\xf3w.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<q>")," - ",(0,i.kt)("strong",{parentName:"p"},"inlineowy"),". Stosuj je\u017celi chcesz umie\u015bci\u0107 tre\u015b\u0107 cytowan\u0105 bez zaburzenia/separacji/\u0142amania tre\u015bci z atrybutem cite, je\u017celi istnieje potrzeba dodania \u017ar\xf3d\u0142a cytowanego fragmentu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Dummy text: <q cite="https://www.lipsum.com/">Lorem Ipsum is simply dummy text...</q></p>\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<cite>")," - ",(0,i.kt)("strong",{parentName:"p"},"inlineowy"),". S\u0142u\u017cy do cytowania tytu\u0142u pracy tw\xf3rczej jak np. tytu\u0142u ksi\u0105\u017cki, piosenki, gry itd. Przed zastosowaniem rozwa\u017c opcj\u0119 tagu ",(0,i.kt)("inlineCode",{parentName:"p"},"<g>")," z atrybutem cite."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<blockquote>")," - ",(0,i.kt)("strong",{parentName:"p"},"blokowy"),". Zazwyczaj odseparowany od tre\u015bci, lub ",(0,i.kt)("strong",{parentName:"p"},"\u201cwci\u015bni\u0119ty\u201d")," mi\u0119dzy tre\u015b\u0107. Mo\u017cna w nim umieszcza\u0107 np. referencje, z\u0142ote my\u015bli :) etc."),(0,i.kt)("h2",{id:"elemety-frazuj\u0105ce"},"Elemety frazuj\u0105ce"),(0,i.kt)("p",null,"Istnieje kilka element\xf3w, kt\xf3re maj\u0105 podobne dzia\u0142anie semantyczne jak np. ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<i>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<b>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>"),". Opr\xf3cz tego, \u017ce ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>")," i ",(0,i.kt)("inlineCode",{parentName:"p"},"<i>")," domy\u015blnie przekszta\u0142c\u0105 tekst na pisany\nkursyw\u0105 (pochylony), a ",(0,i.kt)("inlineCode",{parentName:"p"},"<b>")," i ",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>")," pogrubi\u0105 tekst, to maj\u0105 zastosowanie by okre\u015bli\u0107 lub podkre\u015bli\u0107 wag\u0119/znaczenie tekstu. Ci\u0119\u017cko tutaj wskaza\u0107 wszystkie mo\u017cliwe dobre praktyki,\nbo u\u017cycie odpowiedniego tagu zale\u017cy od kontekstu i znaczenia tre\u015bci. Zapami\u0119taj jednak, \u017ce te tagi w ",(0,i.kt)("strong",{parentName:"p"},"HTML5")," nie s\u0142u\u017c\u0105 wy\u0142\u0105cznie do tego jak poprzednio (",(0,i.kt)("inlineCode",{parentName:"p"},"<i>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<b>"),"), by dany tekst\nwy\u015bwietli\u0107 kursyw\u0105, lub go tylko pogrubi\u0107, bo maj\u0105 teraz znaczenie semantyczne, a do tekstu pochylonego lub pogrubionego bez wi\u0119kszej warto\u015bci semantycznej s\u0105 style."),(0,i.kt)("p",null,"Troch\u0119 upraszczaj\u0105c zastosowanie:\n",(0,i.kt)("inlineCode",{parentName:"p"},"<em>")," - u\u017cywaj do nadania wi\u0119kszego znaczenia dla danego s\u0142owa lub tekstu.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>")," - jak wy\u017cej z t\u0105 r\xf3\u017cnic\u0105, \u017ce ten tekst b\u0119dzie mia\u0142 jeszcze wi\u0119ksze znaczenie ni\u017c tekst zawarty w tagu ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"<i>")," - u\u017cywaj np. dla element\xf3w pisanych w innym j\u0119zyku, tytu\u0142\xf3w film\xf3w etc. wyra\u017caniu formy wypowiedzi jak ironia, sarkazm.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<b>")," - stosuj do wyr\xf3\u017cnienia tekstu nie nadaj\u0105c mu wi\u0119kszego znaczenia np. chc\u0105c go wyr\xf3\u017cni\u0107 nie nadaj\u0105c mu wi\u0119kszego znaczenia przy wyszukiwaniu na stronie."),(0,i.kt)("h2",{id:"linki"},"Linki"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<a>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"je\u017celi u\u017cywasz jako \u201canchor link\u201d do obs\u0142ugi p\u0142ynnego scrollowania u\u017cyj w css zapisu:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"html {\n    scroll-behavior: smooth;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"je\u017celi masz do obs\u0142ugi nr. telefonu u\u017cyj w spos\xf3b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="tel:+48123456789">+48 123 456 789</a>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"je\u017celi masz do obs\u0142ugi adres e-mail u\u017cyj w spos\xf3b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="mailto:user@domain.com">user@domain.com</a>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"je\u017celi linkujesz do zewn\u0119trznego \u017ar\xf3d\u0142a pami\u0119taj o atrybucie ",(0,i.kt)("strong",{parentName:"li"},"target"),", kt\xf3ry cz\u0119sto w takim przypadku jest ustawiany na ",(0,i.kt)("strong",{parentName:"li"},"\u201cblank\u201d"),".\nDla bezpiecze\u0144stwa je\u017celi linkujesz do \u017ar\xf3d\u0142a zewn\u0119trznego zawsze w przypadku okre\u015blenia target u\u017cywaj ",(0,i.kt)("strong",{parentName:"li"},"rel=\u201dnoopener\u201d"),".\nJest to dobra praktyka zalecana przez ",(0,i.kt)("strong",{parentName:"li"},"Google")," i ma na celu zabezpieczy\u0107 ew. ataki polegaj\u0105ce na pod\u0142o\u017ceniu szkodliwych tre\u015bci Twojego linku.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="https://anotherurl.com" target="_blank" rel="noopener nofollow">Link</a>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"warto\u015b\u0107 atrybutu ",(0,i.kt)("strong",{parentName:"li"},"rel=\u201dnoreferrer\u201d")," stosuj je\u017celi nie chcesz przesy\u0142a\u0107 informacji sk\u0105d linkujesz w\u0142a\u015bcicielowi strony podlinkowanej."),(0,i.kt)("li",{parentName:"ul"},"warto\u015b\u0107 atrybutu ",(0,i.kt)("strong",{parentName:"li"},'rel="nofollow"'),"\xa0stosuj dla linku, kt\xf3remu nie chcemy przekaza\u0107 mocy/reputacji stronom, do kt\xf3rych reklama prowadzi.")),(0,i.kt)("h2",{id:"button"},"Button"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<button>")," - u\u017cywaj tylko je\u017celi jest to element interaktywny, lub s\u0142u\u017cy np. do obs\u0142ugi formularzy jak potwierdzenie wype\u0142nionego formularza i wys\u0142anie go."),(0,i.kt)("h2",{id:"obrazki"},"Obrazki"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," - gdy u\u017cywasz pami\u0119taj, by ten tag posiada\u0142 przynajmniej te cztery atrybuty. S\u0105 to ",(0,i.kt)("strong",{parentName:"p"},"src"),", ",(0,i.kt)("strong",{parentName:"p"},"width"),", ",(0,i.kt)("strong",{parentName:"p"},"height"),", ",(0,i.kt)("strong",{parentName:"p"},"alt"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"staraj si\u0119 nie u\u017cywa\u0107 zbyt du\u017cych rozmiar\xf3w obrazk\xf3w, je\u017celi nie ma takiej potrzeby, bo zazwyczaj im wi\u0119ksza rozdzielczo\u015b\u0107 obrazka, tym wi\u0119ksza jego waga."),(0,i.kt)("li",{parentName:"ul"},"w przypadku Wordpress'a mo\u017cesz r\xf3wnie\u017c ograniczy\u0107 maksymaln\u0105 wysoko\u015b\u0107 i szeroko\u015b\u0107 dla uploadowanych obrazk\xf3w. Ustawienia te mo\u017cesz modyfikowa\u0107 w \u201cSettings\u201d \u2192 \u201cMedia\u201d.active"),(0,i.kt)("li",{parentName:"ul"},"dobr\u0105 praktyk\u0105 jest te\u017c u\u017cywanie obrazk\xf3w w nowszym formacie np. ",(0,i.kt)("strong",{parentName:"li"},"webp"),". Dzi\u0119ki temu formatowi mo\u017cna zaoszcz\u0119dzi\u0107 na ",(0,i.kt)("strong",{parentName:"li"},"\u201cwadze\u201d")," pliku, co przyspiesza \u0142adowanie strony."),(0,i.kt)("li",{parentName:"ul"},"atrybut alt, powinien zawiera\u0107 opis zdj\u0119cia, wi\u0119c w miar\u0119 mo\u017cliwo\u015bci staraj si\u0119 spe\u0142ni\u0107 to wymaganie. Atrybut ten b\u0119dzie wy\u015bwietlany w przegl\u0105darce\nje\u017celi wyst\u0105pi jaki\u015b b\u0142\u0105d i obrazek nie zostanie wczytany. Dopuszczalny jest pusty ",(0,i.kt)("strong",{parentName:"li"},"alt=\u201d\u201d")," je\u017celi dany obrazek pe\u0142ni funkcj\u0119 dekoratora/ozdobnika strony.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="images/house.png" alt="House overlooking the sea">\n'))),(0,i.kt)("li",{parentName:"ul"},"atrybuty ",(0,i.kt)("strong",{parentName:"li"},"width")," i ",(0,i.kt)("strong",{parentName:"li"},"height")," s\u0105 potrzebne, by zniwelowa\u0107 ",(0,i.kt)("strong",{parentName:"li"},"CLS")," (zmiany uk\u0142adu tre\u015bci podczas \u0142adowania) i podajemy je bez jednostek."),(0,i.kt)("li",{parentName:"ul"},"dodatkowo mo\u017cesz u\u017cywa\u0107 \u201clazy loading\u201d dla obrazk\xf3w stosuj\u0105c jeszcze jeden parametr ",(0,i.kt)("strong",{parentName:"li"},'loading="lazy"'),". Staraj si\u0119 nie u\u017cywa\u0107 tego atrybutu dla obrazk\xf3w,\nkt\xf3re s\u0105 widoczne podczas \u0142adowania strony, czyli s\u0105 w obszarze ",(0,i.kt)("strong",{parentName:"li"},"ATF (Above the fold)"),".",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img\n    src="images/house.png"\n    width="400"\n    height="350"\n    alt="House overlooking the sea"\n    loading="lazy"\n>\n'))),(0,i.kt)("li",{parentName:"ul"},"je\u017celi chcesz doda\u0107 obs\u0142ug\u0119 obrazk\xf3w dla wy\u015bwietlaczy o wi\u0119kszej g\u0119sto\u015bci pikseli np. dla Retina u\u017cyj atrybutu srcset.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img\n    src="images/house.png"\n    srcset="images/housex2.png 2x"\n    width="400"\n    height="350"\n    alt="House overlooking the sea"\n    loading="lazy"\n>\n')))),(0,i.kt)("p",null,"Do obs\u0142ugi obrazk\xf3w pod RWD zalecam korzystanie z tagu ",(0,i.kt)("inlineCode",{parentName:"p"},"<picture>"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<picture>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"staraj si\u0119 stosowa\u0107 je\u017celi masz grafiki, kt\xf3re wymagaj\u0105 obs\u0142ugi RWD np. we wpisach."),(0,i.kt)("li",{parentName:"ul"},"by panowa\u0107 nad wy\u015bwietlaniem obrazka jaki chcemy wy\u015bwietli\u0107 dla danej rozdzielczo\u015bci potrzebujemy odpowiedniej struktury. U\u017cywaj tagu ",(0,i.kt)("inlineCode",{parentName:"li"},"<source>")," zagnie\u017cd\u017conego w ",(0,i.kt)("inlineCode",{parentName:"li"},"<picture>")," z atrybutami ",(0,i.kt)("strong",{parentName:"li"},"srcset")," i ",(0,i.kt)("strong",{parentName:"li"},"media"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<picture>\n    <source srcset="images/housex1000.png" media="(min-width: 1000px)" />\n    <source srcset="images/housex600.png" media="(min-width: 600px)"/>\n    <img\n        src="images/house.png"\n        width="400"\n        height="350"\n        alt="House overlooking the sea"\n        loading="lazy"\n    >\n</picture>\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<figure>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stosuj (zazwyczaj w tre\u015bci) je\u017celi potrzebujesz opisu do wy\u015bwietlanej grafiki \u0142\u0105cznie z tagiem ",(0,i.kt)("inlineCode",{parentName:"li"},"<figcaption>"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<figure>\n    <img\n        src="images/house.png"\n        width="400"\n        height="350"\n        alt="House overlooking the sea"\n        loading="lazy"\n    >\n    <figcaption>House overlooking the sea</figcaption>\n</figure>\n')),(0,i.kt)("h2",{id:"pozosta\u0142e"},"Pozosta\u0142e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," - bez znaczenia semantycznego. Stosuj g\u0142\xf3wnie do grupowania element\xf3w ",(0,i.kt)("strong",{parentName:"p"},"HTML")," lub tworzenia sekcji strony, kt\xf3re nie maj\u0105 nag\u0142\xf3wka i nie mog\u0105 by\u0107 tagiem ",(0,i.kt)("inlineCode",{parentName:"p"},"<section>"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"<span>")," - bez znaczenia semantycznego. Stosuj do tre\u015bci bez nadawania jej innego znaczenia semantycznego a chc\u0105c np. nada\u0107 jej dodatkowe style.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<address>")," - stosuj do wy\u015bwietlania danych kontaktowych osoby, lub firmy. Mo\u017cesz w nim zagnie\u017cd\u017ca\u0107 linki z adresami e-mail, czy te\u017c numery telefon\xf3w kontaktowych.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<time>")," - stosuj do wy\u015bwietlania czasu i/lub daty np. aktualizacji wpisu na blogu. Mo\u017ce okre\u015bla\u0107 r\xf3wnie\u017c ",(0,i.kt)("strong",{parentName:"p"},"\u201cczas trwania\u201d"),". U\u017cywaj z atrybutem ",(0,i.kt)("strong",{parentName:"p"},"datetime"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"<mark>")," - stosuj do wyr\xf3\u017cniania tekstu np. pod\u015bwietlaj\u0105c go w wynikach wyszukiwania. Mo\u017cesz stosowa\u0107 go r\xf3wnie\u017c np. je\u017celi chcesz zaznaczy\u0107 tekst, kt\xf3ry b\u0119dzie gradientowanym ozdobnikiem i ci\u0105gle tekstem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Lorem ipsum<mark>is simply dummy text</mark></h1>\n")),(0,i.kt)("p",null,"Zamierzony efekt z u\u017cyciem CSS"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gradnient image example",src:n(2624).Z,width:"798",height:"67"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<dialog>")," - stosuj do budowania wszelkich zawarto\u015bci modalnych, pop-up\u2019w, wyskakuj\u0105cych powiadomie\u0144."))}k.isMDXComponent=!0},2624:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/gradient-text-f11aad75eb7252aac8d6aca02dc5b735.png"}}]);