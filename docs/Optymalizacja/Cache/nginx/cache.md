---
sidebar_position: 1
---

# nginx Cache
Aby skonfigurować pamięć podręczną dla poszczególnych typów plików w serwerze Nginx, możesz skorzystać z dyrektywy "expires". Dyrektywa ta pozwala na ustawienie czasu wygaśnięcia dla określonych typów plików. W poniższym przykładzie ustawiamy czas wygaśnięcia dla plików CSS, JavaScript i obrazów na 7 dni:

```sh
http {
    # ...
    server {
        # ...
        location ~* \.(css|js|gif|png|jpe?g)$ {
            expires 7d;
            add_header Pragma "public";
            add_header Cache-Control "public";
        }
        # ...
    }
    # ...
}
```

W powyższym przykładzie używamy wyrażenia regularnego, aby dopasować pliki o rozszerzeniach .css, .js, .gif, .png oraz .jpg i .jpeg. Następnie, dla tych plików, ustawiamy czas wygaśnięcia na 7 dni i dodajemy nagłówki Pragma oraz Cache-Control. Warto zauważyć, że dodanie nagłówków Pragma i Cache-Control jest opcjonalne, ale może być przydatne w przypadku starszych przeglądarek internetowych, które nie obsługują nagłówka Cache-Control. Nagłówek Pragma zastępuje nagłówek Cache-Control dla przeglądarek, które go nie obsługują.