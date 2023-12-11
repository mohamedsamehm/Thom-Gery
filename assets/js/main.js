document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

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
  var numericInput = document.getElementById("number-input");

  // Add input event listener
  numericInput.addEventListener("input", function (event) {
    // Get the input value
    var inputValue = event.target.value;

    // Remove non-numeric characters using regex
    var numericValue = inputValue.replace(/[^0-9]/g, "");

    // Set the cleaned numeric value back to the input
    event.target.value = numericValue;
  });
});
