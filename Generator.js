$w.onReady(function () {
  let qrCode = null;

  // Dynamic QR Generator
  export function generaQR() {
    const codice = $w('#codiceInput').value; // Imput Code

    // Clean old QR
    const container = document.getElementById("qrContainer");
    container.innerHTML = "";

    qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: "canvas",
      data: codice,
      image: "insert_logo_url", // Logo 
      dotsOptions: {
        color: "#000000",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
      }
    });

    qrCode.append(container);
  }
});
