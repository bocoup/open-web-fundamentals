# Cascading Style Sheets (CSS)

The web is styled based on rules written in the language, CSS. CSS is not like most programming lanugages you may have used before because it is declarative. Declarative languages have you write what you'd like to be the outcome of your program and then let the computer figure out how to accomplish that, as opposed to imperative languages where the programmer tells the computer what to do.

## Selectors

Selectors are the way you choose what elements in your CSS get styled by the styles you declare. There are a lot of types of selectors, but the three primary ones are IDs, classes, and elements.

For example:

- IDs: ID selectors are preceded with a `#`. IDs are the most specific type of selector because there can only be one element on a page with a given ID. IDs are not a very good way to do styles because they don't encourage reusing styles.

```html
<div id="about"></div>

#about {
  background-color: purple;
}
```

- Classes: Class selectors are preceded with a `.`. Classes are a good way to reuse styles and are the most common selector used.

```html
<div class="article"></div>

.article {
  text-align: right;
}
```
- Element: Element selectors are the least specific selector and are often used in resets to remove native browser-styling or boilerplates to set basic styles.
 
```html
<div></div>

div {
  margin: 20px;
}
```

## Where does it go?

![css_where-does-it-go](/img/css_where.jpg)

CSS can be added to your HTML in three different ways: inline, internally, and externally.

### Inline

Inline CSS is written as a string in the `style` attribute of an HTML tag. For example:

```html
<div style="background-color: red; color: blue; border: 1px solid yellow"></div>
```

This type of CSS can target only *one* element, the element it is an attribute of, and as a result is the most specific type of CSS you can write. This means that the styles you write inline on an element will beat all other types of styles you might write that could target that element. 

### Internal

Internal styles are written between `<style></style>` tags in the `<head>` of your HTML. For example:

```html
<head>
  <style>
    div {
      background-color: green;
      color: white;
    }
  </style>
</head>
```

### External

External styles are separate `.css` files that are included in your HTML by using `<link/>` elements in the `<head>` of your HTML. For example, given a `styles/custom.css` file:

```html
<head>
  <link href="styles/custom.css" rel="stylesheet"/>
</head>
```

Internal and external style specificity is based on the order they are placed in the `<head>` of your HTML. The last styles declared or loaded are the most specific. Because of this, it makes sense to load or declare more general styles first, such as boilerplates like Twitter Bootstrap or a reset, and then later load/declare more custom styling.


