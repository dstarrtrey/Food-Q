<<<<<<< HEAD
require('dotenv').config();
=======
/* eslint-disable no-console */
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2
const createServer = require('./createServer');
// const db = require('./db');

const server = createServer();
<<<<<<< HEAD

// TODO Use express middleware to handle cookies with JWT
// TODO Use middleware to populate current user
=======
const app = server.express;
// Express-session deals with frontend validation
app.use(
  session({
    name: 'qid',
    secret: 'asodjsaodijasodijsaodisajodaisjd22222jdjd',
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
    },
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
>>>>>>> fddfa989525de6d245c81b6d27d3e195f92c57d2

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, (details) => {
  console.log(`Server is now running on port ${details.port}`);
});
