/* eslint-disable no-console */
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const createServer = require('./createServer');
// const db = require('./db');

const server = createServer();
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

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, (details) => {
  console.log(`Server is now running on port ${details.port}`);
});
