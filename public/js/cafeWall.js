function cafeWall() {
  let canvas = document.getElementById("cafe-wall");
  let context = canvas.getContext("2d");
  let iterationControl = 1;

  const rectWidth = 20;
  const rectHeight = 20;
  const x = 0;
  const lineHeight = 300;

  context.beginPath();

  for (let j = 0; j < canvas.width; j += 40) {
    for (let k = 0; k < canvas.height; k += 20) {
      let y = 20 + k;
      let lineWidth = 20 + k;
      let rectX = 5 + j;
      let rectY = 0 + k;
      let isModuloOfThree = iterationControl % 3 === 0;
      let isModuloOfTwo = iterationControl % 2 === 0;

      context.moveTo(x, y);
      context.lineTo(lineHeight, lineWidth);

      if (isModuloOfThree) {
        rectX += 10;
        iterationControl = 1;
      } else if (isModuloOfTwo) {
        rectX += 5;
      }

      context.fillRect(rectX, rectY, rectWidth, rectHeight);

      iterationControl++;
    }

    iterationControl = 1;
  }

  context.stroke();
  context.closePath();
}

export default cafeWall;
