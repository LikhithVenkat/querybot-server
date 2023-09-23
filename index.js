const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors'); 
const port = process.env.PORT || 1812;

const app = express();


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/openai', require('./routes/openaiRoutes'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('Server on 1812');
});