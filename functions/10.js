function snailWall(wallHeight, dayProgress, nightSlide) {
    function getNetProgress() {
      return dayProgress - nightSlide;
    }
    
    function isReached(current) {
      return current >= wallHeight;
    }
    
    let currentHeight = 0;
    let days = 0;
    
    while (currentHeight < wallHeight) {
      days++;
      currentHeight += dayProgress;
      
      if (isReached(currentHeight)) {
        break;
      }
      
      currentHeight -= nightSlide;
    }
    
    return days;
  }
  
  const result = snailWall(5, 3, 2);
  console.log("Улитка доползет за " + result + " дней");