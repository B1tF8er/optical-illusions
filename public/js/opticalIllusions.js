import zollner from './zollner.js';
import cafeWall from './cafeWall.js';
import blinkingDots from './blinkingDots.js';

class opticalIllusions {
  static display() {
    zollner();
    cafeWall();
    blinkingDots();
  }
}

opticalIllusions.display();
