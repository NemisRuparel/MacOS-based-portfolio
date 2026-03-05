import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import useWindowStore from "#store/window";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [loaded, setLoaded] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const { windows } = useWindowStore();
  const isMaximized = windows.resume?.isMaximized;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoaded(true);
  };

  return (
    <div className="flex flex-col h-full">

      {/* HEADER */}
      <div
        id="window-header"
        className={`
          transition-all duration-200 flex items-center justify-between
          ${isMaximized ? "border-0 rounded-none" : "border rounded-t-xl"}
        `}
      >
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
  href="/Resume.pdf"
  download="Nemis_Ruparel_Resume.pdf"
  className="cursor-pointer"
  title="Download Resume"
>
  <Download className="icon" />
</a>
      </div>

      {/* SCROLLABLE PDF AREA */}
      <div className="resume-scroll relative flex-1 bg-[#1E1E1E] overflow-y-auto flex justify-center">

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-500">
            Loading PDF…
          </div>
        )}

        <div
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Document
            file="/Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={index} className="mb-6 flex justify-center">
                <Page
                  pageNumber={index + 1}
                  width={800}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </div>
            ))}
          </Document>
        </div>

      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;