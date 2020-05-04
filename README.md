# WeTube - Cloning Youtube with Vanilla and NodeJS

## Node Project 시작

```
npm init
```

> package.json으로 협력, 공동 프로젝트
>
> > npm install

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
>
> > http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크
> > <a href="http://expressjs.com/" target="_blank">EXPRESS</a>

```
npm i express --save
```

### 문법 예시

> const express = require('express');
>
> > express를 node_modules에서 가져옴

> 서버 생성 후 Route, 서버 요청(GET, POST)

## babel

> 최신의 자바스크립트(ES6)를 예전의 javascript(ES5)로 변환.
> <a href="https://babeljs.io/" target="_blank">BABEL</a>

```
npm i @babel/core --save
npm i @babel/node --save
npm i @babel/preset-env --save
```

> .babelrc 파일 생성 후 설정
>
> > 예시: {"presets": ["@babel/preset-env"]}

## nodemon

> 자동 재기동 해주는 live server

> devDependencies(개발자에게 도움이 되는 pakage)로 설치(-D)
>
> > "nodemon --exec babel-node index.js --delay 2" pakage설정

```
npm i nodemon --save -D
```

## MiddleWare

> User와 마지막 응답사이의 매개 함수
>
> > 대표적으로 Express, morgan, helmet, cookie-parser, body-parser 등등

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

> cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
>
> > req.cookies 프로퍼티를 사용 <br />
> > 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용

```
npm i cookie-parser --save
```

### body-parser

> form으로 부터 전송된 POST 요청 데이터를 추출할 수 있도록 만들어 주는 미들 웨어(서버가 받게 되므로 맞게 전송해야함)
>
> > req.body 프로퍼티를 사용 <br />
> > 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어.
> > request정보에서 form이나 json 형태로 된 body를 검사해 아바타의 사진이나 비디오를 업로드 할 때, 제목이나 댓글 같은 정보를 전달할때 사용

- 문법 예시(서버의 형식이 일반적인 HTML): app.use(bodyParser.urlencoded({ extended: true }))
- 문법 예시(서버의 형식이 json일 경우): app.use(bodyParser().json())
- <a href="https://www.npmjs.com/package/body-parser" target="_blank">예시 등등</a>

```
npm i body-parser --save
```

## MVC

> 디자인 패턴중 하나
>
> > M (data) <br />
> > V (how does the data look) <br />
> > C (function that looks for the data)

> ![ex_screenshot](https://media.prod.mdn.mozit.cloud/attachments/2016/12/06/14456/6a97461a03a5329243b994347c47f12b/MVC%20Express.png)

### Controller

> 모델로부터 요청된 데이터를 얻어내거나, 데이터를 나타내는 HTML 페이지를 내고, 이것을 브라우져의 화면으로 사용자에게 전달한다.
>
> > router(URL)와 controller(router의 로직) 분리하기

- 공통 routes 처리 예시:

```
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
```

- globalRouter 예시:

```
import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);

export default globalRouter;
```

- userController controller 예시:

```
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const login = (req, res) => res.send("Search");
```

### View

> 사용자가 controller를 조작하면 controller는 model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당
>
> > pug, ejs, html 등등 <br /> >> <a href="https://pugjs.org/api/getting-started.html" target="_blank">PUG</a>

```
npm i pug --save
```

- <a href="https://expressjs.com/en/5x/api.html#app.set" target="_blank">Express engine설정</a>
- view engine 설정: app.set("view engine", "pug");

#### pug 몇가지 사용법

- 공통 파일에 block content 작성 후 각각의 불러오는 페이지에 extends layouts/main(경로) 작성
- 페이지의 일부분: include ../partials/header(경로)
- Express middleware locals
  - res.locals.siteName = "WeTube"; 미들웨어 작성 예시
  - title | #{siteName} pug 작성 예시
  - <a href="https://expressjs.com/en/5x/api.html#res.locals" target="_blank">Express locals</a>
- 각각 페이지에 변수 넣는법: export const home = (req, res) => res.render("home", { pageTitle: "Home" });
  - 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 객체 정보

#### search Controller 예시

1. form 전송:

```
form(action=routes.search, method="get")
  input(type="text", placeholder="Search by term...",name="term")
```

2. controller:

```
const {
  query: { term: searchingBy }
} = req;
res.render("search", { pageTitle: "Search", searchingBy });
```

3. view:

```
h3 Searching for: #{searchingBy}
```

> 각각 pug생성 후 html 작성(GET, POST) 연결

### Model

> 애플리케이션의 정보, 데이타를 나타냅니다.
>
> > mysql, mongodb, mariadb, Oracle, MS-SQL, SQLite 등등

#### MongoDB

> <a href="https://www.mongodb.com/download-center/community" target="_blank">MongDB 설치</a>
>
> > https://javacpro.tistory.com/64 설치 참고

##### dotenv

> 노출되지 말아야할 정보를 숨길 때 사용하는 환경변수 <br />
> .env 파일 생성 후 작성
>
> > 특정 process를 위한 key-value 형태의 변수 <br />
> > Node.js 기반: process.env.NODE_ENV

```
npm i dotenv --save
```

##### mongoose

> Node.js(javascript)와 MongoDB를 위한 ODM(Object Data Mapping) 라이브러리
>
> > <a href="https://mongoosejs.com/" target="_blank">mongoose</a> <br />
> > 프로그래밍 언어(Javascript) Object와 MongoDB의 데이터를 Mapping하여 호환성을 만들어내고, 간편한 CRUD를 가능하게 합니다. 필요에 따라 확장 및 변경이 가능한 자체 검증(Validation)과 타입 변환(Casting)이 가능하며, Express와 함께 사용하면 MVC 패턴 구현이 용이하다는 장점이 있습니다.

```
npm i mongoose --save
```

> 셋팅

```
import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/we-tube",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
```

> mongoose 문법 예시
>
> > Schema(구조에 관한 편의 기능들을 하나로 모아둔 형태)

```
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Tilte is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment"
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;
```

> multer middleware
>
> > <a href="https://github.com/expressjs/multer/blob/master/doc/README-ko.md" target="_blank">multer</a> <br />
> > Multer는 enctype="multipart/form-data" 폼에서 동작 <br />
> > upload한 파일의 정보를 반환.

```
npm i multer --save
```

##### async / await

> 자바스크립트의 비동기 처리 패턴
>
> > 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완

> 예시

```
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });

  res.redirect(routes.videoDetail(newVideo.id));
};
```

##### Regular Expression

> search 기능:
>
> > <a href="https://regex101.com" target="_blank">Regular Expression</a>

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [x] Edit Video
