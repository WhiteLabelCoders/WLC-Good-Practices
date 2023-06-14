---
sidebar_position: 2
---

# Design, OOP

## Podstawy Object Oriented Programming

Pluginów nie piszemy strukturalnie ([polecany artykuł](https://carlalexander.ca/object-oriented-programming-next-step-wordpress-developer/)), tylko wykorzystujemy podstawowe koncepty OOP, który nawet na niskim poziomie pozwalą na przyzwoitą organizację kodu, który będzie łatwiejszy (tańszy) w utrzymaniu.

W przypadku tworzenia customowego pluginu wymagane jest korzystanie z podstawowego boilerplate pluginu WLC (to do! sic) lub wybranego boilerplate, np. [wppb](https://wppb.me/).

### Encapsulation

Dane oraz zachowania w obrębie jakiejś funkcjonalności powinny być grupowane w klasy, obiekt to instancja danej klasy ([polecany artykuł](https://carlalexander.ca/first-thing-learn-object-oriented-programming/)).

Dane w obrębie klasy powinny być definiowane jako **properties, czyli zmienne** specyficzne dla całej klasy.

**Metody to funkcje**, czyli zachowania specyficzne dla danej klasy, posiadają one bezpośredni dostęp do properties.

### Visibility

Widoczność metod i properties (mechanizm kontroli dostępu):

**Public** - defaultowe zachowanie, metoda lub property jest w pełni dostępna. Wszystkie metody wykorzystywane w hookach powinny być publiczne.

**Protected** - dostęp tylko w obrębie klasy definiującej lub klasy która rozszerza (extend) klasę definiującą.

**Private** - dostęp tylko w obrębie klasy definiującej.

### Inheritance

Pozwala na tworzenie re-używalnego kodu pomiędzy klasami ([polecany artykuł](https://carlalexander.ca/using-inheritance-wordpress/)).

Wykorzystanie keyword extend przy definiowaniu klasy pozwala na korzystanie z metod i properties zdefiniowanych w klasie rodzicu (np. `Car extends Vehicle` lub `Dog extends Animal`).

Zasady wykorzystywania taka jak w sekcji Visibility.

## Przestrzenie nazw

Kod PHP który nie jest częścią WordPress Template Hierarchy powinien być organizowany w obrębie przestrzeni nazw (namespace), w celu uniknięciu konfliktów z innymi klasami i funkcjami o podobnych nazwach.

Deklaracja  `use`  powinna być używana aby korzystać z klas i ich metod spoza przestrzeni nazw.

_Temat do rozwinięcia aby był w pełni zrozumiały_

```php
<?php

namespace MyAwesomePlugin\Api;

defined( 'ABSPATH' ) || die( 'Direct file access is forbidden' );

// Make Misc class available in current namespace
use MyAwesomePlugin\General\Misc;

class Block {
   /**
    * Init
    *
    * @return void
    */
   public function init() {
        // Thanks to use statement we can initiate class like this, nice!
        $misc = new Misc();
        // Otherwise we could do it like this, not that nice
        $misc = new \MyAwesomePlugin\General\Misc;
        
        $some_misc_data = $misc->get_some_data();
   }
}
```

## DRY

Czyli **Don’t Repeat Yourself**! 

DRY to koncept w programowaniu, stanowiący, że nie powinniśmy powielać tego samego kodu w wielu miejscach, a jeżeli widzimy, że tak się dzieje to wspólny kod w obrębie wielu metod powinien zostać wyciągnięty do osobnej funkcji, do której metody te będą się odwoływać.

## SOLID

To zbiór reguł, które powinny być stosowane przy tworzeniu oprogramowania w języku PHP, SOLID to dość zaawansowany zbiór reguł, stosowanie tylko pierwszej reguły powinno znacząco wpłynąć na jakość produkowanego kodu:

S jak **Single responsibility principle** ([polecany artykuł](https://carlalexander.ca/single-responsibility-principle-wordpress/)) - reguła ta stonowi, iż klasa lub metoda powinna robić jedną i tylko jedną rzecz (pojedyncza odpowiedzialność), jeżeli zauważy, że metoda staje się zbyt rozwlekła, może to oznaczać, iż taką metodę należy rozbić na dwie lub wiele mniejszych, które będą spełniać konkretne zadania. 

O jak **Open/closed principle** - kod powinien być zamknięty na modyfikacje ale otwarty na rozszerzanie. W realiach WordPressa i jego pluginów zasada ta jest idealnie realizowana poprzez hooki (akcje i filtry), gdzie absolutnie zabronione jest modyfikowanie kodu bezpośrednio, za to dobrze napisany plugin poznamy po tym, iż wyposażony jest w hooki pozwalające na jego rozszerzenie.

L jak Liskov substitution principle - ([polecany artykuł](https://accesto.com/blog/solid-php-solid-principles-in-php/))

I jak Interface segregation principle - ([polecany artykuł](https://accesto.com/blog/solid-php-solid-principles-in-php/))

D jak Dependency inversion principle - ([polecany artykuł](https://accesto.com/blog/solid-php-solid-principles-in-php/))
