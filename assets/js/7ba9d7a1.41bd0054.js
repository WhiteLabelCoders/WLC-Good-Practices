"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[901],{3905:(a,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function c(a,e){if(null==a)return{};var t,i,r=function(a,e){if(null==a)return{};var t,i,r={},n=Object.keys(a);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(i=0;i<n.length;i++)t=n[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=i.createContext({}),s=function(a){var e=i.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},d=function(a){var e=s(a.components);return i.createElement(p.Provider,{value:e},a.children)},l="mdxType",w={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},z=i.forwardRef((function(a,e){var t=a.components,r=a.mdxType,n=a.originalType,p=a.parentName,d=c(a,["components","mdxType","originalType","parentName"]),l=s(t),z=r,m=l["".concat(p,".").concat(z)]||l[z]||w[z]||n;return t?i.createElement(m,o(o({ref:e},d),{},{components:t})):i.createElement(m,o({ref:e},d))}));function m(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var n=t.length,o=new Array(n);o[0]=z;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=a,c[l]="string"==typeof a?a:r,o[1]=c;for(var s=2;s<n;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}z.displayName="MDXCreateElement"},7081:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>w,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const n={sidebar_position:2},o="Integracja Jira <-> Gitlab",c={unversionedId:"Praca projektowa/branching",id:"Praca projektowa/branching",title:"Integracja Jira <-> Gitlab",description:"Jaki\u015b czas temu wprowadzili\u015bmy integracj\u0119 Jiry z naszym Gitlabem po to, aby by\u0142a lepsza kontrola nad przep\u0142ywem pracy dla PM\xf3w danego projektu, tak aby widzieli czy w zadaniach przy kt\xf3rych pracujemy jest rzeczywi\u015bcie jaki\u015b progres. Integracja ta dzia\u0142a tylko i wy\u0142\u0105cznie w momencie prawid\u0142owego nazewnictwa po stronie gitlaba. W poni\u017cszym dokumencie postaram si\u0119 przybli\u017cy\u0107 Ci w jaki spos\xf3b powiniene\u015b/na\u015b nazywa\u0107 branche, jakie wiadomo\u015bci powiniene\u015b/na\u015b dodawa\u0107 do swoich commit\xf3w oraz jak powiniene\u015b/na\u015b tworzy\u0107 Merge Requesty. \u017badna dodatkowa konfiguracja po stronie projektu na Jirze lub w Gitlabie jest zb\u0119dna, dlatego \u017ce integracja powinna dzia\u0142a\u0107 we wszystkich projektach na Jirze i wszystkich repozytoriach na gicie.",source:"@site/docs/Praca projektowa/branching.md",sourceDirName:"Praca projektowa",slug:"/Praca projektowa/branching",permalink:"/WLC-Good-Practices/Praca projektowa/branching",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Informacje og\xf3lne",permalink:"/WLC-Good-Practices/Praca projektowa/intro"},next:{title:"Dobre praktyki (S)CSS",permalink:"/WLC-Good-Practices/Standardy CSS/good-practices"}},p={},s=[{value:"Branche",id:"branche",level:2},{value:"Commity",id:"commity",level:2},{value:"Merge Requests",id:"merge-requests",level:2},{value:"Pozosta\u0142e zak\u0142adki narz\u0119dzia w Jirze",id:"pozosta\u0142e-zak\u0142adki-narz\u0119dzia-w-jirze",level:2}],d={toc:s},l="wrapper";function w(a){let{components:e,...n}=a;return(0,r.kt)(l,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integracja-jira---gitlab"},"Integracja Jira <-> Gitlab"),(0,r.kt)("p",null,"Jaki\u015b czas temu wprowadzili\u015bmy integracj\u0119 Jiry z naszym Gitlabem po to, aby by\u0142a lepsza kontrola nad przep\u0142ywem pracy dla PM\xf3w danego projektu, tak aby widzieli czy w zadaniach przy kt\xf3rych pracujemy jest rzeczywi\u015bcie jaki\u015b progres. Integracja ta dzia\u0142a tylko i wy\u0142\u0105cznie w momencie prawid\u0142owego nazewnictwa po stronie gitlaba. W poni\u017cszym dokumencie postaram si\u0119 przybli\u017cy\u0107 Ci w jaki spos\xf3b powiniene\u015b/na\u015b nazywa\u0107 branche, jakie wiadomo\u015bci powiniene\u015b/na\u015b dodawa\u0107 do swoich commit\xf3w oraz jak powiniene\u015b/na\u015b tworzy\u0107 Merge Requesty. \u017badna dodatkowa konfiguracja po stronie projektu na Jirze lub w Gitlabie jest zb\u0119dna, dlatego \u017ce integracja powinna dzia\u0142a\u0107 we wszystkich projektach na Jirze i wszystkich repozytoriach na gicie."),(0,r.kt)("h2",{id:"branche"},"Branche"),(0,r.kt)("p",null,"Aby integracja dzia\u0142a\u0142a prawid\u0142owo w nazwie brancha musi znale\u017a\u0107 si\u0119 numerek zadania z Jiry, w prosty spos\xf3b mo\u017cna u\u017cy\u0107 toola kt\xf3ry jest widoczny w jirze i po prostu skopiowa\u0107 nazw\u0119 branch\u0105 i utworzy\u0107 ga\u0142\u0105\u017a z tak\u0105 sam\u0105 nazw\u0105 w gicie."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 1 ",src:t(6182).Z,width:"452",height:"581"})),(0,r.kt)("p",null,"Na potrzeby tego artyku\u0142u b\u0119d\u0119 pos\u0142ugiwa\u0142 si\u0119 zadaniem o numerku LAW-18, a moja ca\u0142a nazwa brancha b\u0119dzie wygl\u0105da\u0142a nast\u0119puj\u0105co:"),(0,r.kt)("p",null,"LAW-18-renderowanie-przed-akcja-hovera."),(0,r.kt)("p",null,"Zaczn\u0119 wi\u0119c od utworzenia takiego brancha w Gitlab UI\n",(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 2 ",src:t(9159).Z,width:"1347",height:"331"})),(0,r.kt)("p",null,'Bezpo\u015brednio po utworzeniu nowej ga\u0142\u0119zi przechodz\u0105c znowu do mojego zadanka na Jirze jestem w stanie zauwa\u017cy\u0107 informacj\u0119 o tym, \u017ce zosta\u0142a utworzona nowa ga\u0142\u0105\u017a o tej nazwie i jest ona "przypisana" do zadania kt\xf3re realizuj\u0119:\n',(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 3 ",src:t(6487).Z,width:"606",height:"660"})),(0,r.kt)("p",null,'Po klikni\u0119ciu w "1 ga\u0142\u0105\u017a / 1 branch" (w trakcie tworzenia dokumentu zmieni\u0142em j\u0119zyk Jiry na angielski, st\u0105d r\xf3\u017cnica w nazewnictwie) otwiera si\u0119 popup w kt\xf3rym jest nieco wi\u0119cej informacji, gdzie mog\u0119 znale\u017a\u0107 informacje o tym, w jakim repozytorium zosta\u0142 stworzony nowy branch:\n',(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 4",src:t(9379).Z,width:"962",height:"303"})),(0,r.kt)("h2",{id:"commity"},"Commity"),(0,r.kt)("p",null,"W przypadku commit\xf3w jest bardzo podobnie, mianowicie musimy doda\u0107 numerek zadania do wiadomo\u015bci, czyli w moim przypadku b\u0119dzie to:"),(0,r.kt)("p",null,"git commit -m 'LAW-18 gitlab<-> jira test commit'"),(0,r.kt)("p",null,"Po dodaniu tego commitu w Jirze bardzo \u0142adnie wida\u0107 kto i kiedy doda\u0142 commit a tak\u017ce ilu plik\xf3w dotkn\u0105\u0142\n",(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 5",src:t(1313).Z,width:"955",height:"390"})),(0,r.kt)("h2",{id:"merge-requests"},"Merge Requests"),(0,r.kt)("p",null,"Sytuacja bardzo podobna je\u015bli chc\u0119, \u017ceby m\xf3j MR by\u0142 widoczny w Jirze powinienem zastosowa\u0107 odpowiednie nazewnictwo:\n",(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 6",src:t(6654).Z,width:"1466",height:"634"})),(0,r.kt)("p",null,"Po dodaniu LAW-18 w title mojego Merge Requestu jest on automatycznie przesy\u0142any do Jiry - wida\u0107 r\xf3wnie\u017c takie MR kt\xf3re zosta\u0142y anulowanie:\n",(0,r.kt)("img",{alt:"Gitlab &lt;-&gt; Jira 7",src:t(3117).Z,width:"958",height:"323"})),(0,r.kt)("h2",{id:"pozosta\u0142e-zak\u0142adki-narz\u0119dzia-w-jirze"},"Pozosta\u0142e zak\u0142adki narz\u0119dzia w Jirze"),(0,r.kt)("p",null,"Pozosta\u0142e zak\u0142adki, typu buildy lub release s\u0105 uzale\u017cnione od konfiguracji pipelin\xf3w w repozytorium."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Wielko\u015b\u0107 liter w nazewnictwie branchy jest istotna, w przypadku gdy commity/branche\nmaj\u0105 nazw\u0119 nieprawid\u0142ow\u0105, \nnp: Law-12 lub law-12, zamiast LAW-12 \nintegracja nie b\u0119dzie dzia\u0142a\u0142a prawid\u0142owo.\n"))))}w.isMDXComponent=!0},6182:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_1-59445a983899bc55ed4553ea427dbcd0.png"},9159:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_2-1385f4db315bd10184ef251d25b78641.png"},6487:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_3-92930740fc6f5a74187e38f7b45982e3.png"},9379:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_4-ea7759adf1db939b3bfcc4ce0f01d9b0.png"},1313:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_5-2ff948acc272495aa595e3a206a7bdf8.png"},6654:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_6-f21733ffadf9efb8cba1a43b44208526.png"},3117:(a,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/gitlab_jira_7-176d4dcb3f65c2c86f11e80e3edabd27.png"}}]);