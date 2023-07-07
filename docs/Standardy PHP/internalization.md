---
sidebar_position: 5
---

# Internalizacja

Internalizacja to nic innego jak przygotowanie kodu w taki sposób, aby był zawsze gotowy do tłumaczenia lub dodania nowego języka. 

Nawet jeżeli klient nie wymaga wielojęzyczności na swojej stronie, dobrą praktyką i wymogiem WLC jest pisanie kodu, który jest translation ready.

````php
<h1>Settings Page</h1> // no localization, it's wrong!

<h1><?php echo __( 'Some random string', 'your-textdomain' ); ?></h1> // localization

<h1><?php _e( 'Some random string', 'your-textdomain' ); ?></h1> // echo and localization in one 
````

[Dokumentacja i funkcje z jakich powinniśmy korzystać](https://developer.wordpress.org/themes/functionality/internationalization/).

`__()`
`_e()`
`_n()`
`_x()`

Escaping and localization:

`esc_html__()`
`esc_html_e()`
`esc_html_x()`
`esc_attr__()`
`esc_attr_e()`
`esc_attr_x()`