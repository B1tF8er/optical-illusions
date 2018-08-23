let draw = (function drawModule() {
  function drawZollnerEffect() {
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

  function drawCafeWallEffect() {
    let canvas = document.getElementById("cafeWall");
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

  function drawBlinkingDots() {
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

    for (let centerX = 22; centerX <= canvas.width; centerX += 25) {
      for (let centerY = 22; centerY <= canvas.height; centerY += 25) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, endAngle, false);
        context.fillStyle = "#fff";
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = "#000";
        context.stroke();
        context.closePath();
      }
    }
  }

  const opticalIllusions = {
    zollnerEffect: drawZollnerEffect,
    cafeWallEffect: drawCafeWallEffect,
    blinkingDots: drawBlinkingDots
  };

  (function drawThem() {
    for (illusion in opticalIllusions) {
      opticalIllusions[illusion]();
    }
  })();
})();
