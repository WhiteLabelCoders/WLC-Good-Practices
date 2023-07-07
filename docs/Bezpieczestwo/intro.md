---
sidebar_position: 1
---

# Bezpieczeństwo
Poniżej znajdują się zalecenia dotyczące poprawy bezpieczeństwa witryny. Lista ta będzie się rozwijać i zmieniać wraz z czasem i nie ma na celu być wyczerpująca.

## Zawsze wymagaj silnych haseł.
Zawsze wymagaj silnych haseł. Domyślnie WordPress nie narzuca użycia silnych haseł. Upewnij się, że używasz wtyczki lub niestandardowego rozwiązania, które wymusza politykę silnych haseł. 10up zaleca korzystanie z losowo generowanych haseł z aplikacji do zarządzania hasłami.

## Użyj uwierzytelniania wieloskładnikowego (MFA) dla kont administratora.
Użyj uwierzytelniania wieloskładnikowego (MFA) lub dwuskładnikowego (2FA) dla kont na poziomie administratora. Wieloskładnikowe uwierzytelnianie może zapobiec atakowi w przypadku ujawnienia hasła. Nie zalecamy korzystania z uwierzytelniania opartego na SMS, ze względu na zwiększone ryzyko ataku hakerskiego lub inżynierii społecznej.

## Zawsze zabraniaj edycji wtyczek/ motywów z poziomu panelu administracyjnego.
Zawsze używaj definicji ( 'DISALLOW_FILE_MODS', true );. Zmiany w kodzie, takie jak aktualizacje wtyczek, powinny być dokonywane z repozytorium dla łatwiejszego zarządzania i utrzymania kodu. Zapobiega to także sytuacji, gdy atakujący uzyskał dostęp do konta administratora i dokonał zmiany kodu, przesyłając własną wtyczkę.

## Zawsze usuwaj nieużywany kod.
Zawsze usuwaj nieużywany kod. Nieużywane wtyczki i motywy mogą stanowić potencjalne zagrożenie. Usuń jak najwięcej nieużywanego kodu i regularnie przeglądaj bazę kodową w poszukiwaniu nieużywanych wtyczek.

## Regularnie skanuj bazę kodową w poszukiwaniu podatnych pakietów.
Stwórz proces regularnego skanowania bazy kodowej pod kątem znanych podatności. Możesz użyć narzędzi takich jak https://wpvulndb.com/, aby sprawdzić, czy wtyczki lub motywy mogą stanowić problem.

## Ustawienie X-Frame-Options na SAMEORIGIN
Domyślnie zawsze ustawiaj nagłówek X-Frame-Options na SAMEORIGIN. Pomaga to chronić przed atakami typu clickjacking.

## Wyłącz XML-RPC
Zawsze wyłącz XML-RPC, ponieważ może być wykorzystany do ataków typu brute force lub DDoS. XML-RPC to starsza i w większości nieużywana funkcja. W przypadku dostępności, lepiej korzystać z interfejsu API JSON.

## Aktualizacje WordPressa
Zawsze utrzymuj WordPress w aktualnej wersji. Wersje minory WordPressa powinny być instalowane jak najszybciej. WordPress Core oferuje aktualizacje związane z bezpieczeństwem oraz "mniejsze" aktualizacje dla starszych wersji WordPressa. Często nieuczciwi użytkownicy przeszukują internet w poszukiwaniu tych podatności ze względu na popularność WordPressa. Dlatego tak ważne jest aktualizowanie go jak najszybciej.

## Nie używaj 'admin' jako domyślnej nazwy użytkownika administratora.
Nie używaj nazw użytkowników takich jak 'admin', ponieważ są łatwo odgadnialne. Tego typu nazwy użytkowników ułatwiają atakom brute force.

## Wyłącz listowanie użytkowników w API
Zawsze zwracaj uwagę na dostępne informacje na temat użytkowników witryny w interfejsie API JSON. Dane użytkowników WordPressa można uzyskać za pomocą interfejsu API JSON WordPressa. Może to ujawnić takie informacje jak nazwy użytkowników, które mogą być używane do próby ataku brute force lub adresy e-mail, które mogą być używane do próby phishingu.

## Zarządzanie kluczami API
Gdzie to możliwe, klucze powinny być przechowywane albo w tabeli wp_options, albo jako stała zdefiniowana w pliku wp-config.php, nigdy w kodzie źródłowym aplikacji. Przechowywanie kluczy w tych lokalizacjach zmniejsza ryzyko przypadkowego dodania tych kluczy do repozytorium wersji kontrolnej. Ponadto, te lokalizacje ułatwiają ich odnalezienie podczas rutynowych audytów bezpieczeństwa lub podczas rotacji kluczy.