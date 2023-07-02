---
sidebar_position: 1
---

# Konfiguracja Apache
Aby skonfigurować gzip w serwerze Apache, należy dodać następujące linie do pliku .htaccess:

```sh
<IfModule mod_deflate.c>
    # Enable compression
    SetOutputFilter DEFLATE
 
    # Exclude some uncompressible content types
    SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip
    SetEnvIfNoCase Request_URI \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip
    SetEnvIfNoCase Request_URI \.pdf$ no-gzip
 
    # Compress everything else
    <IfModule mod_headers.c>
        Header append Vary User-Agent env=!dont-vary
    </IfModule>
</IfModule>
```

Powyższy kod włącza kompresję oraz wyłącza ją dla niektórych typów plików, takich jak obrazy, pliki archiwów i PDF-y, które już są skompresowane i nie ulegną znacznemu zmniejszeniu po zastosowaniu algorytmu gzip. Zastosowanie kompresji dla takich plików może zwiększyć czas ich przetwarzania i przesyłania, co jest niekorzystne dla wydajności strony.