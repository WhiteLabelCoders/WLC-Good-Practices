---
sidebar_position: 1
---

# Dobre praktyki (S)CSS

## DRY
Pomaga w lepszym zarządzaniu kodem, co wpływa na jego utrzymanie - a przede wszystkim na rozmiar wynikowego pliku. 

```html
<button class="button button--primary">Przycisk</button>
```
```css
.button {
  /* Wspólne style przycisków */
  padding: 10px 20px;
  border-radius: 4px;
  /* ... */
}

.button--primary {
  /* Dodatkowe style dla przycisków głównych */
  background-color: #007bff;
  color: #fff;
  /* ... */
}

.button--secondary {
  /* Dodatkowe style dla przycisków wtórnych */
  background-color: #6c757d;
  color: #fff;
  /* ... */
}
```
Tworzenie globalnych konfiguracji dla elementów pozwala zachować jakość kodu i spójność w kontekscie całego projektu.

## Konwencja nazw i tworzenia kodu oraz optymalizacja selektorów.

`BEM` -  rozwiązuje problem konwencji tworzenia kodu, jego struktury oraz pisania kodu przesadnie zagnieżdżonego.

BEM (Block Element Modifier) - opiera się na nazwach klas, które odzwierciedlają strukturę HTML i relacje między elementami. Dzięki takiemu podejściu do organizacji kodu HTML i CSS zyskujemy możliwość uzyskania łatwej skalowalności projektu, rozróżnienia odpowiedzialności danych selektorów, prostej i przejrzystej stylizacji projektu.

Ogólna struktura BEM z wyjaśnieniem

```css
.block {} // block - głowny element komponentu
.block__element {} // zagnieżdzony w HTML element
.block--white-bg {} // modyfikator np białe tło
```

Przykład komponentu w BEM

```html
<div class="product">
  <h3 class="product__title">Nazwa produktu</h3>
  <p class="product__description">Opis produktu</p>
</div>
```

Reprezentacja kodu w SCSS

```scss
.product {
	margin: 1.4rem;

	&__title {
		font-size : 1rem;
		....
	}
	
	&__description {
		font-size : 0.8rem;
		....
	}
}
```

Daje nam przeniesienie w CSS na kod, który nie tworzy złożonej struktury i zbędnych zagnieżdzeń:
```css
.product {
	margin: 1.4rem;
}

.product__title {
	font-size: 1rem;
}

.product__description {
	font-size: 0.8rem;
}
```
Dzięki takiemu podejściu używanie danego selektora jest uniwersalne w kontekście całej strony i nie ma konieczności dodatkowego powtarzania kodu. 

BEM rozwiązuje problem przesadnego zagnieżdżania elementów a co za tym idzie obniżenie pracy którą musi wykonać przeglądarka podczas renderowania kodu - nie musi przeszukiwać wielu poziomów kodu HTML i CSS by przypisać mu wartości. Dla przykładu

```html
<div class="card">
	<h2 class="card__title"> Tytuł </h2>
	<div class="card__description">
		<h3 class="card__subtitle"> Podstawowe informacje: </h3>
		<p class="card__text">Podstawowy tekst opisujący przedmiot.</p>
	</div>
</div>
```
```css
/* Błędne stylowanie w CSS */

.card div h3 {
	font-size: 0.6rem;
}

/* Małe zagnieżdzenia w kodzi - wywołujące mniejsze obciązenie - akceptowalne */

.card h3 {
	font-size: 0.6rem;
}

/* Z zastosowaniem BEM nie ma konieczności zagnieżdzania selektorów w CSS */

.card__subtitle {
	font-size: 0.6rem;
}
```

Na pierwszy rzut okiem nie ma różnicy - jednak dla przeglądarki podczas renderowania, procesora i performance różnica jest kolosalna, gdyż podejście BEM znacząco obniża ilość zasobów niezbędnych. do uruchomienia kodu.

## Zmienne globalne, lokalne - CSS Variables
Pozwalają na ujednolicenie kodu / styli w projekcie.

- Użyj nazw, które są łatwe do zrozumienia i opisujące ich przeznaczenie.
- Zdefiniuj zmienne globalne na początku pliku, przed ich użyciem.

```css
/* Globalne - deklarowane w osobnym pliku np _variables.css */

:root {
	/* kolory */
	--primary-color: #000;
	--secondary-color: #fff;

	/* font */
	--font-default: 1rem;
	--font-18: 1.125rem;
}

/* lokalne - pozwalające nadpisać wartości zmiennych globalnych */

.button {
	--primary-color: #ddd;
	color: var(--primary-color);
}
```

## Unikanie używania !important w kodzie

Unikanie używania **`!important`** w kodzie CSS jest zalecane, ponieważ może prowadzić do utraty kontroli nad kolejnością i specyficznością stylów.

- **`!important`** przypisuje najwyższy priorytet danemu stylowi, co może powodować trudności w zarządzaniu i utrzymaniu kodu CSS.
- Nadużywanie **`!important`** może prowadzić do trudności w debugowaniu i rozwiązywaniu problemów, gdy konflikty stylów występują w kodzie.
- problem kaskadowości - może zakłócać naturalną kaskadę CSS, w której style są aplikowane według określonej kolejności i hierarchii.
- trudności w skalowalności i rozszerzalności - może utrudniać skalowalność i rozszerzalność kodu CSS w przyszłości.
- **`!important`** ma swoje zastosowanie w określonych sytuacjach, takich jak nadpisywanie stylów zewnętrznych bibliotek, ale warto ograniczać jego stosowanie tylko do konkretnych przypadków, gdy jest to naprawdę konieczne.

## Shorthand syntax

```css
/* marginesy, paddingi */

margin: 0;
margin: 1rem 0.5rem;
inset: 0;
inset: 1rem 0.5rem;

padding: 0;
padding: 1rem 0;


/* background */
background: url('../img/star.svg') no-repeat center center;

/* border */
border: 0.5rem solid #000;
```
[Pełna lista skrótów.](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties).

## Syntax
- Formatowanie
```css
/* 
* - Jeden selector w linii,
*	- spacja po selectorze przed nawiasem,
*	- kończenie linii średnikiem
*	- stosowanie wcięć - w zależności od konfiguracji lintera
*/

.class1,
.class2,
.class3 {
	display: flex;
	color: #fff;
}
```
- Kolejność deklaracji
```css
/* Przykład w css */
.selector {
  /* Układ */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  font-size: 16px;

  /* Wizualizacja */
  color: #000;
  background-color: #fff;
  z-index: 1;

  /* Interakcja */
  cursor: pointer;
  transition: opacity 0.3s ease;

  /* Inne */
  opacity: 0.8;
}
```

Wyżej wskazany przykład kolejności deklaracji jest zgodny z obowiązującym modelem CSS Triggers - pokazującym jaki wpływ na performance i czas renderowania strony mają poszczególne atrybuty. [CSS Triggers](https://csstriggers.com/) oraz wtyczka do Visual Studio Code pomagająca w organizacji kodu css ze względu na kolejność deklaracji a przy tym opisująca ich znaczenie: [CSS Triggers VSC](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.csstriggers). 

## Znaczenie properties w CSS

CSS Triggers to podział na kolejne etapy renderowania strony internetowej - ale również korzystny dla projektu podział logiczny w jakiej kolejności pisać properties.

W kolejności od najbardziej obciążających procesor i jednocześnie wykonywanych na samym początku: 


*`LAYOUT`* → *`PAINT`* → *`COMPOSITE`*

### LAYOUT

- Layout to właściwości CSS, które powodują, że przeglądarka musi obliczyć położenie i rozmiar elementów na stronie.
- Najbardziej "kosztowna" operacja w procesie renderowania, ponieważ procesor graficzny musi przebudować dany element i jego "childy" gdy zostanie zmieniony styl odpalający zmianę layoutu na stronie.
- Występuje, gdy drzewo DOM jest manipulowane, lub styl wpływający na układ jest zmieniany, gdy rozmiar okna przeglądarki jest zmieniany, gdy właściwość class (className) jest zmieniana.
- Należy pamiętać, że każda zmiana w jednej z właściwości layoutu może mieć wpływ na inne elementy na stronie, dlatego ważne jest, aby pisać je w odpowiedniej kolejności i starannie testować ich wpływ na layout.

#### CSS Properties - LAYOUT 

`position`
`top`
`left`
`right`
`bottom`
`width`
`height`
`min-height`
`padding`
`margin`
`display`
`border-width`
`border`
`font-size`
`float`
`text-align`
`overflow-y`
`font-weight`
`overflow`
`font-family`
`line-height`
`vertical-align`
`clear`
`white-space`

### PAINT

- Paint to drugi w kolejce kosztowny proces renderowania elementów na stronie - właściwości należące do tej grupy nie uruchamiają Layout
- Odpowiada za "wypełnienie" pixelami każdego elementu na stronie po warstwach
- Krok Paint uruchamia się gdy chcemy zmienić background-color, dodać outline
- Ta operacja jest kosztowna gdyż przeglądarka musi sprawdzić każdy element i określić co jest widoczne / co powinno być wyświetlane

#### CSS Properties - PAINT 

 `color`
 `border-style`
 `visibility`
 `background`
 `text-decoration`
 `background-image`
 `background-position`
 `background-repeat`
 `outline-color`
 `outline`
 `outline-style`
 `border-radius`
 `outline-width`
 `box-shadow`
 `background-size`

 ### COMPOSITE

- Compositing to technika rozdzielania części strony na warstwy, rasteryzowania ich osobno i komponowania jako strony w osobnym wątku zwanym compositor thread. W przypadku przewijania, ponieważ warstwy są już rasteryzowane, wszystko co trzeba zrobić to skomponować nową klatkę. Animację można osiągnąć w ten sam sposób, przesuwając warstwy i komponując nową klatkę.
- Podstawowymi właściwościami, które wywołują composite są opacity i transform (translate, scale, rotate)
- Aby dowiedzieć się, które elementy powinny znajdować się w których warstwach, główny wątek przechodzi przez drzewo układu w celu utworzenia drzewa warstw (ta część nazywa się "Update Layer Tree" w panelu wydajności DevTools). Jeśli pewne części strony, które powinny być oddzielnymi warstwami (jak np. menu boczne w suwaku) nie dostają ich, to możesz podpowiedzieć przeglądarce używając atrybutu will-change w CSS.

#### CSS Properties - COMPOSITE 

`opacity` 
`transform`

## RWD - Media queries

Responsive Web Design to potężne narzędzie do tworzenia widoków dla wszystkich urządzeń.

Tworząc kod (S)CSS należy pamiętać aby tworzyć go w pierwszej kolejności dla urządzeń mobilnych - ograniczając w ten sposób ilość kodu potrzebną do załadowania na mniejszych urządzeniach. Dlatego w pierwszej kolejności tworzymy kod który nie wymaga dodawania media queries.

```scss
.box {
	/* kod ogólny - niezbędny dla mobile i wykorzystywany na każdej rozdzielczości*/
	display: flex;
	justify-content: center;
	width: 100%;

	/* kod dla większych urządzeń nadpisujący wartości urządzeń mobilnych */
	
	@media and (min-width: 768px) {
		/* zmiana szerokości elementu wchodząca gdy zostanie osiągniety na urządzewniu odpowiedni rozmiar ekranu */
		width: 50%;
	}
}
```

W projektach należy używać wcześniej predefiniowanych breakpointów oraz mixinów, który ułatwiają pracę z kodem a także utrzymanie projektu.

```scss
/* breakpoints */

	// Start
  xxs: 0,
  // Phone
  xs: 375px,
  // Phone
  sm: 576px,
  // Tablet
  md: 782px,
  // Tablet
  lg: 992px,
  // Desktop
  xl: 1200px,
  // Desktop
  xxl: 1440px,
  // Desktop
  3xl: 1920px,
  // Large desktop
  4xl: 2560px

/* mixins - md wartość pobrana z listy powyżej */

@include media-breakpoint-up(md) {
	....
}

/* dopuszczalny media query gdy zmiana ma znajdować się w danym przedziale */

@include media-breakpoint-between(md, xl) {
	....
}
```

## Projektowanie animacji w CSS

Animacje w CSS są niezwykle istotne w kwestii wykorzystania GPU - koszt zbędnej akcji w CSS odbije się na performance strony lub aplikacji. Duża ilość animacji obciąży niepotrzebnie procesor i sprawi, że wynik kodu będzie słaby a jednocześnie nieprzyjemny dla oka.

- Preferowane właściwości do używania w animacjach `transform` `scale` `rotate` - wykorzystują one akcelerację sprzętową GPU i są bardziej wydajne niż animowanie pozycji `left` `top` `right` `bottom` lub wielkości elementu `width` `height`

Przykład:
```css
.element {
  transform: translateX(100px) scale(1.1);
  transition: transform 0.3s ease;
}
```
będzie lepszy niż:
```css
.element {
  left: 100px;
  width: 110%;
  transition: all 0.3s ease;
}
```

Konieczne w zachowaniu płynności animacji są funkcje przejścia:

- `linear` - oferuje stałe tempo animacji, bez przyspieszeń ani zwolnień - nie generuje dużego obciążenia
- `ease` - oferuje łagodne przyspieszenie na początku i zwalnianie na końcu animacji - ma stosunkowo niewielkie obciążenie
- `ease-in` - zapewnia łagodne przyspieszanie na początku animacji - funkcja wymaga obliczenia nieliniowego, co może prowadzić do większego obciążenia dla GPU w porównaniu do `ease`
- `ease-out`  - zapewnia łagodne zwalnianie na końcu animacji - Podobnie jak `ease-in`, ta funkcja również wymaga obliczenia nieliniowego, co może wpływać na wydajność GPU
- `ease-in-out` oferuje łagodne przyspieszanie na początku i zwalnianie na końcu animacji - Ze względu na obliczenia nieliniowe, może to prowadzić do nieco większego obciążenia GPU w porównaniu do `ease`

## Jak dobrze animować CSS poprzez JavaScript

- Użyj metody `requestAnimationFrame`:
- Zamiast bezpośrednio manipulować stylami CSS w pętli `for` lub `while`, warto użyć metody `requestAnimationFrame` do synchronizacji animacji z odświeżaniem ekranu.
- `requestAnimationFrame` minimalizuje obciążenie procesora i zapewnia płynniejsze animacje.

```javascript
function animate() {
  // Zmiana wartości CSS
  element.style.transformX = newValue + 'px';

  // Wywołanie metody requestAnimationFrame
  requestAnimationFrame(animate);
}

animate();
```

- Użyj klasy CSS do definiowania animacji
- Możesz zdefiniować animację w CSS za pomocą reguł **`@keyframes`**, a następnie użyć klasy CSS do uruchamiania i kontrolowania animacji za pomocą JavaScript.
- To podejście oddziela logikę animacji od kodu JavaScript, co ułatwia zarządzanie i modyfikację animacji.

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```
```javascript
element.classList.add('slide-in');
```

Istnieje wiele bibliotek JavaScript, takich jak GSAP (GreenSock Animation Platform), Anime.js, Velocity.js, które zapewniają zaawansowane funkcje animacji CSS i są zoptymalizowane pod kątem wydajności. Przykład przy użyciu biblioteki GSAP
```javascript
gsap.to(element, { duration: 1, x: 100, opacity: 0.5 });
```

## Używanie assetów w CSS

Gradienty i figury geometryczne - lepszy sposob jest zakodowanie ich w css zamiast wczytywać dodatkowe żródła, które muszą zostać pobrane.

## Dokumentowanie - komentarze

Komentarze w kodzie CSS są dobrymi informacjami o konkretnej funkcji w kodzie, zmianach lub nietypowym działaniu - które nie powinno zostać nadpisane. 

```scss
/* ====================
Sekcja nagłówka
==================== */

.header {
	/* Styl nagłówka */
  /* ... */
}

/* Komentarz opisujący konkretne reguły CSS */

.button {
  /* Styl przycisków */
  /* ... */
}

.button--primary {
  /* Styl przycisków głównych */
  /* ... */
}

/*
 * Klasa .box
 * ---------------
 * Klasa .box stosowana jest do stylizacji kontenerów.
 * Zawiera podstawowe style i rozmiary dla kontenerów.
 */

.box {
  /* Styl kontenera */
  /* ... */
}
```