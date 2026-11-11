//det startar en pixi-animation.
const app = new PIXI.Application();
//ändrar färg på bakgrunden och resizeTo gör att pixibakgrunden anpassar storleken efter webbläsarens storlek.
await app.init({ resizeTo: window, background: "#7fe5ff" });
//lägger till animationen.
document.body.appendChild(app.canvas);

//ritar prickarna som är animationen, och visar detta på canvasen i webbläsaren.
const dots = new PIXI.Graphics();
app.stage.addChild(dots);

//sparar muspekarens position i x och y-led.
const mouse = { x: 0, y: 0 };
window.addEventListener("pointermove", (e) => { //känner av muspekarens förflyttning.
  mouse.x = e.clientX; //hittar positionen i x och y-led.
  mouse.y = e.clientY;
});

app.ticker.add(() => {
  dots.clear(); //tar bort tidigare prickar.

  //skapar två loopar som placerar prickarna i x och y.led med 30 px mellan varje prick.
  for (let x = 0; x < app.screen.width; x += 30) {
    for (let y = 0; y < app.screen.height; y += 30) {

      //räknar ut avståndet mellan muspekaren och varje prick och ritar en cirkel vid varje position.
      const distance = Math.hypot(x - mouse.x, y - mouse.y);
      dots.circle(x, y, Math.max(1, 8 - distance / 30));
    }
  }
  //ändrar färg på prickarna.
  dots.fill("#ce3aff");
});
