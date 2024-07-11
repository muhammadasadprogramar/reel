let mainContainer = document.getElementById("main");
let like = document.getElementById("thumb");

mainContainer.addEventListener("dblclick", () => {
  like.style.transform = "scale(1)";
  console.log("Good");

  setTimeout(function () {
    like.style.display = "none";
  }, 1200);
});
