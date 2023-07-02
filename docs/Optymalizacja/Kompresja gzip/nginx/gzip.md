---
sidebar_position: 1
---

# Konfiguracja nginx
Aby skonfigurować gzip w serwerze Nginx, należy dodać następujące linie do pliku konfiguracyjnego:

```sh
http {
    # ...
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    # ...
}
```

W powyższym przykładzie włączamy kompresję oraz definiujemy typy plików, które będą kompresowane. W tym przypadku do kompresji będą poddane pliki tekstowe, takie jak pliki HTML, CSS, JavaScript, JSON oraz XML.

Ważne jest, aby w przypadku używania kompresji gzip, monitorować wydajność strony, ponieważ zwiększenie liczby operacji kompresji może wpłynąć na wydajność serwera.