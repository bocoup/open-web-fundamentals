# HTTP Requests

A HTTP Request is made up of 2 parts: a Request URI and a method.

## Request-URIs

A Request URI is just a fancy word for a URL. It designates the location of a method or resource

### Parameters

- Route Params

- Query Params

## Methods

When a client makes a request over HTTP, they are likely using one of four methods: GET, POST, PUT, or DELETE. There are other methods, but these are the most common, particularly in CRUD applications.

- `GET`: Go to request-URI and retrieve the information that is there. (collection or element)

- `POST`: Send data to request-URI and make a resource with that data of the type defined by the Request-URI (collection URL)

- `PUT`: Send data to the request-URI and either update or make a resource at the ID in the Request URI (element URL)

- `DELETE`: Remove the resource at the ID in the Request URI (element URL)
