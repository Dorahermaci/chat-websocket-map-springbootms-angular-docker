var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var positionsRoute = require('./routes/positions');
const { Eureka } = require('eureka-js-client');


var app = express();
app.use(cors());


// Your Eureka client configuration

const client = new Eureka({
  instance: {
    app: 'camping-js-ms', // Replace with your application name
    instanceId: 'camping-js-ms',
    hostName: 'camping-js-ms',
    ipAddr: '172.19.0.6',
    port: {
      $: 3000, // Your Node.js service port
      '@enabled': 'true',
    },
    vipAddress: 'camping-js-ms', // Replace with your application name
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'eureka-server', // Eureka server host
    port: 8761, // Eureka server port
    servicePath: '/eureka/apps/',
  },
});

// Start the Eureka client
client.start((error) => {
  if (!error) {
    console.log('Eureka client started');
  } else {
    console.error('Eureka client could not be started', error);
  }
});

// MongoDB connection setup

mongoose.connect('mongodb://mongodb:27017/votre-base-de-donnees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

// Other middleware and route setup (par défaut)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes setup

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/positions', positionsRoute);

// Start your Node.js application


module.exports = app;
