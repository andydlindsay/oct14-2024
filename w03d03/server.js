const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
app.use(cookieParser()); // creates and populates req.cookies

// users database
const users = {
  userRandomID: {
    id: "userRandomID",
    email: "a@a.com",
    password: "1234",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "b@b.com",
    password: "5678",
  },
};

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // pull email and password off of req.body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT send us an email and password
  if (!email || !password) {
    return res.status(400).send('you must provide an email and password to proceed');
  }

  // lookup the user based on their email
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user!
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! yay! the user is who they say they are!

  // give them a cookie
  res.cookie('userId', foundUser.id);

  // redirect them somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId from the cookies object
  const userId = req.cookies.userId;

  // do they NOT have a cookie?
  if (!userId) {
    return res.status(401).send('you must be signed in to visit this page');
  }

  // happy path!
  // lookup the user based on their cookie
  const user = users[userId];
  const templateVars = { user };

  // render the protected template
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // pull email and password off of req.body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT send us an email and password
  if (!email || !password) {
    return res.status(400).send('you must provide an email and password to proceed');
  }

  // look for a user with the provided email
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // duplicate detected
      foundUser = user;
    }
  }

  // did we find a user
  if (foundUser) {
    return res.status(400).send('email address is already in use');
  }

  // happy path! the email is unique
  const id = Math.random().toString(36).substring(2, 8); // generate a random 6 char string
  const newUser = {
    id: id,
    email: email,
    password: password,
  };

  // update the users object
  users[id] = newUser;
  console.log(users);

  // set the cookie or redirect to the login page
  // res.cookie('userId', id);

  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
