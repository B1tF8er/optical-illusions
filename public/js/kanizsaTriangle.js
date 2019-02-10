import canvas from "./canvas.js";
import point from "./point.js";
import circle from "./circle.js";
import triangle from "./triangle.js";

function kanizsaTriangle() {
  const ktCanvas = new canvas("kanizsa-triangle");

  addCircles(ktCanvas);
  addTriangles(ktCanvas);
}

function addCircles(ktCanvas) {
  const points = [new point(80, 60), new point(220, 60), new point(150, 190)];

  points.forEach(point => {
    let blackCircle = new circle(point);
    blackCircle.radius = 30;
    blackCircle.startAngle = 0;
    blackCircle.endAngle = 2;
    blackCircle.counterClockwise = false;
    ktCanvas.addCircle(blackCircle, {
      fillStyle: "#000",
      strokeStyle: "#000",
      lineWidth: 1
    });
  });
}

function addTriangles(ktCanvas) {
  const triangles = [
    {
      positions: new triangle(
        new point(150, 20),
        new point(75, 150),
        new point(225, 150)
      ),
      style: {
        fillStyle: "#FFF",
        strokeStyle: "#000",
        lineWidth: 3
      }
    },
    {
      positions: new triangle(
        new point(150, 180),
        new point(75, 60),
        new point(225, 60)
      ),
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
