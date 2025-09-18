const slidesData = {
    "france-slider": ["images/france1.jpg", "images/france2.jpg", "images/france3.jpg"],
    "italy-slider": ["images/italy1.png", "images/italy2.png", "images/italy3.png"]
  };

  // Indeksi aktual për secilin slider
  const indices = { "france-slider": 0, "italy-slider": 0 };

  function showSlide(sliderId, i) {
    const images = slidesData[sliderId];
    if (i < 0) indices[sliderId] = images.length - 1;
    else if (i >= images.length) indices[sliderId] = 0;
    else indices[sliderId] = i;

    const slider = document.getElementById(sliderId);
    const imgTag = slider.querySelector("img");

    imgTag.classList.remove("active");
    setTimeout(() => {
      imgTag.src = images[indices[sliderId]];
      imgTag.classList.add("active");
    }, 200);
  }

  function prev(sliderId) {
    showSlide(sliderId, indices[sliderId] - 1);
  }

  function next(sliderId) {
    showSlide(sliderId, indices[sliderId] + 1);
  }