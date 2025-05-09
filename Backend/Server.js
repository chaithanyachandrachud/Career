const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const {login,signup} = require('./Controller/authServer');
const { startDatabase, isConnected } = require('./db');
const mongoose = require('mongoose');


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/signup',signup );

app.post('/api/login',login);

app.listen(port, async () => {
    try {
      await startDatabase();
      console.log(`🚀 Server running on port ${port}`);
    } catch (error) {
      console.error('Database connection error:', error);
    }
  });
