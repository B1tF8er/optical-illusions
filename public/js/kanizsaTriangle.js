import canvas from "./canvas.js";
import point from "./point.js";

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
        position: new point(circle.x, circle.y),
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
        startPosition: new point(150, 20),
        leftPosition: new point(75, 150),
        rightPosition: new point(225, 150)
      },
      style: {
        fillStyle: "#FFF",
        strokeStyle: "#000",
        lineWidth: 5
      }
    },
    {
      positions: {
        startPosition: new point(150, 180),
        leftPosition: new point(75, 60),
        rightPosition: new point(225, 60)
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
