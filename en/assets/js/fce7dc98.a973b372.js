"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[699],{3905:(e,a,r)=>{r.d(a,{Zo:()=>l,kt:()=>w});var i=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,i,n=function(e,a){if(null==e)return{};var r,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var a=i.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},l=function(e){var a=s(e.components);return i.createElement(c.Provider,{value:a},e.children)},y="mdxType",z={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=s(r),m=n,w=y["".concat(c,".").concat(m)]||y[m]||z[m]||t;return r?i.createElement(w,o(o({ref:a},l),{},{components:r})):i.createElement(w,o({ref:a},l))}));function w(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,o=new Array(t);o[0]=m;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[y]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<t;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5850:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>z,frontMatter:()=>t,metadata:()=>p,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const t={sidebar_position:1},o="Informacje og\xf3lne",p={unversionedId:"Optymalizacja/Kompresja gzip/intro",id:"Optymalizacja/Kompresja gzip/intro",title:"Informacje og\xf3lne",description:"Gzip to algorytm kompresji, kt\xf3ry pozwala na zmniejszenie rozmiaru plik\xf3w tekstowych, takich jak pliki HTML, CSS, JavaScript czy JSON, przed przes\u0142aniem ich z serwera do przegl\u0105darki. Dzi\u0119ki temu strony internetowe \u0142aduj\u0105 si\u0119 szybciej, poniewa\u017c mniejsze pliki s\u0105 \u0142atwiejsze do przes\u0142ania przez sie\u0107.",source:"@site/docs/Optymalizacja/Kompresja gzip/intro.md",sourceDirName:"Optymalizacja/Kompresja gzip",slug:"/Optymalizacja/Kompresja gzip/intro",permalink:"/WLC-Good-Practices/en/Optymalizacja/Kompresja gzip/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"nginx Cache",permalink:"/WLC-Good-Practices/en/Optymalizacja/Cache/nginx/cache"},next:{title:"Konfiguracja Apache",permalink:"/WLC-Good-Practices/en/Optymalizacja/Kompresja gzip/apache/gzip"}},c={},s=[{value:"Kilka s\u0142\xf3w podsumowania",id:"kilka-s\u0142\xf3w-podsumowania",level:2}],l={toc:s},y="wrapper";function z(e){let{components:a,...r}=e;return(0,n.kt)(y,(0,i.Z)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"informacje-og\xf3lne"},"Informacje og\xf3lne"),(0,n.kt)("p",null,"Gzip to algorytm kompresji, kt\xf3ry pozwala na zmniejszenie rozmiaru plik\xf3w tekstowych, takich jak pliki HTML, CSS, JavaScript czy JSON, przed przes\u0142aniem ich z serwera do przegl\u0105darki. Dzi\u0119ki temu strony internetowe \u0142aduj\u0105 si\u0119 szybciej, poniewa\u017c mniejsze pliki s\u0105 \u0142atwiejsze do przes\u0142ania przez sie\u0107."),(0,n.kt)("p",null,"Przyk\u0142ady konfiguracji znajdziesz w poszczeg\xf3lnych obszarach - apache oraz nginx"),(0,n.kt)("h2",{id:"kilka-s\u0142\xf3w-podsumowania"},"Kilka s\u0142\xf3w podsumowania"),(0,n.kt)("p",null,"Wydajno\u015b\u0107 i szybko\u015b\u0107 \u0142adowania strony internetowej to niezwykle wa\u017cne czynniki, kt\xf3re wp\u0142ywaj\u0105 na odbi\xf3r i wra\u017cenia u\u017cytkownik\xf3w odwiedzaj\u0105cych nasz\u0105 stron\u0119. Odpowiednie skonfigurowanie cache oraz gzip to podstawowe kroki, kt\xf3re mo\u017cemy podj\u0105\u0107, aby przyspieszy\u0107 \u0142adowanie strony i poprawi\u0107 jej wydajno\u015b\u0107."),(0,n.kt)("p",null,"Konfiguracja cache i gzip po stronie serwera mo\u017ce by\u0107 zrealizowana bez konieczno\u015bci instalowania dodatkowych wtyczek, co jest korzystne zar\xf3wno pod wzgl\u0119dem wydajno\u015bci, jak i bezpiecze\u0144stwa strony. Odpowiednie dostosowanie ustawie\u0144 cache i gzip do naszych potrzeb mo\u017ce zwi\u0119kszy\u0107 wydajno\u015b\u0107 strony i poprawi\u0107 do\u015bwiadczenia u\u017cytkownik\xf3w."),(0,n.kt)("p",null,"Wa\u017cne jest jednak, aby pami\u0119ta\u0107, \u017ce poprawne skonfigurowanie cache i gzip to tylko cz\u0119\u015b\u0107 sk\u0142adowa kompleksowej strategii optymalizacji wydajno\u015bci strony. Nale\u017cy pami\u0119ta\u0107 o innych czynnikach, takich jak zoptymalizowane obrazy, redukcja rozmiaru plik\xf3w CSS i JavaScript oraz minimalizacja liczby zapyta\u0144 do serwera, aby w pe\u0142ni wykorzysta\u0107 potencja\u0142 naszej strony i zapewni\u0107 jej szybko\u015b\u0107 \u0142adowania."))}z.isMDXComponent=!0}}]);