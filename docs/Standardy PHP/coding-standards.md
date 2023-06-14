---
sidebar_position: 1
---

# Standardy kodowania

[Standardy kodowania PHP](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/) oraz [standardy dokumentowania kodu](https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/) zostały opisane w Codexie WordPressa i wymagana jest ich znajomość oraz stosowanie w projektach realizowanych w White Label Coders. Zachęcamy do zapoznania się ze standardami oraz wracaniem do nich od czasu do czasu.

W niniejszym dokumencie część standardów będzie się powtarzała względem tego co możemy przeczytać w Codexie.

## Standardy kodowania WordPress

Standardy kodowania dla WordPressa oraz ich sprawdzanie należy zautomatyzować z poziomu Gitlaba lub/oraz z poziomu IDE, można to zrobić w następujący sposób:

### Ustawienie Code Style 

-- Konfiguracja **WordPress Code Style** dla [PhpStorm](https://www.jetbrains.com/help/phpstorm/wordpress-aware-coding-assistance.html#configuring-wordpress-code-style) 

-- Konfiguracja **WordPress Code Style** dla Visual Studio Code

### Ustawienie Code Sniffera

Stosowanie **[WordPress Coding Standards dla PHP_CodeSniffera](https://github.com/WordPress/WordPress-Coding-Standards)**, który można skonfigurować na dwa sposoby:

-- W repozytorium **w Gitlabie** w pliku `.gitlab-ci.yml` - walidacja kodu względem standardów następuje automatycznie w momencie wypchnięcia zmian do repo.

-- **Z poziomu IDE** - walidacja musi zostać wywołana ręcznie. 

PHP_CodeSniffer posiada **funkcjonalność automatycznego poprawiania kodu** - [PHP Code Beautifier and Fixer](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically).

## Dokumentacja kodu

W White Label Coders kładziemy nacisk na **właściwe komentowanie** / dokumentowanie kodu poprzez stosowanie DocBloków oraz komentarzy inlinowych wewnątrz funkcji i metod. Generalna zasada jest taka, że osoba nietechniczna powinna wiedzieć co robi dana funkcja  po przeczytaniu komentarzy.

**DocBloki** powinny zawierać minimum:

-- Opis co dana funkcja robi

-- `@param` - opis każdego parametru w formacie parameter type, variable name, description

-- `@return` - typ zwracany przez funkcję

DocBlock może zostać wygenerowany automatycznie w IDE poprzez wpisanie `/**` oraz naciśnięcie przycisku enter. Jeżeli w funkcji zastosowane zostały deklaracje typów, to część danych uzupełni się automatycznie.

Deklaracje typów oraz deklaracja zwracanych typów, czyli **Type declaracations**, powinny być stosowane zarówno dla parametrów jak i zwracanego przez funkcję typu.

Przykład:

```php
/**
* Get Entry payment methods data as separate arrays of deposit and withdrawal methods
*
* @param int  $resource_id Post ID
* @param bool $return_ids  If to just return IDs or data as well
*
* @return array
*/
public function get_separated_payment_methods( int $resource_id, bool $return_ids = false ): array {
    // function body goes here
}
```

W przypadku gdy paramter lub funkcja może przyjmować więcej niż jeden typ, należy rozdzielić je znakiem `|`:

```php
/**
* Get Bonuses by Bonus Types
*
* @param string $post_type   Post Type
* @param array  $bonus_types Bonus Type IDs to process
*
* @return array|bool
*/
private function get_bonuses_by_bonus_type( string $post_type, array $bonus_types ): array|bool {
    // function body goes here
}
```



