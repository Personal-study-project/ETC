"use client"; // useState 사용을 위해, client component 사용

import { useState } from "react";
// import saveAs from "file-saver";
import QRCode from "react-qr-code";
// import { motion } from "framer-motion";
import QRCodeInput from "../_component/QRCodeInput";
// import Button from "./Button";

const QRGenerator = () => {
  const [qrData, setQrData] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setQrData(value);
    setIsGenerated(false);
  };

  const generateQRCode = () => {
    if (qrData) {
      setIsGenerated(true);
    }
  };

  return (
    <>
      <QRCodeInput value={qrData} onChange={handleInputChange} />
      {/* <Button
        onClick={generateQRCode}
        disabled={qrData === ""}
        title="Generate QR Code"
      /> */}
      {isGenerated && (
        <>
          <div className="border p-2">
            <QRCode value={qrData} />
          </div>
        </>
      )}
    </>
  );
};

export default QRGenerator;
