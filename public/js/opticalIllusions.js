import zollner from './zollner.js';
import cafeWall from './cafeWall.js';
import blinkingDots from './blinkingDots.js';
import kanizsaTriangle from './kanizsaTriangle.js';

class opticalIllusions {
  static display() {
    zollner();
    cafeWall();
    blinkingDots();
    kanizsaTriangle();
  }
}

opticalIllusions.display();
