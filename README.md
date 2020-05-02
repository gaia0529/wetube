# WeTube - Cloning Youtube with Vanilla and NodeJS

## Node Project 시작
```
npm init
``` 
> package.json으로 협력, 공동 프로젝트 
>> npm install


## git 연결
1. git remote add origin [깃주소]
2. git add .
3. git commit -m "수정 이유";
4. git push origin master [처음연결 --force 추가]
```
.gitignore 파일생성 후 제외하고자 하는 파일이름 작성
```


## express framework
> middleware의 한 종류
>> http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크 
<a href="http://expressjs.com/" target="_blank">EXPRESS</a>

```
npm i express --save
```

### 문법 예시
> const express = require('express');
>>  express를 node_modules에서 가져옴

> 서버 생성 후 Route, 서버 요청(GET, POST)


## babel
> 최신의 자바스크립트(ES6)를 예전의 javascript(ES5)로 변환. 
<a href="https://babeljs.io/" target="_blank">BABEL</a>

```
npm i @babel/core --save
npm i @babel/node --save
npm i @babel/preset-env --save
```

>.babelrc 파일 생성 후 설정
>> 예시: {"presets": ["@babel/preset-env"]}


## nodemon
> 자동 재기동 해주는 live server 

> devDependencies(개발자에게 도움이 되는 pakage)로 설치(-D)
>> "nodemon --exec babel-node index.js --delay 2" pakage설정

```
npm i nodemon --save -D
```


## MiddleWare
> User와 마지막 응답사이의 매개 함수
>> 대표적으로 Express, morgan, helmet, cookie-parser, body-parser 등등

```
예시: next 변수 사용 함수로 전달

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};
app.use(betweenHome);
```

### morgan
> logging(어떤일이 일어났는지)에 도움을 주는 middleware
```
npm i morgan --save
```

### helmet
> 보안에 필요한 middleware
```
npm i helmet --save
```

### cookie-parser
> 요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어
>> req.cookies 프로퍼티를 사용
```
npm i cookie-parser --save
```

### body-parser
> form으로 부터 전송된 POST 요청 데이터를 추출할 수 있도록 만들어 주는 미들 웨어(서버가 받게 되므로 맞게 전송해야함)
>> req.body 프로퍼티를 사용

- 문법 예시(서버의 형식이 일반적인 HTML): app.use(bodyParser.urlencoded({ extended: true }))
- 문법 예시(서버의 형식이 json일 경우): app.use(bodyParser().json())
- <a href="https://www.npmjs.com/package/body-parser" target="_blank">예시 등등</a>

```
npm i body-parser --save
```

## Routing


## MVC