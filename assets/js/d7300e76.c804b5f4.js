"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[822],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),y=i,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return a?t.createElement(m,o(o({ref:n},s),{},{components:a})):t.createElement(m,o({ref:n},s))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8357:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var t=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},o="Bezpiecze\u0144stwo",p={unversionedId:"Standardy PHP/security",id:"Standardy PHP/security",title:"Bezpiecze\u0144stwo",description:"Sanityzacja danych",source:"@site/docs/Standardy PHP/security.md",sourceDirName:"Standardy PHP",slug:"/Standardy PHP/security",permalink:"/WLC-Good-Practices/Standardy PHP/security",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Design, OOP",permalink:"/WLC-Good-Practices/Standardy PHP/design"},next:{title:"Wydajno\u015b\u0107",permalink:"/WLC-Good-Practices/Standardy PHP/performance"}},c={},l=[{value:"Sanityzacja danych",id:"sanityzacja-danych",level:2},{value:"Walidacja danych",id:"walidacja-danych",level:2},{value:"Escapowanie danych",id:"escapowanie-danych",level:2},{value:"Zabezpieczanie SQL",id:"zabezpieczanie-sql",level:2},{value:"Nonces",id:"nonces",level:2},{value:"Heredoc i Nowdoc",id:"heredoc-i-nowdoc",level:2}],s={toc:l},d="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(d,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bezpiecze\u0144stwo"},"Bezpiecze\u0144stwo"),(0,i.kt)("h2",{id:"sanityzacja-danych"},"Sanityzacja danych"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Zabezpieczenie danych wej\u015bciowych"),", czyli sanityzacja - dane wej\u015bciowe mog\u0105 pochodzi\u0107 z r\xf3\u017cnych \u017ar\xf3de\u0142 (np. z formularza, od u\u017cytkownik\xf3w, z innych stron, z naszej w\u0142asnej bazy danych) i zanim zostan\u0105 u\u017cyte w naszym kodzie, powinny zosta\u0107 odpowiednio zabezpieczone. "),(0,i.kt)("p",null,"Powinni\u015bmy pami\u0119ta\u0107, \u017ce nawet admini s\u0105 u\u017cytkownikami, a u\u017cytkownicy mog\u0105 wprowadzi\u0107 b\u0142\u0119dne dane (np. przez pomy\u0142k\u0119 wklei\u0107 skopiowany tekst i wys\u0142a\u0107 formularz). Sanityzacja to proces zabezpieczania, czyszczenie lub filtracji danych wej\u015bciowych. "),(0,i.kt)("p",null,"Stosowanie walidacja danych jest zalecane przed stosowaniem sanityzacji."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$title = sanitize_text_field( $_POST['title'] );\nupdate_post_meta( $post->ID, 'title', $title );\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/security/sanitizing/"},"Dokumentacja i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_email()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_file_name()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_hex_color()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_hex_color_no_hash()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_html_class()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_key()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_meta()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_mime_type()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_option()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_sql_orderby()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_term()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_term_field()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_text_field()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_textarea_field()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_title()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_title_for_query()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_title_with_dashes()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_user()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"sanitize_url()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_kses()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_kses_post()")),(0,i.kt)("h2",{id:"walidacja-danych"},"Walidacja danych"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Walidacja danych")," - proces testowania danych przeciw z g\xf3ry zdefiniowanym wzorcom, np. sprawdzanie czy pole nie jest puste, sprawdzanie czy numer ma w\u0142a\u015bciwy format lub czy pole ilo\u015bci jest wi\u0119ksze ni\u017c 0. "),(0,i.kt)("p",null,"Walidacja danych powinna nast\u0105pi\u0107 przed sanityzacj\u0105."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Validate a US zip code.\n *\n * @param string $zip_code RAW zip code to check.\n *\n * @return bool\n */\nfunction wporg_is_valid_us_zip_code( string $zip_code ): bool {\n    // Scenario 1: empty.\n    if ( empty( $zip_code ) ) {\n        return false;\n    }\n\n    // Scenario 2: more than 10 characters.\n    if ( 10 < strlen( trim( $zip_code ) ) ) {\n        return false;\n    }\n\n    // Scenario 3: incorrect format.\n    if ( ! preg_match( '/^d{5}(-?d{4})?$/', $zip_code ) ) {\n        return false;\n    }\n\n    // Passed successfully.\n    return true;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"if ( isset( $_POST['wporg_zip_code'] ) && wporg_is_valid_us_zip_code( $_POST['wporg_zip_code'] ) ) {\n    // $_POST['wporg_zip_code'] is valid, we can carry on\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/security/data-validation/"},"Dokumentacja i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("h2",{id:"escapowanie-danych"},"Escapowanie danych"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Zabezpieczanie danych wyj\u015bciowych"),", czyli escapowanie - czyli zabezpieczanie danych wyj\u015bciowych poprzez usuwanie niechcianych danych, takich jak kod HTML lub tagi skrypt\xf3w."),(0,i.kt)("p",null,"Celem escapowania jest zabezpieczenie danych przed wy\u015bwietleniem ich u\u017cytkownikowi ko\u0144cowemu. Warto zwr\xf3ci\u0107 uwag\u0119 na to, aby escapowa\u0107 bezpo\u015brednio przed wy\u015bwietleniem, nie wcze\u015bniej (late escaping)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Okay, but not great.\n$url  = esc_url( $url );\n$text = esc_html( $text );\n\necho '<a href=\"' . $url . '\">' . $text . '</a>';\n\n// Much better! Late escaping.\necho '<a href=\"' . esc_url( $url ) . '\">' . esc_html( $text ) . '</a>';\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/security/escaping/"},"Dokumentacja i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"esc_html()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_js()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_url()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_url_raw()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_xml()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_attr()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_textarea()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_kses()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_kses_post()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"wp_kses_data()")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"esc_html__()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_html_e()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_html_x()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_attr__()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_attr_e()"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"esc_attr_x()")),(0,i.kt)("h2",{id:"zabezpieczanie-sql"},"Zabezpieczanie SQL"),(0,i.kt)("p",null,"W wielu przypadkach bezpo\u015brednie zapytania do bazy danych s\u0105 nieuniknione, nale\u017cy upewni\u0107 si\u0119, \u017ce zawsze s\u0105 one odpowiednio przygotowane i zabezpieczone. "),(0,i.kt)("p",null,"Metoda ",(0,i.kt)("inlineCode",{parentName:"p"},"$wpdb->prepare()")," powinna by\u0107 u\u017cywana zawsze w przypadku kiedy chcemy wyci\u0105gn\u0105\u0107 dane z lub doda\u0107 do naszej bazy danych, pozwala ona na bezpieczne wywo\u0142anie zapytania SQL oraz unikni\u0119cie atak\xf3w typu SQL injection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"global $wpdb;\n\n// Well prepared SQL\n$sql = $wpdb->prepare(\n    \"SELECT `ID`\n    FROM {$wpdb->prefix}posts\n    WHERE `post_type` = %s\n    AND `post_status` = 'publish'\n    ORDER BY `post_title` ASC\",\n    $post_type\n);\n\n// Get results\n$results = $wpdb->get_results( $sql, ARRAY_A );\n")),(0,i.kt)("p",null,"Inne przydatne funkcje: ",(0,i.kt)("inlineCode",{parentName:"p"},"esc_sql"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"esc_like"),"."),(0,i.kt)("h2",{id:"nonces"},"Nonces"),(0,i.kt)("p",null,"Noncje to narz\u0119dzie pozwalaj\u0105ce unikn\u0105\u0107 atak\xf3w typu CSRF lub cross-site request forgery. "),(0,i.kt)("p",null,"G\u0142\xf3wna cel noncji to unikni\u0119cie mo\u017cliwo\u015bci ponownego wykonania danego requestu, np. akcji typu update lub delete post, r\xf3\u017cnego rodzaju akcje AJAX-owe, kt\xf3re wykonywane wielokrotnie w niekontrolowany spos\xf3b mog\u0105 prowadzi\u0107 do problem\xf3w z wydajno\u015bci\u0105 strony itp."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Enqueue script\nwp_enqueue_script( 'my-awesome-script' );\n\n$vars = array(\n    'ajax_url' => admin_url( 'admin-ajax.php' ),\n    'nonce'    => wp_create_nonce( 'my-awesome-nonce' ), // Create nonce\n);\n\n// Pass variables to script\nwp_localize_script( 'my-awesome-script', 'adminWpData', $vars );\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$nonce = $_POST['nonce']; // nonce passed via AJAX\n\n// Check for nonce security\nif ( ! wp_verify_nonce( $nonce, 'my-awesome-nonce' ) ) {\n    die( 'Invalid request!' );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/apis/security/nonces/"},"Dokumentacja i funkcje z jakich powinni\u015bmy korzysta\u0107"),"."),(0,i.kt)("h2",{id:"heredoc-i-nowdoc"},"Heredoc i Nowdoc"),(0,i.kt)("p",null,"Ze wzgl\u0119du na problemy z ich escepowaniem u\u017cycie obu sk\u0142adni nie jest dozwolone.\nW przypadku, gdy jest to jest to wi\u0119kszy template, nale\u017cy utworzy\u0107 oddzielny plik dla template\u2019u i wybra\u0107 get_template_part() lub include."))}u.isMDXComponent=!0}}]);