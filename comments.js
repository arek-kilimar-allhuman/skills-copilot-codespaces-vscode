// create web server
const express = require('express');
const app = express();
app.use(express.json());

// create a comments array
const comments = [
    { username: 'alice', comment: 'I love this