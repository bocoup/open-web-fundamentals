# HTTP Status Codes

When a responses comes back from the server, it is accompanied by something called an HTTP Status Code. This status code, lets us know if we were successful, and if so what happened, or alternatively, if something went wrong, and if so, where it went wrong.

It's ok to just use `100`, `200`, `300`, `400`, or `500`! All the other codes are just more specific versions of these, so if you are just starting out(and even if you aren't!), these are totally adequate.

The status codes are organized by number, with each "hundred" meaning something different:

- `5xx` Server Error: The server messed up!
- `4xx` Client Error: The client tried to do something incorrectly or tried to do something that was not possible
- `3xx` Redirection: The server is changing the Request-URI
- `2xx` Success: It worked!
- `1xx` Information
