function zollner() {
  let canvas = document.getElementById("zollner");
  let context = canvas.getContext("2d");
  let iterationControl = 1;

  context.beginPath();
  context.lineWidth = 3;

  const initialX = 0;
  const initialY = 50;
  const height = 600;
  const width = 350;

  for (let i = -300; i < canvas.height; i += 50) {
    context.moveTo(initialX, initialY + i);
    context.lineTo(height, width + i);

    let isModuloOfTwo = iterationControl % 2 === 0;
    let iterations = isModuloOfTwo ? 0 : -150;

    for (let j = i, k = iterations; j < canvas.width; j += 10, k += 20) {
      let x = isModuloOfTwo ? 10 + k : 40 + k;
      let y = isModuloOfTwo ? 40 + j : 10 + j;
      let lineHeight = isModuloOfTwo ? 10 + k : 100 + k;
      let lineWidth = isModuloOfTwo ? 70 + j : 10 + j;

      context.moveTo(x, y);
      context.lineTo(lineHeight, lineWidth);
    }

    iterationControl++;
  }

  context.stroke();
  context.closePath();
}

export default zollner;
