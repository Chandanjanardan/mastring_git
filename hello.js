const robot = require('robotjs');

function moveMouse() {
  const screenSize = robot.getScreenSize();
  let x = screenSize.width / 2; // Start at the center of the screen
  let y = screenSize.height / 2;
  let moveStep = 10;

  function move() {
    // Move the mouse in small increments
    robot.moveMouse(x, y);
    x += moveStep;
    y += moveStep;
    console.log(`Moving to: (${x}, ${y})`);
  }

  // Move for 5 seconds, then stop for 5 seconds, and repeat
  let isMoving = true;

  setInterval(() => {
    if (isMoving) {
      console.log("Starting to move the mouse...");
      const moveInterval = setInterval(move, 100); // Move every 100ms for 5 seconds

      // Stop moving after 5 seconds
      setTimeout(() => {
        clearInterval(moveInterval);
        console.log("Stopping mouse movement.");
      }, 5000);
    }
    isMoving = !isMoving; // Toggle between moving and stopping every 5 seconds
  }, 10000); // Repeat every 10 seconds (5 seconds moving + 5 seconds stop)
}

moveMouse();
