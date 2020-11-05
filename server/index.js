const express = require('express');
const connectDB = require('./config/configdb');

const app = express();
connectDB();

app.use(express.json({extended: true}));

const PORT = process.env.PORT || 4000;
app.use('/api/users', require('./routes/users'));
app.use('/api/authUsers', require('./routes/authUser'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/task'));

app.listen(PORT, () => {
    console.log(`The app is running at this ${PORT}`);
})
