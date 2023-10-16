"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[654],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return a?t.createElement(k,r(r({ref:n},c),{},{components:a})):t.createElement(k,r({ref:n},c))}));function k(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7131:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2},r="Design, OOP",l={unversionedId:"Standardy PHP/design",id:"Standardy PHP/design",title:"Design, OOP",description:"Podstawy Object Oriented Programming",source:"@site/docs/Standardy PHP/design.md",sourceDirName:"Standardy PHP",slug:"/Standardy PHP/design",permalink:"/WLC-Good-Practices/Standardy PHP/design",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standardy kodowania",permalink:"/WLC-Good-Practices/Standardy PHP/coding-standards"},next:{title:"Bezpiecze\u0144stwo",permalink:"/WLC-Good-Practices/Standardy PHP/security"}},s={},p=[{value:"Podstawy Object Oriented Programming",id:"podstawy-object-oriented-programming",level:2},{value:"Encapsulation",id:"encapsulation",level:3},{value:"Class constructor",id:"class-constructor",level:3},{value:"Nazewnictwo, zakres i obj\u0119to\u015b\u0107 funkcji",id:"nazewnictwo-zakres-i-obj\u0119to\u015b\u0107-funkcji",level:3},{value:"Visibility",id:"visibility",level:3},{value:"Inheritance",id:"inheritance",level:3},{value:"Przestrzenie nazw",id:"przestrzenie-nazw",level:2},{value:"DRY",id:"dry",level:2},{value:"SOLID",id:"solid",level:2},{value:"Singelton i metody statyczne",id:"singelton-i-metody-statyczne",level:2}],c={toc:p},d="wrapper";function y(e){let{components:n,...a}=e;return(0,i.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design-oop"},"Design, OOP"),(0,i.kt)("h2",{id:"podstawy-object-oriented-programming"},"Podstawy Object Oriented Programming"),(0,i.kt)("p",null,"Plugin\xf3w nie piszemy strukturalnie (",(0,i.kt)("a",{parentName:"p",href:"https://carlalexander.ca/object-oriented-programming-next-step-wordpress-developer/"},"polecany artyku\u0142"),"), tylko wykorzystujemy podstawowe koncepty OOP, kt\xf3ry nawet na niskim poziomie pozwal\u0105 na przyzwoit\u0105 organizacj\u0119 kodu, kt\xf3ry b\u0119dzie \u0142atwiejszy (ta\u0144szy) w utrzymaniu."),(0,i.kt)("p",null,"W przypadku tworzenia customowego pluginu wymagane jest korzystanie z podstawowego boilerplate pluginu WLC (to do! sic) lub wybranego boilerplate, np. ",(0,i.kt)("a",{parentName:"p",href:"https://wppb.me/"},"wppb"),"."),(0,i.kt)("h3",{id:"encapsulation"},"Encapsulation"),(0,i.kt)("p",null,"Dane oraz zachowania w obr\u0119bie jakiej\u015b funkcjonalno\u015bci powinny by\u0107 grupowane w klasy, obiekt to instancja danej klasy (",(0,i.kt)("a",{parentName:"p",href:"https://carlalexander.ca/first-thing-learn-object-oriented-programming/"},"polecany artyku\u0142"),").\nKlasy powinny by\u0107 nazywane zachowuj\u0105c standard Camel Case np. MyAwesomePlugin\\Api."),(0,i.kt)("p",null,"Dane w obr\u0119bie klasy powinny by\u0107 definiowane jako ",(0,i.kt)("strong",{parentName:"p"},"properties, czyli zmienne")," specyficzne dla ca\u0142ej klasy."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Metody to funkcje"),", czyli zachowania specyficzne dla danej klasy, posiadaj\u0105 one bezpo\u015bredni dost\u0119p do properties.\nWobec metod stosuje si\u0119 nazewnictwo w standardzie snake case np. get_separated_payment_methods."),(0,i.kt)("h3",{id:"class-constructor"},"Class constructor"),(0,i.kt)("p",null,"Konstruktor ",(0,i.kt)("inlineCode",{parentName:"p"},"__construct()")," jest to specjalna metoda, kt\xf3ra jest wykonywana podczas tworzenia obiektu tej klasy.\nZ powy\u017cszego powodu nie nale\u017cy wywo\u0142ywa\u0107 hook\xf3w WordPressa (",(0,i.kt)("inlineCode",{parentName:"p"},"add_action"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"add_filter"),").\nZamiast tego nale\u017cy utw\xf3rzy\u0107 specjaln\u0105 metod\u0119, w kt\xf3rej b\u0119d\u0105 one rejestrowane.\nSprawia to, \u017ce klasa jest bardziej elastyczna, \u0142atwiejsza w utrzymaniu, u\u0142atwia to spraw\u0119 r\xf3wnie\u017c dla test\xf3w jednostkowych.\nPrzyjmujemy zasad\u0119, \u017ce w konstruktorze mog\u0105 znajdowa\u0107 si\u0119 tylko deklarowane warto\u015bci."),(0,i.kt)("h3",{id:"nazewnictwo-zakres-i-obj\u0119to\u015b\u0107-funkcji"},"Nazewnictwo, zakres i obj\u0119to\u015b\u0107 funkcji"),(0,i.kt)("p",null,"Podczas tworzenia metod/funkcji nale\u017cy stara\u0107 si\u0119:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"zachowa\u0107 zwi\u0119z\u0142e nazewnictwo wskazuj\u0105ce na jej dzia\u0142anie,"),(0,i.kt)("li",{parentName:"ul"},"wykonywana by\u0142a tylko 1 czynno\u015b\u0107,"),(0,i.kt)("li",{parentName:"ul"},"by\u0142a mo\u017cliwie jak najkr\xf3tsza,"),(0,i.kt)("li",{parentName:"ul"},"zwracany by\u0142 tylko 1 typ zmiennej,"),(0,i.kt)("li",{parentName:"ul"},"w\u0142a\u015bciwie udokumentowana doc blockiem.")),(0,i.kt)("h3",{id:"visibility"},"Visibility"),(0,i.kt)("p",null,"Widoczno\u015b\u0107 metod i properties (mechanizm kontroli dost\u0119pu):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public")," - defaultowe zachowanie, metoda lub property jest w pe\u0142ni dost\u0119pna. Wszystkie metody wykorzystywane w hookach powinny by\u0107 publiczne."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Protected")," - dost\u0119p tylko w obr\u0119bie klasy definiuj\u0105cej lub klasy, kt\xf3ra rozszerza (extend) klas\u0119 definiuj\u0105c\u0105.\nPowinno d\u0105\u017cy\u0107 si\u0119 do u\u017cycia tej widoczno\u015bci, aby ograniczy\u0107 innym developerom u\u017cycia naszych metod, w konsekwencji pozostawiaj\u0105c przestrze\u0144 na jej swobodn\u0105 modyfikacj\u0119, bez ryzyka uszkodzenia funkcjonalno\u015bci zale\u017cnej, kt\xf3rej cz\u0119sto nie jest si\u0119 \u015bwiadomym."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Private")," - dost\u0119p tylko w obr\u0119bie klasy definiuj\u0105cej i nie jest przewidziane jej inne u\u017cycie ni\u017c w danej klasie. Je\u015bli z jakiego\u015b powodu, metoda musi mie\u0107 inn\u0105 widoczno\u015b\u0107, np. dlatego \u017ce jest uruchamiana z hooka, nale\u017cy opatrzy\u0107 j\u0105 w docblocku tagiem ",(0,i.kt)("inlineCode",{parentName:"p"},"@internal"),"."),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Poz[wala na tworzenie re-u\u017cywalnego kodu pomi\u0119dzy klasami (",(0,i.kt)("a",{parentName:"p",href:"https://carlalexander.ca/using-inheritance-wordpress/"},"polecany artyku\u0142"),")."),(0,i.kt)("p",null,"Wykorzystanie keyword extend przy definiowaniu klasy pozwala na korzystanie z metod i properties zdefiniowanych w klasie rodzicu (np. ",(0,i.kt)("inlineCode",{parentName:"p"},"Car extends Vehicle")," lub ",(0,i.kt)("inlineCode",{parentName:"p"},"Dog extends Animal"),")."),(0,i.kt)("p",null,"Zasady wykorzystywania taka jak w sekcji Visibility.]()"),(0,i.kt)("h2",{id:"przestrzenie-nazw"},"Przestrzenie nazw"),(0,i.kt)("p",null,"Kod PHP kt\xf3ry nie jest cz\u0119\u015bci\u0105 WordPress Template Hierarchy powinien by\u0107 organizowany w obr\u0119bie przestrzeni nazw (namespace), w celu unikni\u0119ciu konflikt\xf3w z innymi klasami i funkcjami o podobnych nazwach."),(0,i.kt)("p",null,"Deklaracja  ",(0,i.kt)("inlineCode",{parentName:"p"},"use"),"  powinna by\u0107 u\u017cywana aby korzysta\u0107 z klas i ich metod spoza przestrzeni nazw."),(0,i.kt)("p",null,"Przestrzenie nazw tworzymy zachowuj\u0105c format Camel Case."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Temat do rozwini\u0119cia aby by\u0142 w pe\u0142ni zrozumia\u0142y")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace MyAwesomePlugin\\Api;\n\ndefined( 'ABSPATH' ) || die( 'Direct file access is forbidden' );\n\n// Make Misc class available in current namespace\nuse MyAwesomePlugin\\General\\Misc;\n\nclass Block {\n   /**\n    * Init\n    *\n    * @return void\n    */\n   public function init() {\n        // Thanks to use statement we can initiate class like this, nice!\n        $misc = new Misc();\n        // Otherwise we could do it like this, not that nice\n        $misc = new \\MyAwesomePlugin\\General\\Misc;\n        \n        $some_misc_data = $misc->get_some_data();\n   }\n}\n")),(0,i.kt)("h2",{id:"dry"},"DRY"),(0,i.kt)("p",null,"Czyli ",(0,i.kt)("strong",{parentName:"p"},"Don\u2019t Repeat Yourself"),"! "),(0,i.kt)("p",null,"DRY to koncept w programowaniu, stanowi\u0105cy, \u017ce nie powinni\u015bmy powiela\u0107 tego samego kodu w wielu miejscach, a je\u017celi widzimy, \u017ce tak si\u0119 dzieje to wsp\xf3lny kod w obr\u0119bie wielu metod powinien zosta\u0107 wyci\u0105gni\u0119ty do osobnej funkcji, do kt\xf3rej metody te b\u0119d\u0105 si\u0119 odwo\u0142ywa\u0107."),(0,i.kt)("h2",{id:"solid"},"SOLID"),(0,i.kt)("p",null,"To zbi\xf3r regu\u0142, kt\xf3re powinny by\u0107 stosowane przy tworzeniu oprogramowania w j\u0119zyku PHP, SOLID to do\u015b\u0107 zaawansowany zbi\xf3r regu\u0142, stosowanie tylko pierwszej regu\u0142y powinno znacz\u0105co wp\u0142yn\u0105\u0107 na jako\u015b\u0107 produkowanego kodu:"),(0,i.kt)("p",null,"S jak ",(0,i.kt)("strong",{parentName:"p"},"Single responsibility principle")," (",(0,i.kt)("a",{parentName:"p",href:"https://carlalexander.ca/single-responsibility-principle-wordpress/"},"polecany artyku\u0142"),") - regu\u0142a ta stonowi, i\u017c klasa lub metoda powinna robi\u0107 jedn\u0105 i tylko jedn\u0105 rzecz (pojedyncza odpowiedzialno\u015b\u0107), je\u017celi zauwa\u017cy, \u017ce metoda staje si\u0119 zbyt rozwlek\u0142a, mo\u017ce to oznacza\u0107, i\u017c tak\u0105 metod\u0119 nale\u017cy rozbi\u0107 na dwie lub wiele mniejszych, kt\xf3re b\u0119d\u0105 spe\u0142nia\u0107 konkretne zadania. "),(0,i.kt)("p",null,"O jak ",(0,i.kt)("strong",{parentName:"p"},"Open/closed principle")," - kod powinien by\u0107 zamkni\u0119ty na modyfikacje ale otwarty na rozszerzanie. W realiach WordPressa i jego plugin\xf3w zasada ta jest idealnie realizowana poprzez hooki (akcje i filtry), gdzie absolutnie zabronione jest modyfikowanie kodu bezpo\u015brednio, za to dobrze napisany plugin poznamy po tym, i\u017c wyposa\u017cony jest w hooki pozwalaj\u0105ce na jego rozszerzenie."),(0,i.kt)("p",null,"L jak Liskov substitution principle - (",(0,i.kt)("a",{parentName:"p",href:"https://accesto.com/blog/solid-php-solid-principles-in-php/"},"polecany artyku\u0142"),")"),(0,i.kt)("p",null,"I jak Interface segregation principle - (",(0,i.kt)("a",{parentName:"p",href:"https://accesto.com/blog/solid-php-solid-principles-in-php/"},"polecany artyku\u0142"),")"),(0,i.kt)("p",null,"D jak Dependency inversion principle - (",(0,i.kt)("a",{parentName:"p",href:"https://accesto.com/blog/solid-php-solid-principles-in-php/"},"polecany artyku\u0142"),")"),(0,i.kt)("h2",{id:"singelton-i-metody-statyczne"},"Singelton i metody statyczne"),(0,i.kt)("p",null,"Singletony nie s\u0105 zalecane. W praktyce ten wzorzec ma niewielkie uzasadnienie i powoduje wi\u0119cej problem\xf3w z utrzymaniem ni\u017c rozwi\u0105zuje."),(0,i.kt)("p",null,"Metody statyczne nie s\u0105 zalecane i o ile ich u\u017cycie nie mo\u017ce zosta\u0107 uzasadnione np. mo\u017cliwo\u015bci\u0105 u\u017cycia metody bez inicjalizacji ca\u0142ego obiektu.\nNale\u017cy pami\u0119ta\u0107, \u017ce ich u\u017cycie jest zbyt problemowe oraz ma negatywny wp\u0142yw na wydajno\u015b\u0107."))}y.isMDXComponent=!0}}]);