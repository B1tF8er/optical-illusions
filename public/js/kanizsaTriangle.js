import canvas from "./canvas.js";
import point from "./point.js";
import circle from "./circle.js";
import triangle from "./triangle.js";
import style from "./style.js";
import constants from "./constants.js"

function kanizsaTriangle() {
  const kanizsaTriangleCanvas = new canvas("kanizsa-triangle");

  circles().forEach(c => {
    kanizsaTriangleCanvas.addCircle(c.instance);
    kanizsaTriangleCanvas.addStyle(c.style);
  });
  triangles().forEach(t => {
    kanizsaTriangleCanvas.addTriangle(t.instance);
    kanizsaTriangleCanvas.addStyle(t.style);
  });
}

function circles() {
  return [
    {
      instance: new circle(new point(80, 60), 30, 0, 2, false),
      style: new style(constants.Black, constants.Black, 1)
    },
    {
      instance: new circle(new point(220, 60), 30, 0, 2, false),
      style: new style(constants.Black, constants.Black, 1)
    },
    {
      instance: new circle(new point(150, 190), 30, 0, 2, false),
      style: new style(constants.Black, constants.Black, 1)
    }
  ];
}

function triangles() {
  return [
    {
      instance: new triangle(
        new point(150, 20),
        new point(75, 150),
        new point(225, 150)
      ),
      style: new style(constants.White, constants.Black, 3)
    },
    {
      instance: new triangle(
        new point(150, 180),
        new point(75, 60),
        new point(225, 60)
      ),
      style: new style(constants.White, constants.White, 3)
    }
  ];
}

export default kanizsaTriangle;
