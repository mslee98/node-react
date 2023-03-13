//backend start 부분
const { MongoClient, ServerApiVersion } = require('mongoose');

const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mslee:1234@practice0.opwae8e.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // usUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false 이제 디폴트값
}).then(() => { console.log('MongoDB Connected...')})
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('sssssssssssssssssssssss'));
app.listen(port, () => console.log(`Example app listening on port ${port}`));