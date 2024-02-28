const downloadBtn = document.getElementById("submit");

async function sendGET(options) {
  try {
    const response = await fetch("http://localhost:8000/download", options);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement("a");
    a.href = url;
    a.download = "downloaded_file.txt"; // Specify the filename
    a.click();

    window.URL.revokeObjectURL(url); // Release the object URL
    console.log("File download complete");
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}

downloadBtn.addEventListener("click", () => {
  console.log("Click");
  const options = {
    method: "GET",
  };
  sendGET(options);
});
