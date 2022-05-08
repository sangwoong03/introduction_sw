## Review basic

<br>
<br>

[deploy link](https://sangwoong03.github.io/introduction_sw/)  
[velog link](https://velog.io/@sangwoong/WECODE-Project-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)

### 📌 HTML, CSS란 무엇이며 필요한 이유

---

`HTML (Hyper Text Markup Language)`

- 페이지에 제목, 문단, 표, 이미지, 동영상 등을 정의하고 그 구조와 의미를 부여하는 정적 언어
- 웹의 구조를 담당
- **Semantic Tag**

`CSS (Cascading Style Sheets)`

- 마크업 언어가 실제 표시되는 방법을 지정하여 콘텐츠 구조를 꾸며주는 정적 언어
- 웹의 시각적 표현을 담당

  > 웹 페이지를 제작할 때 구조적, 기술적인 부분을 담당하는 언어
  > <br> > <br>

### 📌 HTML, CSS, JavaScript의 관계

---

`JS (Javascript)`

- 콘텐츠를 바꾸고 움직이는 등 동적으로 꾸며주는 역할을 하는 프로그래밍 언어
- 웹의 동적 처리를 담당
- 구조, 시각적 표현도 담당할 수 있지만, 동적 처리에만 집중하도록 할 것.
  <br>
  <br>

### 📌 `.html,` `.css`, `.js`세 종류의 파일을 연결하는 방법

---

```html
  <head>
     <!-- External style sheets  -->
    <link rel="stylesheet" hre="./css/main.css">

    <!-- Internal Style sheets  -->
    <style>
      header {
        width: 100px;
        height: 100px;
      }
      nav {
        display: flex;
      }
    </style>

    <!-- External JS  -->
    <script src="./script/main.js" defer><script>
  </head>
  <body>
    <!-- Inline Style -->
    <div style="width: 100px; height: 100px;">

    <!-- External JS -->
    <script src="./script/main.js" defer><script>

    <!-- Inline JS -->
    <script>
      const div = document.querySelector(".div");
      div.onclick = () => {
        console.log("click!");
      };
    </script>
  </body>
```

> **css 우선 순위**

1. 속성 값 뒤의 `!important` ( e.g. width: 100px; !important)
2. 인라인 스타일 (`Inline Style`), 1000 point
3. `#id` 선택자, 100 point
4. `class` 선택자 & `pseudo 클래스` (e.g. :hover, ::after), 10 point
5. `tag` 선택자 (e.g. div, img), 1 point
   <br>
   <br>

### 📌 script 태그의 위치에 따른 차이점

---

태그 위치 윗부분 확인  
브라우저가 script 파일을 읽고 실행하는 처리 과정  
async와 defer의 차이

### 웹 페이지에서 일어날 수 있는 이벤트의 종류

---

**이벤트 등록 방법**

- `addEventListener()`

```javascript
const button = document.querySelector("button");

// first
button.addEventListener("click", function () {
	code;
});

// second
function btnClick() {
	console.log("click!");
}
button.addEventListener("click", btnClick); // just write name of function

// third, the result is same
button.onclick = () => {
	console.log("click!");
};
```

### 이벤트와 자바스크립트 함수와의 관계
