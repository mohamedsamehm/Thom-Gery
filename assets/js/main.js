document.addEventListener("DOMContentLoaded", function () {
  const fileDropArea = document.getElementById("fileDropArea");
  const fileInput = document.getElementById("fileInput");
  const fileNameElement = document.getElementById("fileName");

  fileDropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileDropArea.classList.add("dragover");
  });

  fileDropArea.addEventListener("dragleave", () => {
    fileDropArea.classList.remove("dragover");
  });

  fileDropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    fileDropArea.classList.remove("dragover");
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      fileInput.files = files;
      handleFileUpload(files);
    }
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFileUpload(files);
  });

  function handleFileUpload(files) {
    if (files.length > 0) {
      const fileName = files[0].name;
      fileNameElement.textContent = `File: ${fileName}`;
    }
  }
});
