import { test } from "./test.js";
console.log(test);
//  注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);
// gsap.to方法有两个参数，第一个是要应用的元素
// 第二个是动画配置
// ​x 等价于 transform: translateX(...)
// duration 动画持续时长
// scrollTrigger 触发的时机，这里".square2"代表当".square2"元素可见时执行上面的动画
gsap.to(".square", {
  x: 700,
  duration: 3,
  scrollTrigger: ".square2",
});
