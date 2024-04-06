// Helper function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Helper function to calculate the area of a circle
  function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
  }
  
  // Main function to compare areas of rectangle and circle
  function compareAreasOfRectangleAndCircle(rectangleLength, rectangleWidth, circleRadius) {
    const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
    const circleArea = calculateCircleArea(circleRadius);
  
    if (rectangleArea > circleArea) {
      return "Rectangle has a larger area than the circle.";
    } else if (rectangleArea < circleArea) {
      return "Circle has a larger area than the rectangle.";
    } else {
      return "Both shapes have the same area.";
    }
  }
  
  // Usage example
  const rectangleLength = 5;
  const rectangleWidth = 4;
  const circleRadius = 3;
  
  const comparisonResult = compareAreasOfRectangleAndCircle(rectangleLength, rectangleWidth, circleRadius);
  console.log(comparisonResult);
  