var express = require('express');
var axios = require('axios');
var app = express();

//响应头的设置中间件，用于前端的跨域访问
var cors = require('express-cors');
app.use(cors());

//请求对象的数据解析
var bodyParser = require('body-parser');
//处理json格式解析
var jsonParser = bodyParser.json();
app.use(jsonParser);

//热门电影
app.post('/movieOnInfoList', jsonParser, (req, res) => {
  axios.get('https://m.maoyan.com/ajax/movieOnInfoList?token=')
  .then((v) => {
    var movieList = v.data.movieList;
    // console.log(movieList);
    movieList.forEach(movie => {
      movie.img = movie.img.replace('w.h', '128.108');
      movie.sc = movie.sc.toString().length === 1 ? movie.sc + '.0' : movie.sc;
    });
    res.send(v.data.movieList);
  })
});
//电影详情
// https://m.maoyan.com/ajax/detailmovie?movieId=248123
app.post('/movieDetail', jsonParser, (req, res) => {
  let id = req.body.id;
  let url = 'https://m.maoyan.com/ajax/detailmovie?movieId=' + id;
  axios.get(url)
  .then((v) => {
    let movie = v.data.detailMovie;
    movie.img = movie.img.replace('w.h', '148.208');
    movie.sc = movie.sc.toString().length === 1 ? movie.sc + '.0' : movie.sc;
    res.send(JSON.stringify(movie));
  })
});
//最受期待的电影
app.post('/mostExpected', jsonParser, (req, res) => {
  //请求10部电影
  axios.get('https://m.maoyan.com/ajax/mostExpected?ci=57&limit=40&offset=0&token=')
  .then((v) => {
    let data = v.data.coming;
    // data.img = data.img.replace('w.h', '170.230');
    data.forEach((movie) => {
      movie.img = movie.img.replace('w.h', '170.230');
    })
    res.send(JSON.stringify(data));
  })
});
//热门城市
app.post('/hotCitys', jsonParser, (req, res) => {
  let hotCitys = ['上海', '北京', '广州', '深圳', '武汉', '天津', '西安', '南京', '杭州', '成都', '重庆']
  res.send(hotCitys);
});
//即将上映的电影
app.post('/comingList', jsonParser, (req, res) => {
  axios.get('https://m.maoyan.com/ajax/comingList?ci=1&token=&limit=10')
  .then((v) => {
    let data = v.data.coming;
    data.forEach(function (movie) {
      movie.img = movie.img.replace('w.h', '128.108');
      movie.sc = movie.sc.toString().length === 1 ? movie.sc + '.0' : movie.sc;
    })
    res.send(v.data.coming);
  })
});

app.listen(3000);