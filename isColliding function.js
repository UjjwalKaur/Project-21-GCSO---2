function isColliding(bullet, wall){
    if(wall.x - bullet.x <= bullet.width/2 + wall.width/2){
      return true;
  } else {
    return false;
  }
  }
