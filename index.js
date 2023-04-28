const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const catagories = require('./data/catagories.json')
const news = require('./data/news.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running');
});

app.get('/catagories', (req, res) =>{
    res.send(catagories);
})

app.get('/news', (req, res) =>{
    res.send(news);
})

app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`)
})





 


// echo "# the-news-dragon-server" >> README.m
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/the-news-dragon-server.git
// git push -u origin main