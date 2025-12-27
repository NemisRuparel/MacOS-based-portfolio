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

  // ✅ HOOK USED INSIDE COMPONENT (CORRECT)
  const { windows } = useWindowStore();
  const isMaximized = windows.resume?.isMaximized;

  return (
    <>
      {/* ✅ HEADER WITH DYNAMIC BORDER */}
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
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* ✅ PDF CONTAINER */}
      <div className="relative w-full h-full bg-[#1E1E1E] overflow-hidden flex justify-center">
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
            file="files/resume.pdf"
            onLoadSuccess={() => setLoaded(true)}
          >
            <Page
              pageNumber={1}
              renderTextLayer
              renderAnnotationLayer
              width={800}
            />
          </Document>
        </div>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
