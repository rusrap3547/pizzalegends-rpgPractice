(function() {
    console.log("Its Working")
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    });
    overworld.init();
})();