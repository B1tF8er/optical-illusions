import canvas from "./canvas.js";

function mullerLyer() {
  const mlCanvas = new canvas("muller-lyer");

  leftRectangle(mlCanvas);
  rightRectangle(mlCanvas);
}

function leftRectangle(mlCanvas) {
  mlCanvas.addRectangle({
    position: {
      x: 50,
      y: 40
    },
    width: 80,
    height: 150
  });

  mlCanvas.addLine(
    {
      x: 50,
      y: 60
    },
    {
      x: 90,
      y: 50
    }
  );

  mlCanvas.addLine(
    {
      x: 90,
      y: 50
    },
    {
      x: 130,
      y: 60
    }
  );

  mlCanvas.addLine(
    {
      x: 90,
      y: 50
    },
    {
      x: 90,
      y: 180
    }
  );

  mlCanvas.addLine(
    {
      x: 50,
      y: 170
    },
    {
      x: 90,
      y: 180
    }
  );

  mlCanvas.addLine(
    {
      x: 90,
      y: 180
    },
    {
      x: 130,
      y: 170
    }
  );
}

function rightRectangle(mlCanvas) {
  mlCanvas.addRectangle({
    position: {
      x: 150,
      y: 40
    },
    width: 80,
    height: 150
  });

  mlCanvas.addLine(
    {
      x: 150,
      y: 40
    },
    {
      x: 190,
      y: 50
    }
  );

  mlCanvas.addLine(
    {
      x: 190,
      y: 50
    },
    {
      x: 230,
      y: 40
    }
  );

  mlCanvas.addLine(
    {
      x: 190,
      y: 50
    },
    {
      x: 190,
      y: 180
    }
  );

  mlCanvas.addLine(
    {
      x: 150,
      y: 190
    },
    {
      x: 190,
      y: 180
    }
  );

  mlCanvas.addLine(
    {
      x: 190,
      y: 180
    },
    {
      x: 230,
      y: 190
    }
  );
}

export default mullerLyer;
