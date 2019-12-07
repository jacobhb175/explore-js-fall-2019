import Sprite from "./Sprite.js"
var fruitImage = document.getElementById('fruitImg'); // new Image('images/fruits.png');
ctx.drawImage(
  fruitImage,
  source.x,
  source.y,
  source.width,
  source.height,
  x,
  y,
  destination.width,
  destination.height
);

fruit = new Sprite(source.x, source.y, source.width, source.height)