import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Suhrid_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Particle Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particle />
      </div>

      {/* Main Content */}
      <Container
        fluid
        className="resume-section d-flex flex-column align-items-center justify-content-center"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Row className="justify-content-center mb-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="justify-content-center">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading="Loading PDF..."
            onLoadError={console.error}
          >
            <Page
              pageNumber={1}
              scale={width > 992 ? 1.5 : width > 768 ? 1.1 : 0.8}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
