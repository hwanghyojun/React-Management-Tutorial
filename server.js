const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        
            {
            'id':'1',
            'img':'https://placeimg.com/64/64/1',
            'name':'홍길동',
            'gender':'남자',
            'job':'디자이너'
          },
          {
            'id':'2',
            'img':'https://placeimg.com/64/64/2',
            'name':'이순신',
            'gender':'남자',
            'job':'격투가'
          },
          {
            'id':'3',
            'img':'https://placeimg.com/64/64/3',
            'name':'춘향이',
            'gender':'여자',
            'job':'간호사'
          }
          
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));