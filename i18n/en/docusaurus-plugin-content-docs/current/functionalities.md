---
sidebar_position: 3
---

# Functionalities

** Description of functionality based on style files. **

To be able to use the starter effectively, you should read the contents of the files with configuration options.
The files have additional information in the form of comments and something like a table of contents in order to
make navigation easier, but in order not to analyze them all, here you will find their description.

## /assets/scss/_variables.scss

** 1. Global **

** $use-bootstrap-grid: false; ** - here you can set whether you want to use grid from Bootstrap 5 in your project.
If you set this variable to true most things will be done automatically like loading bootstrap-reboot.min.css file in global.scss.
Unfortunately, there is a certain import bug in sass and if you want to overwrite Bootstrap 5 variables you have to uncomment the
line with the import of the ```bootstrap``` file in the global.scss file yourself. This is the only inconvenience that has not yet
been resolved and is a global problem.

![Assets image](./assets/image2.jpeg)

If this variable is left default as ** false ** then we do not use the imported grid from Bootstrap 5 and from the classes  available
to build the layout we only have the ones in the _base.scss file: .row and .container. You don't need to be afraid to experiment with 
switching this variable. Everything is so prepared that by defining breakpoints and maximum widths for containers, regardless of 
whether you use Bootstrap 5 or not, they will work or integrate.

** $base-font-size: 16; ** - a variable responsible for the default font size. I suggest not to modify it, in order to make it easier 
to control the font size if you use rem scaling.

** $default-transition-duration: 0.15s;, $default-transition-timing: ease-in-out; ** - variables used in mixin for default transitions.

** $grid-gutter-width: 2rem; ** - set default padding for the container (only works with ** $use-bootstrap-grid: false; ** settings).


** 2. Grid breakpoints **

Here you control the number of breakpoints. You can delete them, add new ones. They integrate with Bootstrap 5, if used.


** 3. Container max-width sizes ** 

Here you control the maximum width of the containers. You can delete them, add new ones. They integrate with Bootstrap 5 if used.


** 4. Responsive Fonts **

Here you control the full scaling of the values ​​(if you use rem units or helper function rem()).


** 5. Root variables **

Here you add your variables for: root{}

## /assets/scss/_bootstrap.scss

:::caution WARNING
This file is used only for importing Bootstrap 5 components.
:::

## /assets/scss/_base.scss

The file in which we add global styles, such as .row, .container for html. Classes .row and .container are usable whether you use 
Bootstrap 5 integration or not. They will be loaded only if you are not using Bootstrap 5. Everything is prepared so that it won't 
affect your choice of using Bootstrap 5, don't worry :)


## /assets/scss/_mixins.scss

The file contains a collection of mixin and scss functions to facilitate the creation of styles.

** 1. Disable user selection ** - allows you to disable text selection

```scss
.element {
    @include nonselect;
}
```


** 2. Color ** -


** 3. Truncate single line text ** - trims text of one line if it is too long adding '...' at the end:

```scss
.element {
    @include truncateText;
}
```


** 4. Truncate multi line text ** - trims the text above the defined line. In () you should specify the line by which the text should be trimmed.

```scss
.element {
    @include truncateLines(3);
}
```

  In this example, the text will be trimmed to the end of the third line. The text in the remaining lines will not be displayed.


** 5. PX to REM ** - a function that helps you convert px values to rem values. Recommended for general use

```scss
.element {
    font-size: rem(18);
}
```

  In this example, the font-size will be converted from 18px to 1.125rem.


** 6. aspect-ratio ** - the older method of preserving ratio for elements. Currently rarely used, but it may be useful in some cases. 
It requires a value for the size of the element and the rest will be computed and will hold the ratio for that element.

```scss
.element {
    @include aspect-ratio(200, 300);
}
```


** 7. row ** - mixin which is used in the class .row if you are not using Bootstrap 5.


** 8. Custom media queries up ** - mixin mediaquery for resolutions above one of the predefined thresholds in _variables.scss 
integrating with Bootstrap 5 if used.

```scss
.element {
    @include media-breakpoint-up(lg) {
        …
    }
}
```


** 9. Custom media queries down ** -mixin mediaquery for resolutions below one of the predefined thresholds 
in _variables.scss integrating with Bootstrap 5 if used.

```scss
.element {
    @include media-breakpoint-down(lg) {
        …
    }
}
```


** 10. Custom media queries between ** - mixin mediaquery for resolutions between selected of the predefined 
thresholds in _variables.scss integrating with Bootstrap 5 if used.

```scss
.element {
    @include media-breakpoint-between(md,lg) {
        …
    }
}
```


** 11. Custom transition ** - mixin used for transition anywhere the default values of the variables 
$default-transition-duration and $default-transition-timing are set. Helpful for maintaining a standardized 
transition for items on the page.

```scss
.element {
    @include transition();
}
```
```scss
.element {
    @include transition(opacity);
}
```
```scss
.element {
    @include transition(opacity, 0.3s);
}
```
```scss
.element {
    @include transition(opacity, 0.3s, ease-in);
}
```


** 12. Responsive ** - mixin Fluid Typography https://css-tricks.com/snippets/css/fluid-typography/ used to "scale" 
not only text elements but also any components and properties that use the rem value. Based on a solution that uses calc(). 
Used on html, it works with media query. Default used in _base.scss on html . WoW: in _variables.scss we set values for 
scaling between the set values and media query thresholds

** $min-font-size ** - min font size for responsive range

** $max-font-size ** - max font size for responsive range

** $min-vw ** - min width responsive range

** $max-vw ** - max width responsive range


For example

```scss
html {
    @include fluid-type($min_width, $max_width, $min_font, $max_font);
}
```



