# REST (REpresentational State Transfer)

REST is a convention for building web services, like an API. Conventions are rules and practices that groups of people agree to in order to streamline the production of a shared or similar product or service. Web services built following the REST convention, or any convention, are more predictable and maintainable than web services not built following a convention. This makes them easier and faster for other developers to use, build, and contribute to, because developers do not need to spend time learning the bespoke rules of an individual web service. 

Based on the original specification made by Roy Fielding in his dissertation, RESTful web services conform to six constraints:
- Uniform Interface
- Stateless
- Cacheable
- Client/Server
- Layer System
- Code on Demand

The key thing for a beginner to know is that RESTful web services are self-contained services served over a uniform interface that allow development of a server and client to happen independently, assuming that uniform interface is maintained.

## What it might look like

The uniform interface is a mapping of HTTP methods to resource-based URIs representing either a collection of resources or an individual resource; these URIs are called collection and elements URIs.

### Collections and Element URIs

A collection URI should return a data structure containing all of that type of resource. While not always followed, it is convention to pluralize the resource name.

e.g. `http://www.myapp.com/api/cats`

An element URI should return a data structure containing an individual element of a type of resource. Generally this is indicated by an id number following the pluralized resource name.

e.g. `http://www.myapp.com/api/cats/1`

### Putting it all together

With this understanding, a RESTful API for the resource `cat` in `myapp` should look like this:

- `GET http://www.myapp.com/api/cats` should return all cats
- `GET http://www.myapp.com/api/cats/1` should return the first cat
- `POST http://www.myapp.com/api/cats` should create a new cat
- `PUT http://www.myapp.com/api/cats/3` should update or create the third cat
- `DELETE http://www.myapp.com/api/cats/2` should delete the second cat
