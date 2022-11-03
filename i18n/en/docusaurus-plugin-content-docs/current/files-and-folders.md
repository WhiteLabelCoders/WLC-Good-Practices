---
sidebar_position: 2
---

# Files and folders

## /acf
Defined fields from ACF PRO will be saved in the ```.json``` file here automatically - and imported when downloading changes from the repository.

## /assets
Catalogue, where you make all the changes.

-- fonts - place all downloaded fonts here

-- images - put here graphics that are an integral part of the page

-- js - place your scripts here

-- scss - put all styles here

-- svg - put here any svg files that are an integral part of the page

-- vendors - place here all external libraries, that you use on the website

## /dist
All output files that are loaded from this place should be put here

:::caution WARNING
Do not make changes in this folder.
:::

## /inc
Here are all the php files which you will edit.

-- Blocks - catalogue where you will put all blocks (e.g. Gutenberg blocks)

-- Components - catalogue where you will put all components (e.g. header, footer)

-- Core - here you will make general changes, e.g. the theme settings, if necessary

-- Views - here you will make changes to views, e.g. for the home page, blog, page, etc.

## /footer.php
Here is the footer layout.

## /header.php
Here is the layout for the header.

## /index.php
Here is the main page layout.

## /sidebar.php
Here is the main layout for the sidebar if you use it.

## /theme.json.dist
This file is responsible for custom styles on the admin side. If you want to define your own settings on the admin side to choose from e.g. 
default colors, fonts, do it in this file. Remember that you have to copy this file or rename it to ```theme.json.``` 
You can find more about the capabilities of this file here:

https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/

https://developer.wordpress.org/themes/advanced-topics/theme-json/



