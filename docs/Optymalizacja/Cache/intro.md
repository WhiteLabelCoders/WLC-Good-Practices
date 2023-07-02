---
sidebar_position: 1
---

# Informacje ogólne

# Wstęp
​​​​​​​Poprawidłowy ustawiony cache to jeden z kluczowych elementów optymalizacji wydajności stron internetowych. W przypadku Wordpressa istnieje wiele wtyczek które w sposób poprawny ustawia cachowanie. Czy wybór dodatkowej wtyczki zawsze jest dobrym rozwiązaniem? W jaki sposób należy ustawić cachowanie po stronie serwera opartego o apache i nginx? Postaram się opisać to krótko w tym artykule, przekazując wam gotowe kawałki kodu które należy wkleić do konfiguracji i ewentualnie zmodyfikować tylko czas przez jaki pliki mają być cachowane.

## Dlaczego warto konfigurować cache po stronie serwera?
* Użycie ogólnodostępnej wtyczki nie zawsze wpływa korzystnie na prędkość działania strony. Ciekawi Cię pewnie dlaczego, już śpieszę z wyjaśnieniem. Niektóre wtyczki wykonują wiele działań na serwerze "na żywo" przez co rzeczywisty czas odpowiedzi może być nieco dłuższy.
* Wtyczki dostępne w repozytorium wtyczek mogą wprowadzać dodatkowe dziury bezpieczeństwa na stronach internetowych które robimy, a z racji tego, że takie wtyczki są bardzo popularne wśród użytkowników, sprawia że są równie popularne wśród złośliwych botów czy innych hakerów chcących dobrze się bawić psując bardzo dużą ilość stron na raz. 
* Wtyczki do cachowania nie zawsze pozwalają nam na pełną kontrolę nad konfiguracją pamięci podręcznej. Osoba która instaluje taką wtyczkę i ustawia konfigurację powinna być świadoma jakiej konfiguracji dokonuje, a nie tylko klikać wszystko, a bo jakoś to będzie.
* Cache ustawiany bezpośrednio z konfiguracji serwera jest bardziej wydajny, pamiętaj że użytkownik wywołujący jakikolwiek adres internetowy najpierw trafia do serwera, który kieruje go w odpowiednie miejsce i wyświetla mu zawartość wskazaną przez pliki konfiguracyjne.
* Przy konfiguracji cache na poziomie serwera mamy możliwość dostosowania cache do naszych potrzeb, możemy cachować lub wyłączać z cachowania poszczególne elementy w bardzo prosty sposób.

## Na co należy uważać?
* Musisz pamiętać, że dokonując ustawień cachowania bezpośrednio w plikach konfiguracyjnych serwera możesz sprawić, że zamiast ustawić cachowanie sprawisz, że strona przestanie działać.
* Wykonując wszystkie operacje serwerowe trzeba być bardzo uważnym, a wszystkie zmiany przed zapisaniem powinny być szczegółowo zrewidowane.

## Kilka słów podsumowania
Wydajność i szybkość ładowania strony internetowej to niezwykle ważne czynniki, które wpływają na odbiór i wrażenia użytkowników odwiedzających naszą stronę. Odpowiednie skonfigurowanie cache oraz gzip to podstawowe kroki, które możemy podjąć, aby przyspieszyć ładowanie strony i poprawić jej wydajność.

Konfiguracja cache i gzip po stronie serwera może być zrealizowana bez konieczności instalowania dodatkowych wtyczek, co jest korzystne zarówno pod względem wydajności, jak i bezpieczeństwa strony. Odpowiednie dostosowanie ustawień cache i gzip do naszych potrzeb może zwiększyć wydajność strony i poprawić doświadczenia użytkowników.

Ważne jest jednak, aby pamiętać, że poprawne skonfigurowanie cache i gzip to tylko część składowa kompleksowej strategii optymalizacji wydajności strony. Należy pamiętać o innych czynnikach, takich jak zoptymalizowane obrazy, redukcja rozmiaru plików CSS i JavaScript oraz minimalizacja liczby zapytań do serwera, aby w pełni wykorzystać potencjał naszej strony i zapewnić jej szybkość ładowania.