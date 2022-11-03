---
sidebar_position: 8
---

# Views for pages

Views for pages (postst, page, custom-post-type...) are defined in the views / directory by creating an appropriate
class in the file, e.g. class-custom-post-type.php

in this file we extend the Index class

class Custom_Post_Type extends indxes {}

we define hooks () {}

```php
public function hooks() {
    parent::hooks();
}
```

In this method, we can modify the behavior of WordPress , e.g. modification of main query by attaching to the
appropriate hook and defining the appropriate method, for example:

```php
public function hooks() {
	parent::hooks();
	add_action( 'pre_get_posts', array( $this, 'main_query_filter' ) );
}
```

In the view_hooks(){} method, we connect to the appropriate view hooks by defining appropriate methods for these
actions, for example:

```php
public function view_hooks() {
	parent::view_hooks();
	if ( is_home() ) {
		add_action( 'wlc_before_content', array( get_class( $this ), 'blog_title' ), 2 );

		add_action( 'wlc_before_loop', array( get_class( $this ), 'open_container' ), 10 );
		add_action( 'wlc_after_loop', array( get_class( $this ), 'close_container' ), 20 );
		add_action( 'wlc_after_loop', array( get_class( $this ), 'pagination' ), 30 );
		add_action( 'wlc_entry', array( get_class( $this ), 'loop_entry' ), 5 );
	}
}
```

If we want to be able to disable view hooks in specialized views in the future (e.g. for only one category),
for which we will prepare a separate class, it is worth considering the method definitions in the original
view as static methods and hooking them in the form

```php
add_action( 'wlc_entry', array( __CLASS__, 'post_title' ), 5 );
```

Thanks to this, we will be able to disable a given action elsewhere.

```php
remove_action( 'wlc_entry', array( 'Nazwa_Klasy', 'nazwa_metody' );
```
