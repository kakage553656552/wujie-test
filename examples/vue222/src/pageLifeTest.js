// 测试页面加载生命周期，集成测试使用
document.addEventListener("DOMContentLoaded", () => {
  console.log("vue222 document DOMContentLoaded trigger");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("vue222 window DOMContentLoaded trigger");
});

document.onreadystatechange = function () {
  console.log("vue222 document onreadystatechange trigger");
};

document.addEventListener("readystatechange", () => {
  console.log("vue222 document readystatechange trigger");
});

window.onload = () => console.log("vue222 window onload trigger");

window.addEventListener("load", () => {
  console.log("vue222 window load trigger");
});
