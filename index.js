//backend start 부분
const express = require('express');
const app = express();
const port = 3000;

const { User } = require("./models/User");

const bodyParser = require('body-parser');

//application/x-www-form-urlencoded - 형태로 된 데이터를 분석하기 위함
app.use(bodyParser.urlencoded({extended:true}));

//application/json - 형태로 된 데이터를 분석하기 위함
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mslee:1234@practice0.opwae8e.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // usUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false 이제 디폴트값
}).then(() => { console.log('MongoDB Connected...')})
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('sssssssssssssssssssssss'));//이걸 라우터라고 하나봄

app.post('/register', async (req, res) => {

    //회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베스에 넣어준다.

    const user = new User(req.body);

    //mongoDB method인데 7버전 넘어오면서 save() 콜백함수가 사라져 await / async로 적어야한다고 함
    // user.save((err, userInfo) => {
    //     if(err) return res.json({ success: false, err});

    //     return res.status(200).json({
    //         success: true
    //     });
    // });

    const result = await user.save().then(() => {
        res.status(200).json({
            success: true
        }).catch((err) => {
            res.json({success: false, err});
        });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));