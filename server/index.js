const express = require('express');
const connectDB = require('./config/configdb');

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hi, world');
});

app.listen(PORT, () => {
    console.log(`The app is running at this ${PORT}`);
})