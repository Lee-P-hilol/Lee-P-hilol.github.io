$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(900, 625, 200, 20, "purple")
    createPlatform(1200, 500, 35, 35, "orange")
    createPlatform(1300, 400, 100, 25, "yellow")
    createPlatform(400, 500, 300, 20, "red")
    createPlatform(100, 400, 100, 20, "blue")
    



    // TODO 3 - Create Collectables

    createCollectable("database", 1337.5, 350)
    createCollectable("database", 900, 350)
    createCollectable("database", 130, 350)

    
    // TODO 4 - Create Cannons

    createCannon("top", 1425, 750)
    createCannon("left", 300, 1000)
    createCannon("left", 400, 2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
