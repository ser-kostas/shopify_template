# Shopify Store Template

A reusable, modular Shopify theme template designed for client projects, rapid customization, and Git-based development.

## Overview

This repository contains a buildless Shopify theme that can be customized and reused across multiple Shopify stores.

The theme is structured around Shopify's native Online Store 2.0 architecture, with reusable sections, snippets, JSON templates, theme settings, responsive styling, and Shopify CLI development support.

## Features

* Responsive storefront layout
* Modular Shopify sections
* JSON templates
* Customizable theme settings
* Custom colors
* Custom typography
* Custom logo and favicon
* Responsive header and mobile navigation
* Announcement bar
* Hero section
* Featured collection
* Image with text
* Newsletter signup
* Product page
* Related products
* Collection page
* Cart page
* Search page
* Standard content pages
* 404 page
* Product cards
* Reusable price component
* Social media links
* Accessible navigation and controls
* Responsive product grids
* Shopify Theme Check compatible
* Git-based development workflow

## Theme Structure

```text
shopify_template/
│
├── assets/
│   ├── base.css
│   └── theme.js
│
├── config/
│   ├── settings_data.json
│   └── settings_schema.json
│
├── layout/
│   └── theme.liquid
│
├── locales/
│
├── sections/
│   ├── announcement-bar.liquid
│   ├── featured-collection.liquid
│   ├── footer-group.json
│   ├── footer.liquid
│   ├── header-group.json
│   ├── header.liquid
│   ├── hero.liquid
│   ├── image-with-text.liquid
│   ├── main-404.liquid
│   ├── main-cart.liquid
│   ├── main-collection.liquid
│   ├── main-page.liquid
│   ├── main-product.liquid
│   ├── main-search.liquid
│   ├── newsletter.liquid
│   └── related-products.liquid
│
├── snippets/
│   ├── icon.liquid
│   ├── price.liquid
│   ├── product-card.liquid
│   └── social-icons.liquid
│
├── templates/
│   ├── 404.json
│   ├── article.json
│   ├── blog.json
│   ├── cart.json
│   ├── collection.json
│   ├── index.json
│   ├── page.json
│   ├── product.json
│   └── search.json
│
├── .gitignore
└── README.md
```

## Requirements

You need:

* A Shopify store or Shopify development store
* Shopify CLI
* Git
* GitHub account
* Google Chrome for Shopify CLI local theme preview

## Local Development

Clone the repository:

```bash
git clone https://github.com/ser-kostas/shopify_template.git
```

Enter the project directory:

```bash
cd shopify_template
```

Authenticate with Shopify:

```bash
shopify auth login
```

Connect the theme to a Shopify store:

```bash
shopify theme dev --store YOUR-STORE.myshopify.com
```

Shopify CLI will create a development theme and provide a local preview URL.

Open:

```text
http://127.0.0.1:9292
```

The local development server supports live updates while editing the theme.

## Theme Check

Run Shopify Theme Check before committing changes:

```bash
shopify theme check
```

The goal is to keep the repository free of Theme Check errors and warnings.

## Git Workflow

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push
```

Example:

```bash
git add .
git commit -m "Improve product page layout"
git push
```

## Client Workflow

This repository is intended to be used as a master theme template.

Recommended workflow:

```text
Master Template
      │
      ├── Client A
      │      └── Shopify Store A
      │
      ├── Client B
      │      └── Shopify Store B
      │
      └── Client C
             └── Shopify Store C
```

The master repository should remain generic and should not contain client-specific information, credentials, API keys, or private content.

For each client, create a separate repository or branch based on the master template.

## Shopify GitHub Integration

Shopify can connect a GitHub repository branch directly to a theme.

This allows changes pushed to the connected branch to be synchronized with the Shopify theme.

Typical workflow:

```text
Local Theme
     │
     ▼
   Git
     │
     ▼
  GitHub
     │
     ▼
Shopify Theme
```

For production client projects, use a dedicated repository or branch for each client.

## Customization

The main global theme settings are controlled through:

```text
config/settings_schema.json
```

Current customizable areas include:

* Brand name
* Logo
* Favicon
* Colors
* Body font
* Heading font
* Heading scale
* Page width
* Content width
* Section spacing
* Button style
* Button radius
* Social media links

Section-specific settings are defined inside the corresponding files in:

```text
sections/
```

## Important Files

### `layout/theme.liquid`

Global theme layout and document structure.

### `config/settings_schema.json`

Defines global settings available in the Shopify theme editor.

### `config/settings_data.json`

Stores the current theme settings.

### `templates/`

Defines the page structures used throughout the Shopify storefront.

### `sections/`

Contains reusable, customizable Shopify sections.

### `snippets/`

Contains reusable Liquid components.

### `assets/`

Contains global CSS and JavaScript.

## Development Principles

This theme is designed around:

* Reusability
* Modular sections
* Clean Liquid structure
* Responsive design
* Accessibility
* Minimal dependencies
* Shopify-native functionality
* Git-based version control
* Easy client customization

## Repository

GitHub:

https://github.com/ser-kostas/shopify_template

## License

This repository is intended as a reusable development template.

Add or modify the license terms according to how this theme is distributed to clients.
