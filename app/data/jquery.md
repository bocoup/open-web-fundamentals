#jQuery

jQuery is a library built in JavaScript. It exposes an API that lets a developer do a lot of common tasks, such as traversing the DOM, adding and removing elements, and XXX, in a much more expressive, simpler way. Additionally, jQuery makes doing these tasks in a cross-browser way very easy! In fact, this was it's primary motivation.

jQuery was written by John Resig to help ease the pain of using JavaScript in a cross-browser friendly way without having to write all of the browser specific fixes over and over again.

## What's it look like?

jQuery looks like `$()`. The `$` is actually an alias of `jQuery` and is simply a function name. One passes a string selector into the function, and the function returns a collection of all matching elements in the DOM. For example: `$(".target")` will return all elements with the class `target`.

Functions in jQuery are designed to return a collection of elements so that a developer can chain functions together.

## Do I need it?

You may have heard that "you might not need jQuery". It's true; you might not. But, you probably do.

Many of the cross-browser problems that jQuery was originally designed to mitigate are no longer issues. 

Additionally, jQuery is considered a large library (XX), so loading it is somewhat expensive. However, given the ubiquity of jQuery across many popular sites, and the use of CDNs, there's a good chance that your user already has jQuery loaded in their browser, and as a result, won't need to load it when visiting your site or page, assuming you are loading the same version from the same location as another site that user has visited.

Mostly, though, jQuery provides a lot of convenience methods that make your code more expressive and easier to write. As a beginner, it's more important to write something that works than something that is fast. Writing something with jQuery first, and then potentially removing it later if it's not affording you enough value for the cost, is a much better plan, than attempting to write it from scratch first, putting off having something functional for longer than otherwise would have been the case.
