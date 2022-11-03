---
sidebar_position: 6
---

# View/class, block/class
By default, when loading classes after object initialization, the hooks() method and, if it exists, an init() method are loaded.

```php title="File: .../wlc-starter-demo/inc/core/class-theme.php"
/**
 * Class loaderclass=
 */
public function class_loader( array $classes ) {
	foreach ( $classes as $class ) {
		$object = new $class;
		$object->hooks();
		if ( method_exists( $object, 'init' ) ) {
			$object->init();
		}
	}
}
```
