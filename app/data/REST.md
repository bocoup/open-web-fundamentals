# REST (REpresentational State Transfer)

REST is a convention for building APIs. Conventions are rules and practices that groups of people agree to in order to streamline the production of a shared or similar product or service. APIs built following the REST convention, or any convention, are more predictable and maintainable than APIs not built following a convention. This makes them easier and faster for other developers to use, build, and contribute to, because developers do not need to spend time learning the bespoke rules of an individual API. 

## Collections and Element URLs

A collection URL should point to the index of all of that type of resource. It should be plural.

e.g. `http://www.myapp.com/api/cats`

An element URL should point to an individual element of a type of resource. It should be an id after the plural resource.

e.g. `http://www.myapp.com/api/cats/1`

## What it should look like

A RESTful API for the resource `cat` in `myapp` should look like this:

- `GET http://www.myapp.com/api/cats` should return all cats
- `GET http://www.myapp.com/api/cats/1` should return the first cat
- `POST http://www.myapp.com/api/cats` should create a new cat
- `PUT http://www.myapp.com/api/cats/3` should update or create the third cat
- `DELETE http://www.myapp.com/api/cats/2` should delete the second cat
