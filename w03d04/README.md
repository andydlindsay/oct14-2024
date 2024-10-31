# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* obscure the original password
* one way process
* plaintext password => hashing algo (bcrypt) => hashed password (60 chars)
* rainbow table attack
* salt => randomly generated string that is added to the password
* plaintext password + 'asdkfhaksdhfkads' => hashing algo => hash

### Encryption
* reversible
* encrypt, decrypt
* plaintext cookie => cookie-session middleware (encrypt) => encrypt cookie is stored in browser
* encrypted cookie => cookie-session middleware (decrypt) => plaintext cookie

```js
// setting
res.cookie('cookieName', 'cookieValue');
req.session.cookieName = 'cookieValue';

// reading
req.cookies.cookieName;
req.session.cookieName;

// clearing
res.clearCookie('cookieName');
req.session.cookieName = null;
req.session = null; // clear all cookies
```

http://localhost:3000/login

Man in the Middle
Monster in the Middle (MitM)

HTTPS HTTP Secure
* asymetric encryption
* public key
* private key


https://www.google.com/

### REST
* RESTful architecture
* naming convention for routes
* all resources are plural
* all actions are singular

GET /all-the-urls
GET /urls-for-specific-user

POST /logout
POST /login

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

### More HTTP Methods
* PUT => replaces a resource completely
* PATCH => replace a piece of a resource
* DELETE => deletes a resource

AJAX

app.delete

div
header
footer
aside
article
section


req.method = req.query._method // DELETE
req.url

app.delete

