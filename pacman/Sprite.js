function Sprite(x, y, dx, dy, width, height, color) {
	this.x = x;
  	this.y = y;
  	this.dx = dx;
  	this.dy = dy;
  	this.width = width;
  	this.height = height
  	this.color = color

  	let open = false;

 	let frameCnt = 0;

	this.display = function(ctx) {
    	ctx.fillStyle = this.color;
	}
}

export default Sprite;