# MVC (Model-View-Controller)

![mvc](/img/mvc.gif)

MVC, or Model-View-Controller, is a design pattern that is very common among web development frameworks. MVC, like other design patterns, helps a developer organize an application in a maintainable and predictable way that supports the values of modularity and separating concerns.

As the acronym suggests, MVC breaks an application down into three critical parts: the model, the view, and the controller.

## Model

Models are what we use to describe the type of data we have in our application. It serves as a blueprint; the model specifies all the general aspects of the data, including properties it may have, which we call attributes, as well as behaviors, which will be defined as methods or functions.

## View 

A view is the visible portion of our application. A view can be static (i.e. does not need to be compiled or rendered); an example of a static view is an `.html` file. However, most views in web applications are *dynamic*. This means that they receive data and then need to be compiled into a static view. 

We can inject data into our views by using a template. There are lots of templating languages: e.g. Mustache, Handlebars, erb, HAML.

## Controller

The controller is the broker between the Model and the View. Ideally, the only thing a controller should do is fetch the data a view needs from the database or other source, and then hand that data to a template to be rendered. 

Just like we don't want logic in our views, we don't really want it in our controllers either! To this end, we often say "Fat models, skinny controllers."
