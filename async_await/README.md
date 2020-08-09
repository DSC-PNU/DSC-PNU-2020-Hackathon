# async_await

PNU DSC 제 1회 해커톤 종합게임패치 웹어플리케이션

## 팀원

오도원, 문건우, 최정은

## 프로젝트 소개

여러 게임들의 게임패치 내용을 모아서 보여주는 웹 어플리케이션입니다.

## 기술 사용

Front - React.js
Back - Express, Puppeteer, MongoDB

## 폴더 구조

### front

apis: fetch api 함수
components: pages 등에 쓰일 컴포넌트
pages: 각 페이지를 담당하는 컴포넌트
Hooks: 유용한 커스텀 훅
App.jsx: Main Component

### back

functions: 크롤링 관련 함수
models: MongoDB 모델
routes: api 통신을 위한 라우트
app.js: main

## 실행 방법

git clone -> cd front -> npm install -> npm start
cd patch-test -> npm install -> npm start
