function blinkingDots() {
  let canvas = document.getElementById("blinkingDots");
  let context = canvas.getContext("2d");

  const boxSize = 20;

  context.beginPath();

  for (let x = 0; x <= canvas.width; x += 25) {
    for (let y = 0; y <= canvas.height; y += 25) {
      context.fillRect(x, y, boxSize, boxSize);
    }
  }

  context.stroke();
  context.closePath();

  const radius = 5;
  const endAngle = 2 * Math.PI;

  const colors = {
    white: "#fff",
    black: "#000"
  };

  for (let centerX = 22; centerX <= canvas.width; centerX += 25) {
    for (let centerY = 22; centerY <= canvas.height; centerY += 25) {
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, endAngle, false);
      context.fillStyle = colors.white;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = colors.black;
      context.stroke();
      context.closePath();
    }
  }
}

export default blinkingDots;
