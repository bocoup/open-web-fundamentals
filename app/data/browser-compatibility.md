# Browser Compatibility

The internet has an interesting geneaology, and due to this bottom-up development, it poses unique challenges to the developer. Unlike native or server-side web development, where the developer has nearly complete control over the environment where her code will run, the client-side web developer writes code that will run in one of several, sometimes *very different*, browser environments.

## How do I know what will work where and how?

One of the most difficult things in web development is knowing which features of HTML, CSS, and JS will work in which browsers at which version using which technique. Ideally, a browser will support a feature in a standard way, but often before this can occur, the feature is supported using either a vendor prefix or a polyfill. 

A good place to look is [caniuse.com](http://www.caniuse.com). Also, every MDN page on CSS properties will explain where each property is implemented and how to use it (prefix or not, etc). 

### Vendor Prefixes

A vendor prefix is a string added to the beginning of a CSS property to point to a specific browser's implementation of the property.

- `-webkit`: for webkit browsers, e.g. Safari
- `-moz`: Mozilla Firefox
- `-ms`: (Microsoft) Internet Explorer 9+

The intention of vendor prefixes was to allow each browser to create its own interpretation of a proposed CSS property; when the property enters "final" status with the W3C, it is a simple change for browser vendors to drop their prefix in favour of the final version.

As a rule, vendor prefixed properties are written first in any style declaration, with the final version of the property at the end. For example:

`div {`
  `-webkit-border-radius: 5px;`
  `-moz-border-radius: 5px;`
  `border-radius: 5px;`
`}`

There are plenty of other vendor prefixes but they aren't used often.

### Polyfills, Shims, and Shivs

A polyfill is a piece of code, usually JavaScript, that provides features that a developer would expect the browser to provide natively. One uses a polyfill when they would like to write their code using new technologies, but need to support browsers, usually older versions, that don't support those features.

Sometimes these are also called shims or shivs. There are minor differences among these designations, but they are relatively insignificant, practically speaking.

For example:

The new HTML5 "living specification" allows one to use new elements such as `<section>` and `<article>`; Old browsers like IE6 don't support these elements. One can use a polyfill, e.g. html5shiv, to provide support for these elements via JavaScript.

It looks something like this:
`<!--[if lt IE 9]>`
    `<script src="bower_components/html5shiv/dist/html5shiv.js"></script>`
`<![endif]-->`

## Internet Explorer: what's the deal?

Internet Explorer is a particularly difficult browser to deal with for web developers, particularly anything below version 8. This can be a tricky situation given that at least up until very recently, most users ran Windows, the operating system that comes with IE by default.

This happened because Microsoft chose to develop IE in way that was very very different than Mozilla, Google, and Apple did. Recently, Microsoft has changed that practice and now development for more modern versions of IE has become increasingly easier.
