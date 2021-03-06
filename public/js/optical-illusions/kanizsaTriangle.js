import { canvas, point, circle, triangle, style, constants } from "../canvas/index.js";

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
  const radius = 30;
  const startAngle = 0;
  const endAngle = 2;

  return [
    {
      instance: new circle(new point(80, 60), radius, startAngle, endAngle, constants.Clockwise),
      style: new style(constants.Black, constants.Black, 1)
    },
    {
      instance: new circle(new point(220, 60), radius, startAngle, endAngle,constants.Clockwise),
      style: new style(constants.Black, constants.Black, 1)
    },
    {
      instance: new circle(new point(150, 185), radius, startAngle, endAngle, constants.Clockwise),
      style: new style(constants.Black, constants.Black, 1)
    }
  ];
}

function triangles() {
  return [
    {
      instance: new triangle(new point(150, 20), new point(75, 150), new point(225, 150)),
      style: new style(constants.White, constants.Black, 3)
    },
    {
      instance: new triangle(new point(150, 180), new point(75, 60), new point(225, 60)),
      style: new style(constants.White, constants.White, 3)
    }
  ];
}

export default kanizsaTriangle;
