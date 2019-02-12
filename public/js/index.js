import {
  zollner,
  cafeWall,
  blinkingDots,
  kanizsaTriangle,
  mullerLyer,
  boxAndSphere
} from "./optical-illusions/index.js";

class opticalIllusions {
  static display() {
    zollner();
    cafeWall();
    blinkingDots();
    kanizsaTriangle();
    mullerLyer();
    boxAndSphere();
  }
}

opticalIllusions.display();
