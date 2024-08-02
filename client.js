const path = require("path");
const data = require(path.join(__dirname, "data.json"));
const fs = require("fs"); // Import the fs module
const os = require("os"); // Import the os module

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Return the response as an ArrayBuffer
  return response.arrayBuffer(); // Use arrayBuffer() to handle binary data
};

const main = async () => {
  const pdfArrayBuffer = await postData(
    "http://localhost:11000/getInvoice",
    data,
  );

  // Convert ArrayBuffer to Buffer and save it as a PDF file
  const pdfBuffer = Buffer.from(pdfArrayBuffer); // Convert to Buffer
  const filePath = `${os.homedir()}/Downloads/invoice.pdf`; // Use os.homedir() to get the home directory
  fs.writeFileSync(filePath, pdfBuffer); // Save the PDF to Downloads
  console.log("PDF saved as invoice.pdf");
};

main(); // Call the main function
