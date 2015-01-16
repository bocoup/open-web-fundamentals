# The DOM (Document-Object-Model)

The DOM is not your HTML-- rather the DOM is the thing that is built by the browser when it reads the HTML it receives back from the server. 

![html_to_DOM](/img/DOM.jpg)

Every element in your HTML becomes an *object*, or node, with any associated attributes. All the elements - now nodes - form a tree-like structure, where each node plays either child, parent, and/or sibling, to other element/nodes. 

These nodes can be styled with CSS or manipulated with JavaScript. In order to accomplish those tasks though, one has to *find* and/or *select* the node(s) to style or manipulate. This selecting/finding is called "traversing the DOM"; this activity can either be very efficient and fast, or it can be inefficient and slow, so learning how to do it well is a critical web development skill.  
