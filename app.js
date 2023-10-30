let box = document.getElementById("box");
let ball = document.getElementById("ball");
let tab = document.getElementById("tab");
let posTab = 0;
box.addEventListener("mousemove", (e) => {
   tab.style.left = e.clientX - 108 + "px";
   posTab = e.clientX;
});

let x = 400,
   y = 100,
   xspeed = 10,
   yspeed = 10;
const ballMove = () => {
   ball.style.left = x + "px";
   ball.style.top = y + "px";

   x += xspeed;
   y += yspeed;

   if (x + 40 == box.clientWidth || x == 0) {
      xspeed = -xspeed;
   }
   if (
      y + 40 == box.clientHeight - 20 ||
      (y == 0 && !(x <= posTab && x >= posTab - 100))
   ) {
      yspeed = -yspeed;
   }
   if (x <= posTab + 100 && x >= posTab && y + 40 == box.clientHeight - 20) {
      xspeed = -xspeed;
      yspeed = +yspeed;
   }
   // if (
   //   (xspeed == 10, yspeed == 10  && x <= posTab && x >= posTab - 100)
   // ) {
   //   yspeed = -yspeed;
   //   xspeed = -xspeed;
   //   console.log(19777777777777777777777777777777777777777777777777);
   // }

   console.log("x", x, "y", y, xspeed, yspeed);
};
// ball()
setInterval(() => {
   ballMove();
}, 30);
