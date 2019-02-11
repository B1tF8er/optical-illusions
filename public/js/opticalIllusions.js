import zollner from "./zollner.js";
import cafeWall from "./cafeWall.js";
import blinkingDots from "./blinkingDots.js";
import kanizsaTriangle from "./kanizsaTriangle.js";
import mullerLyer from "./mullerLyer.js";
import boxAndSphere from "./boxAndSphere.js";

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
