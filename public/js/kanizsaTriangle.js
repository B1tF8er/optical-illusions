import canvas from "./canvas.js";
import point from "./point.js";
import circle from "./circle.js";
import triangle from "./triangle.js";

function kanizsaTriangle() {
  const ktCanvas = new canvas("kanizsa-triangle");
  const circles = createCircles();
  const triangles = createTriangles();

  circles.forEach(c => ktCanvas.addCircle(c.instance, c.style));
  triangles.forEach(t => ktCanvas.addTriangle(t.instance, t.style));
}

function createCircles() {
  return [
    {
      instance: new circle(new point(80, 60), 30, 0, 2, false),
      style: {
        fillStyle: "#000",
        strokeStyle: "#000",
        lineWidth: 1
      }
    },
    {
      instance: new circle(new point(220, 60), 30, 0, 2, false),
      style: {
        fillStyle: "#000",
        strokeStyle: "#000",
        lineWidth: 1
      }
    },
    {
      instance: new circle(new point(150, 190), 30, 0, 2, false),
      style: {
        fillStyle: "#000",
        strokeStyle: "#000",
        lineWidth: 1
      }
    }
  ];
}

function createTriangles() {
  return [
    {
      instance: new triangle(
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
      instance: new triangle(
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
}

export default kanizsaTriangle;
