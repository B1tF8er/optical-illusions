import canvas from "./canvas.js";

function kanizsaTriangle() {
  const ktCanvas = new canvas("kanizsa-triangle");

  addCircles(ktCanvas);
  addTriangles(ktCanvas);
}

function addCircles(ktCanvas) {
  const circles = [
    {
      x: 80,
      y: 60
    },
    {
      x: 220,
      y: 60
    },
    {
      x: 150,
      y: 190
    }
  ];

  circles.forEach(circle => {
    ktCanvas.addCircle(
      {
        position: {
          centerX: circle.x,
          centerY: circle.y
        },
        radius: 30,
        startAngle: 0,
        endAngle: 2,
        counterClockwise: false
      },
      {
        fillStyle: "#000",
        strokeStyle: "#000",
        lineWidth: 1
      }
    );
  });
}

function addTriangles(ktCanvas) {
  const triangles = [
    {
      positions: {
        startPosition: {
          x: 150,
          y: 20
        },
        leftPosition: {
          x: 75,
          y: 150
        },
        rightPosition: {
          x: 225,
          y: 150
        }
      },
      style: {
        fillStyle: "#FFF",
        strokeStyle: "#000",
        lineWidth: 5
      }
    },
    {
      positions: {
        startPosition: {
          x: 150,
          y: 180
        },
        leftPosition: {
          x: 75,
          y: 60
        },
        rightPosition: {
          x: 225,
          y: 60
        }
      },
      style: {
        fillStyle: "#FFF",
        strokeStyle: "#FFF",
        lineWidth: 5
      }
    }
  ];

  triangles.forEach(triangle => {
    ktCanvas.addTriangle(triangle.positions, triangle.style);
  });
}

export default kanizsaTriangle;
