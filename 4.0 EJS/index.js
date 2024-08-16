import express from 'express';


const port = 3000;
const app = express();

let day = new Date()
let isWeekday = day.getDay() != 0 && day.getDay() != 6;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {isWeekday: isWeekday});
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});