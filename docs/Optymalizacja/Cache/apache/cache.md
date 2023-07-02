---
sidebar_position: 1
---

# Apache cache
Jeśli masz pełny dostęp do serwera otwórz plik konfiguracyjny Apache, np. httpd.conf lub apache2.conf, i upewnij się, że moduł nagłówków jest załadowany. W linii LoadModule należy odkomentować moduł nagłówków, jeśli jest zakomentowany:

````
LoadModule headers_module modules/mod_headers.so
````
otwórz plik .htaccess i dodaj tam poniższy kawałek kodu

```sh
<IfModule mod_expires.c>
   ExpiresActive On
   ExpiresDefault "access plus 1 hour"
   ExpiresByType text/html "access plus 1 hour"
   ExpiresByType image/gif "access plus 1 month"
   ExpiresByType image/jpeg "access plus 1 month"
   ExpiresByType image/png "access plus 1 month"
   ExpiresByType text/css "access plus 1 month"
   ExpiresByType text/javascript "access plus 1 month"
   ExpiresByType application/javascript "access plus 1 month"
   ExpiresByType application/x-shockwave-flash "access plus 1 month"
   Header set Cache-Control "max-age=3600, public"
</IfModule>
```
Ten kod ustawia czas wygaśnięcia dla różnych typów plików, a także ustawia nagłówek Cache-Control z czasem życia równym 3600 sekund.

:::success

    W przypadku gdyby były z jakiegoś powodu potrzebne inne wartości cachowania mona śmiało je podmienić, miesiąc jest okresem standardowym.

:::
