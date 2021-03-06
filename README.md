## Review basic

<br>
<br>

[deploy link](https://sangwoong03.github.io/introduction_sw/)  
[velog link](https://velog.io/@sangwoong/WECODE-Project-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)

### ๐ HTML, CSS๋ ๋ฌด์์ด๋ฉฐ ํ์ํ ์ด์ 

---

`HTML (Hyper Text Markup Language)`

- ํ์ด์ง์ ์ ๋ชฉ, ๋ฌธ๋จ, ํ, ์ด๋ฏธ์ง, ๋์์ ๋ฑ์ ์ ์ํ๊ณ  ๊ทธ ๊ตฌ์กฐ์ ์๋ฏธ๋ฅผ ๋ถ์ฌํ๋ ์ ์  ์ธ์ด
- ์น์ ๊ตฌ์กฐ๋ฅผ ๋ด๋น
- **Semantic Tag**

`CSS (Cascading Style Sheets)`

- ๋งํฌ์ ์ธ์ด๊ฐ ์ค์  ํ์๋๋ ๋ฐฉ๋ฒ์ ์ง์ ํ์ฌ ์ฝํ์ธ  ๊ตฌ์กฐ๋ฅผ ๊พธ๋ฉฐ์ฃผ๋ ์ ์  ์ธ์ด
- ์น์ ์๊ฐ์  ํํ์ ๋ด๋น

  > ์น ํ์ด์ง๋ฅผ ์ ์ํ  ๋ ๊ตฌ์กฐ์ , ๊ธฐ์ ์ ์ธ ๋ถ๋ถ์ ๋ด๋นํ๋ ์ธ์ด
  > <br> > <br>

### ๐ HTML, CSS, JavaScript์ ๊ด๊ณ

---

`JS (Javascript)`

- ์ฝํ์ธ ๋ฅผ ๋ฐ๊พธ๊ณ  ์์ง์ด๋ ๋ฑ ๋์ ์ผ๋ก ๊พธ๋ฉฐ์ฃผ๋ ์ญํ ์ ํ๋ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด
- ์น์ ๋์  ์ฒ๋ฆฌ๋ฅผ ๋ด๋น
- ๊ตฌ์กฐ, ์๊ฐ์  ํํ๋ ๋ด๋นํ  ์ ์์ง๋ง, ๋์  ์ฒ๋ฆฌ์๋ง ์ง์คํ๋๋ก ํ  ๊ฒ.
  <br>
  <br>

### ๐ `.html,` `.css`, `.js`์ธ ์ข๋ฅ์ ํ์ผ์ ์ฐ๊ฒฐํ๋ ๋ฐฉ๋ฒ

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

> **css ์ฐ์  ์์**

1. ์์ฑ ๊ฐ ๋ค์ `!important` ( e.g. width: 100px; !important)
2. ์ธ๋ผ์ธ ์คํ์ผ (`Inline Style`), 1000 point
3. `#id` ์ ํ์, 100 point
4. `class` ์ ํ์ & `pseudo ํด๋์ค` (e.g. :hover, ::after), 10 point
5. `tag` ์ ํ์ (e.g. div, img), 1 point
   <br>
   <br>

### ๐ script ํ๊ทธ์ ์์น์ ๋ฐ๋ฅธ ์ฐจ์ด์ 

---

ํ๊ทธ ์์น ์๋ถ๋ถ ํ์ธ  
๋ธ๋ผ์ฐ์ ๊ฐ script ํ์ผ์ ์ฝ๊ณ  ์คํํ๋ ์ฒ๋ฆฌ ๊ณผ์   
async์ defer์ ์ฐจ์ด

### ์น ํ์ด์ง์์ ์ผ์ด๋  ์ ์๋ ์ด๋ฒคํธ์ ์ข๋ฅ

---

**์ด๋ฒคํธ์ ์ข๋ฅ**

- ๊ฐ๋ฐ์์ ๋๋ชฉ ์ค ํ๋๋ `์ผ๋ง๋ ์ ๊ฒ์ํ๋๊ฐ!`๋ ํด๋นํ๋ ๊ฒ ๊ฐ๋ค.
  ์ฐ๋ฆฌ๋ ๋ธ๋ผ์ฐ์ ์์ ๋ฐ์ํ๋ ๋ชจ๋  ์ด๋ฒคํธ๋ฅผ ์ ์ด๋ค๋๊ฑฐ๋ ์ธ์ฐ๊ณ  ๋ค๋ ์๋ ์๋ค.
  ํ๋ก์ ํธ๋ ํ์ฌ์์ ์์ฃผ ์ฌ์ฉ๋๋ ์ด๋ฒคํธ๋ ์์ฐ์ค๋ฝ๊ฒ ์ตํ๊ฒ ๋์ง๋ง, ์ฒ์ ์ ํ๋ ์ด๋ฒคํธ๋ ๊ฒ์ํ  ํ์๊ฐ ์๋ค.

์ด๋ฒคํธ๋ `html ์์`, `document`, ๋๋ `window` ์ด๋ฒคํธ๋ก ๋๋์ด ๋ณผ ์ ์์ ๊ฒ ๊ฐ๋ค.
์ด๋ค html ์์์ ๋ํ ์ด๋ฒคํธ๊ฐ ์คํ๋์ ๋ โ `console.log(e.target)`๋ฅผ ํตํด DOM ๊ฐ์ฒด์ ๋ํด ์ ์ฉ ๊ฐ๋ฅํ `event`๋ฅผ ์ฝ์์์ ํ์ธํ  ์ ์๋ค.
๋ธ๋ผ์ฐ์ ์ ์ด๋ฒคํธ๋ฅผ ํ์ธํ๋ ๋ฐฉ๋ฒ์ผ๋ก๋ โ `console.log(window)` โ ์ดํ window ๊ฐ์ฒด ๋ด์ ๋ค์ํ `event`๋ฅผ ์ฝ์์์ ํ์ธํ  ์ ์๋ค.

**์ด๋ฒคํธ ๋ฑ๋ก ๋ฐฉ๋ฒ/ํจ์์์ ๊ด๊ณ**

`addEventListener("event", callback Function () {} )`

1. ์ฒซ๋ฒ์งธ ๋ฐฉ๋ฒ
   ์ฝ๋ฐฑํจ์ ์๋ฆฌ์ ํจ์ ์ง์  ์์ฑํ๋ ๋ฐฉ๋ฒ์ด ์๋ค.

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
	code;
});
```

2. ๋๋ฒ์งธ ๋ฐฉ๋ฒ
   ํจ์๋ฅผ ์ ์ํ์ฌ ์ฝ๋ฐฑํจ์ ์๋ฆฌ์ ํจ์๋ช๋ง ์์ฑํ๋ ๋ฐฉ๋ฒ์ด ์๋ค.
   ํ๋์ DOM ๊ฐ์ฒด์ ์ฌ๋ฌ๊ฐ์ ์ด๋ฒคํธ๋ฅผ ๋ฑ๋กํ๋ ๊ฒ์ด ๊ฐ๋ฅํ๋ค.

```javascript
// second
function btnClick() {
	console.log("click!");
}
button.addEventListener("click", btnClick); // just write name of function
```

3. ์ธ๋ฒ์งธ ๋ฐฉ๋ฒ
   ์ธ๋ผ์ธ ํธ๋ค๋ฌ ๋ฐฉ๋ฒ์ด ์๋ค.
   ํ๋์ ์ด๋ฒคํธ์ ์ฌ๋ฌ๊ฐ์ ์ด๋ฒคํธ๋ฅผ ๋ฑ๋กํ  ๊ฒฝ์ฐ ๊ฐ์ฅ ๋์ค์ ์์ฑ๋ ์ด๋ฒคํธ๋ง ์ ์ฉ์ด ๋๋ค.
   ๋ฐ๋ผ์ ํ๋์ DOM ๊ฐ์ฒด์ ํ๋์ ์ด๋ฒคํธ๋ง ๋ฑ๋ก์ด ๊ฐ๋ฅํ๋ค.

```javascript
// third, the result is same
// we had better not to use
button.onclick = () => {
	console.log("click!");
};
```
