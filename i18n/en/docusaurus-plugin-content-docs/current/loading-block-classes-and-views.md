---
sidebar_position: 5
---

# Loading Block Classes and Views

```php title="File: .../wlc-starter-demo/functions.php"
$setup->hooks();
$setup->class_loader(
    array(
	'WLC\Blocks\Simple_Block',
	'WLC\Components\Header',
	'WLC\Components\Footer',
	'WLC\Components\Loop_Posts',
	'WLC\Views\Page',
	'WLC\Views\Blog',
	'WLC\Views\Single_Post',
	'WLC\Views\Home_Page',
	)
```

We add the appropriate namespace entry to the array.