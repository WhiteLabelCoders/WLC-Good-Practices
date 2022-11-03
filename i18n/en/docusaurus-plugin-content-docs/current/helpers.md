---
sidebar_position: 9
---

# Helpers
## Auxiliary functions
Helper functions that are available globally above the theme namespace.

```php
is_development() : bool
```

Checks whether WordPress is in development mode. Development mode can be started by adding the ```WP_ENV``` in ```wp-config.php``` or in a file ```.env``` in Bedrock.

---
```php
get_theme_version() : float
```

Returns the version number of the theme defined in ```style.css```.

---
```php
get_styles_directory() : string
get_scripts_directory() : string
```
Returns the path to the selected directories (styles, scripts) in assets (in develpment mode) or dist (in production mode).

---
```php
get_styles_uri()
get_scripts_uri()
get_vendor_uri()
```

Returns url to selected directories (styles, scripts, vendor) in assets directory (in development mode) or dist (in production mode).

---
```php
inline_svg( string $url, array $class = array() ) : string
```

Returns an image in svg or svgz format , which can be inserted inline in the theme.
```$url string``` - if the image is in the current directory, just give the file name, if it is in another directory, he full url to the image with the name and extension should be entered
```$class string[]``` - he classes we want to add to the image in the container ```<svg class=“”>```

---
## Theme
Theme class contains all the actions needed for the theme to work and its customization – when registering a new CPT or CT, menu, widget - it should be done here.

---
## Svg_Support
The class provides full support for svg graphics in WordPress with their preview, without the need to use additional plugins.

---
## Acf
If an ACF plug-in is used in the project, the class with the same name will export the created fields to a file ```.json``` in the root of the /acf theme . 
It will also load this file to the plugin, but you need to synchronize manually in the "Custom fields -> Synchronization possible" tab

```php
/wp-admin/edit.php?post_type=acf-field-group&post_status=sync
```

---
## WooCommerce
If a WooCommerce plugin is used in the project , all modifications of its operation should be placed in this class.

---
## Enquque
Trait Enqueue allows you to significantly improve the work with registering files .css and .js in both blocks and theme views. Methods most frequently used are:
```php
enqueue_style( string $handle, string $file, array $deps = array(), $version = false, $media = false, array $attributes = array() )
```

Unlike standard WordPress features, this one is completely dependent on the theme and the mode in which the theme is running.

```$handle string``` - unique file identifier,

```$file string``` - if the file is located in the /style directory, only its name and extension should be entered, if it is placed outside the directory, enter the full path, name and extension,

```$deps string[]``` - dependencies,

```$version string``` - if the parameter is not specified, in production mode, the version of the theme is returned, if it is in development mode, the timestamp of updating this file is returned,

```$media```,

```$attributes``` - additional attributes


```php
enqueue_script( string $handle, string $file, array $deps = array(), $version = false, bool $in_footer = true, array $attributes = array() )
```
It works exactly like the function above.

```$handle string``` - unique file identifier,

```$file string``` - if the file is located in the /style directory, only its name and extension should be entered, if it is placed outside the directory, enter the full path, name and extension,

```$deps string[]``` - dependencies,

```$version string``` - if the parameter is not specified, in production mode, the version of the theme is returned, if it is in development mode, the timestamp of updating this file is returned,

```$in_footer``` - loading file from footer,

```$attributes``` - additional attributes, e.g. array (' async ')

Sample usage:
```php 
$this->enqueue_style( 'about-us', 'blocks/about_us.css' );
```