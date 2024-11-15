# W05D05 - Mid-term Project Kickoff

### The Why of Midterms?
* Reinforcing what you already know
* Learning how to work as a team

### Pick a Project

### User Stories
* describes how a user can interact with the app
* As a ______, I can ________, because ______

* As a logged in user, I can create a poll with multiple choices, because I want to see what my friends are interested in
* As a non logged in user, I cannot delete a url, because it doesn't belong to me.

/planning/user-stories.md

### Nouns are Resources
* nouns === table
* ERD

planning/erd.png
planning/erd-stretch.png

### Routes
* RESTful routes

Browse  GET   /products
Read    GET   /products/:id
Edit    POST  /products/:id
Add     POST  /products
Delete  POST  /products/:id/delete

planning/routes.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* what is the minimum set of features that we can demo in 5 mins
* If you don't show it, don't build it

### User Login/Registration
* don't do it

```js
// GET /login/:userId http://localhost:3000/login/5
app.get('/login/:id', (req, res) => {
  // plaintext cookies
  res.cookie('userId', req.params.id);

  // encrypted cookies
  req.session.userId = req.params.id;

  // send the user somewhere
  res.redirect('/home');
});
```

### Wireframes/Mockups

planning/wireframe.png

### Tech Stack
* Back end: Node, Postgres, Express
* Front end: HTML, CSS, JavaScript, jQuery, tailwind, bootstrap

1. Create a SCSS in /styles (layout.scss)
2. Make a Link tag in your HTML that requests the css version of the file (layout.css)
3. Middleware translates on the fly layout.scss => layout.css => public/styles
4. Express static middleware will serve it up

### SPA vs MPA
* these are not mutually exclusive

### Git
* always use branches
* use PR or local merges

### Splitting up the work
* Vertical - each dev working on a thin slice of the fullstack
* Horizontal - each dev working on a diff piece of the stack (FE, BE, DB)
* Pair Programming

### Communication
* update the scrum channel
