function changeColor(color) {
  const umbrella = document.getElementById("umbrella");
  const loader = document.getElementById("loader");
  const uploadLogo = document.getElementById("upload-logo");
  const logoPreview = document.getElementById("logoPreview");
  const uploadContainer = document.querySelector(".upload-label");
  const uploadText = document.getElementById("upload-text");

  loader.style.display = "block";
  umbrella.style.display = "none";
  logoPreview.style.display = "none";

  uploadLogo.style.opacity = "0.5 ";
  uploadLogo.src = "./Assests/loader_icon.svg";
  uploadLogo.style.width = "18px";
  uploadLogo.style.animation = "spin 1s linear infinite";

  uploadText.style.color = color === "yellow" ? "black" : "white";
  uploadContainer.style.backgroundColor = color;
  setTimeout(() => {
    umbrella.src = `./Assests/umbrella-${color}.png`;

    loader.style.display = "none";
    umbrella.style.display = "block";

    uploadLogo.src = "./Assests/upload_icon.svg";
    uploadLogo.style.opacity = "1";
    uploadLogo.style.width = "24px";
    uploadLogo.style.animation = "none";
    logoPreview.style.display = "block";
  }, 1000);
}

function getColorHue(color) {
  const hues = {
    blue: 240,
    pink: 300,
    yellow: 60,
  };
  return hues[color] || 0;
}

document
  .getElementById("logoUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const uploadLogo = document.getElementById("upload-logo");
    if (file) {
      const reader = new FileReader();

      uploadLogo.src = "./Assests/loader_icon.svg";
      uploadLogo.style.width = "18px";
      uploadLogo.style.animation = "spin 1s linear infinite";

      reader.onload = function (e) {
        document.getElementById("logoPreview").src = e.target.result;
      };

      setTimeout(() => {
        uploadLogo.src = "./Assests/upload_icon.svg";
        uploadLogo.style.width = "24px";
        uploadLogo.style.animation = "none";
      }, 500);

      reader.readAsDataURL(file);
    }
  });
