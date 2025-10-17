// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the stock photo and background video elements
  const stockPhoto = document.getElementById("stockPhoto");
  const backgroundVideo = document.getElementById("backgroundVideo");

  // Adjust the positioning of the stock photo
  function adjustStockPhotoPosition() {
    stockPhoto.style.position = "absolute";
    stockPhoto.style.width = backgroundVideo.offsetWidth + "px";
    stockPhoto.style.height = backgroundVideo.offsetHeight + "px";
    stockPhoto.style.top = backgroundVideo.offsetTop + "px";
    stockPhoto.style.left = backgroundVideo.offsetLeft + "px";
  }

  // Call the adjustStockPhotoPosition function initially and on window resize
  adjustStockPhotoPosition();
  window.addEventListener("resize", adjustStockPhotoPosition);
});
