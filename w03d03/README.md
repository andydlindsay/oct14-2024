# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Login user with username and password
- [x] Protect endpoints against non-logged in users
- [x] Clearing a cookie (aka user logout)
- [x] Register user with username and password

### Cookies
* HTTP is stateless
* neither party has to remember any prev interaction
* cookies are key/value pairs stored in the browser at the request of the server
* ALL cookies are sent to the server with every request
* cookies are domain specific localhost:6000 localhost:6001


GET /urls/new
GET /urls/:id


```js
// setting a cookie
res.cookie('cookieName', 'cookieValue');

// reading a cookie
req.cookies.cookieName;

// clearing a cookie
res.clearCookie('cookieName');
```











