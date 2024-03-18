// 공홈의 예제

//express로드 , 이를 통해 express모듈을 제어한다.
const express = require("express");
//express()가 application함수를 로드한다. 그것을 app변수에 선언하여 어플리케이션을 만든다.
const app = express();
//포트 지정
const port = 8083;

//middleware이다.
//client가 "/"경로에 get 요청을 보내면
//req는 요청객체, res는 응답객체 이다.
//req = request, res = response
app.get("/", (req, res) => {
  //응답 콜백 함수
  //"Hello World"를 보내 화면에 출력한다.
  res.sendFile(__dirname + "/views/components/header.html")
  res.sendFile(__dirname + "/views/home/home.html")
  res.sendFile(__dirname + "/views/components/footer.html")
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`listening http://localhost:${port}`);
});