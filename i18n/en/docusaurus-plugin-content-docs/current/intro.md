---
slug: /
sidebar_position: 1
---

# General information

** WLC Starter ** documentation.

## Features

- PHP OOP,
- autoload namespace with spl_autoload_register.
- Bedrock compatibility (not required),
- WordPress coding standards,
- View/class, block/class methodology,
- support for defined ACF local JSON fields,
- compilation of files using Webpack (laravelmix),
- own grid support (compatible with Bootstrap 5),
- style reset from Bootstrap 5,
- full compatibility with Bootstrap 5 (not required),
- helpful mixin collection,
- predefined ACF text fields for ```<head>```, ```<body>```, ```<footer>``` to handle your own code,
- custom style support for the editor on the admin panel using theme.json,
- inline SVG support,

## Installation

1. In the themes folder, download the [repository](https://github.com/WhiteLabelCoders/wlc-starter), replacing the name "starter" with the name adequate to the project.

  With the use of SSH
  ```bash
  git clone git@github.com:WhiteLabelCoders/wlc-starter.git starter
  ```

  or via HTTPS
  ```bash
  git clone https://github.com/WhiteLabelCoders/wlc-starter.git starter
  ```
<br/>
2. In a terminal window, do
  ```bash
  npm install
  ```
  or
  ```bash
  yarn install
  ```
<br/>
3. Copy the file ```.env.dist``` to ```.env``` and fill in APP_URL e.g.
  ```bash
  APP_URL = starterdemo.local
  ```

  This name should match the name under which you access the page.

## Coding standards

Theme uses [WordPress](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/) coding standards.

In order to maintain indent control, we use a [configuration file](https://editorconfig.org/) ```.editorconfig``` for different types of files.<br/>
To handle this file and the configuration it contains, you need to install the appropriate plug -in :

[VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)<br/>
[PHPStorm](https://plugins.jetbrains.com/plugin/7294-editorconfig)

## Development
1. In ```wp-config.php``` file , set

  ```php
  define( 'WP_DEBUG', true );
  ```
<br/>

2. Go to the terminal and use
  ```bash
  npm run watch
  ```
  or
  ```bash
  yarn watch
  ```

  From now on, at ```http://localhost:3000``` and the one defined in ```APP_URL``` with a call to port 3000, a website ready for development will be available, e.g. ```http: //starterdemo.local:3000```
  with automatic reloading when making changes. In the terminal window, you will also see the address at which you can call up the page, e.g. on a mobile device, while being within your network.
  
  ![Development image](./assets/image1.png)

  :::caution WARNING
  Remember to use
  ```bash
  npm run production
  ```
  or
  ```bash
  yarn production
  ```
  in order to have scss, js files minified.
  :::
