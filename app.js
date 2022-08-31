// 캔버스 부르기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기 조정
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(10, 30, 100, 200);