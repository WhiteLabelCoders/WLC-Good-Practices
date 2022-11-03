---
sidebar_position: 7
---

# Defining Gutenberg blocks
The simplest form of the ACF block:
Let’s add the file class -class-name.php to the /inc/blocks directory, in which we extend the Abstract_Block class:

```php title="File: ../inc/block/class-nazwa-klasy.php"
namespace WLC\Blocks;

use WLC\Core\Abstract_Block;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

/**
 * Simple block structure and content.
 */
class Simple_Block extends Abstract_Block {

	/**
	 * Simple block constructor.
	 */
	public function __construct() {
		parent::__construct();
		$this->title       = __( 'Simple block', 'WLC' );
		$this->description = __( 'Simple block description', 'WLC' );
	}

	/**
	 * Render frontend template.
	 *
	 * @param array  $block block.
	 * @param string $content content.
	 * @param false  $is_preview preview switch.
	 * @param int    $post_id ID post.
	 */
	public function render_frontend( array $block, $content = '', $is_preview = false, $post_id = 0 ) {
		$content = get_field( $this->block_name );
		$data    = explode( '_', $block['id'] )[1];
		$id      = isset( $block['anchor'] ) ?? $data;
		$class   = $this->get_block_class( $block );

		?>
		<section id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
			<div class="container">
				<h2>Title</h2>
				<div class="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero sem, volutpat vel vehicula id, luctus eget turpis. Sed in eros non enim eleifend mattis eget eu orci. 
				</div>
			</div>
		</section>
		<?php
	}
}
```

In the constructor, we define the properties of the $title and $description class ($title is needed).
We define the render_frontend() method with the definition of
$content variables - it contains an array of ACF field group values ​​(ACF field group should have our class name in the form of "class-name").
A group of fields defined in this way will be available in our template in the form of an fields array.
In the render_frontend() method, we also define the block's html theme.
Load the class prepared in this way in the file functions.php

## Other properties that we can define in the class constructor

```php title="File: ../inc/core/class-abstract-block.php"
/**
* Block category.
*
* @var string $category  Blocks are grouped into categories to help users browse and discover them.
* The core provided categories are [ common | formatting | layout | widgets | embed ]
*/
public $category = 'wlc';
 
/**
* Icon.
*
* @var string|array $icon (Optional) An icon property can be specified to make it easier to identify a block. These can be any of WordPress’ Dashicons, or a custom svg element.
*/
public $icon = 'block-default';
 
/**
* Align.
*
* @var string (Optional) The default block alignment.
* Available settings are left, center, right, wide and full.
*/
public $align = 'wide';
 
/**
 * Align supports.
 *
 * @var bool|array $supports_align Category displayed name.
 */

public $supports_align = array( 'full', 'wide' );
```

## Styles and scripts
Defining the enqueue_assets() method, we can add styles and scripts that are loaded only on pages where the block is used.

```php title="File: .../wlc-starter-demo/inc/core/class-abstract-block.php"
/**
 * Enqueue js and css files for this block.
 *
 * You can use within one of these:
 *
 * @uses WLC\Core\Enqueue\enqueue_style()
 * @uses WLC\Core\Enqueue\enqueue_script()
 * @uses wp_enqueue_script()
 * @uses wp_enqueue_style()
 */

public function enqueue_assets() {}
```


example:

```php
public function enqueue_assets() {
	$this->enqueue_style( 'simple-block', 'blocks/simple_block.css' );
}
```

We can use auxiliary functions for this

```php
WLC\Core\Enqueue\enqueue_style()
WLC\Core\Enqueue\enqueue_script()
```

or built-in WP functions

```php
wp_enqueue_script()
wp_enqueue_style()
```

## ACF fields added from code

If we want to prepare a set of fields visible in the WorpdPress administration panel , we can use the following method:

```php
public function add_local_field_group() {
    code here…
}
```
by adding the PHP code of the field group to it.

## html template files

File named nazwa-klasy.php should be added to the template_parts/blocks/ directory.
The file is automatically included and takes precedence over the render_frontend(){} method

html file example:

```html
<section id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
	<div class="container">
		<h2>Title</h2>
		<div class="text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit... 
		</div>
	</div>
</section>
```

Similarly to the render_frontend(){} method, we have access to the array stored in the variable with the ACF field values - $content.

