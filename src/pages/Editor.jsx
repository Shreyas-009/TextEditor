import React, { useState } from "react";
import { EditorProvider } from "../context/EditorContext";
import Sidebar from "../components/Sidebar";
import TextEditor from "../components/TextEditor";
import Preview from "../components/Preview";

const Editor = () => {
  const [content, setContent] = useState("");
  const [previewDevice, setPreviewDevice] = useState("mobile"); 

  return (
    <EditorProvider onUpdate={setContent}>
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Editor Area */}
        <div className="flex-1 flex">
          <div className="w-[60%] border-r border-gray-200">
            <div className="">
              <TextEditor />
            </div>
          </div>

          {/* Preview Area */}
          <div className="w-[40%]">
            <Preview
              content={content}
              device={previewDevice}
              onDeviceChange={setPreviewDevice}
            />
          </div>
        </div>
      </div>
    </EditorProvider>
  );
};

export default Editor;
