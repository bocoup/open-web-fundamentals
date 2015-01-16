# JavaScript

JavaScript, generally speaking, is the language we use to create interactive elements on our webpages. JavaScript is special because it alone is the language that browsers understand. Because browsers understand JavaScript, we can use JavaScript to make our webpages do things after all the information has been sent down by the server.

## History

JavaScript has *nothing* to do with Java. In fact, it was given this name as a marketing stunt to align it with the, at the time, more popular Java language. It was originally, and still is, called ECMAScript.

JavaScript was written in 6 days by a college student named Brendan Eich.

## Where does it go and why?

We can put script tags, either containing Javascript, or pointing to an external JS file, in two places: the `<head>` and the `<body>`. Depending on where we place it, the browser will handle it differently.

### In the head

Waits to load the whole thing at beginning of page load

### In the body

At the end of page load

## Events and Event Listening

The primary wayJavaScript enables interaction on a webpage or in a web application is by listening for and responding to events. Classic events include mouse and keyboard behaviors, but can also be part of the webpage "lifecycle" such as when a page has fully loaded.

To assign behavior to a specific event we say that we "register an event listener". An event listener is simply some code that specifies an event and a action to perform when that event happens. Once registered, the listener waits, or "listens", for the event to occur, and when it does, performs the defined action.

Unless otherwise specified, the event listener will continue listening for events and performing the defined actions. This can be tricky because one cannot predict how many times and event will occur and in what order a set of events might happen. This is one of the unique challeges of web development and event-based programming.
