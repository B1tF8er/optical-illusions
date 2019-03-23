import {
  zollner,
  cafeWall,
  blinkingDots,
  kanizsaTriangle,
  mullerLyer,
  boxAndSphere,
  ponzo
} from "./optical-illusions/index.js";

class opticalIllusions {
  static display() {
    zollner();
    cafeWall();
    blinkingDots();
    kanizsaTriangle();
    mullerLyer();
    boxAndSphere();
    ponzo();
  }
}

opticalIllusions.display();
