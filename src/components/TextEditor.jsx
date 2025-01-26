import React from "react";
import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "../context/EditorContext";
import FloatingMenu from "./FloatingMenu";
import EditorToolbar from "../components/EditorToolbar";

// Update the editor styles
const editorStyles = `
  .ProseMirror {
    min-height: 500px;
    padding: 1rem;
    outline: none;
  }

  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }

  .ProseMirror-focused {
    outline: none;
  }

  /* Remove default margins and add minimal spacing */
  .ProseMirror p {
    margin: 0;
    margin-bottom: 0.25em;
    line-height: 1.5;
  }

  /* Only add spacing between paragraphs */
  .ProseMirror > * + * {
    margin-top: 0.25em;
  }

  /* Keep heading margins */
  .ProseMirror h1 { margin-bottom: 1rem; }
  .ProseMirror h2 { margin-bottom: 0.75rem; }
  .ProseMirror h3 { margin-bottom: 0.5rem; }

  /* Add visible cursor */
  .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
    margin-top: -1px;
    background: #000;
    border-radius: 1px;
  }

  .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }

  /* Style for linked text in editor */
  .ProseMirror a {
    color: #2563eb;
    font-weight: 500;
    cursor: text;
    pointer-events: none;
  }
`;

const TextEditor = () => {
  const { editor } = useEditorContext();

  if (!editor) return null;

  return (
    <div className="flex flex-col h-full">
      <style>{editorStyles}</style>
      {/* toolbar */}
      <EditorToolbar />

      {/* editor */}
      <div
        className="bg-white rounded-lg shadow-sm cursor-text max-h-[495px] overflow-y-auto "
        onClick={() => editor.chain().focus().run()}
      >
        <FloatingMenu editor={editor} />
        <EditorContent editor={editor} />
      </div>
      
      {/* footer */}
      <div className="flex flex-col h-full">
        <div className="relative flex-1 bg-white shadow-sm cursor-text ">
          <div className="">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
              <span className="text-sm text-gray-500">
                Last saved at Oct 4, 2023, 10:34 AM
              </span>
              <span className="text-sm text-gray-500">254 characters</span>
            </div>

            <div className="flex items-center justify-between p-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50">
                Save as Draft
              </button>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-600"
                  >
                    <path d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h16v7zm0-9H4V7a1 1 0 011-1h2v1a1 1 0 002 0V6h6v1a1 1 0 002 0V6h2a1 1 0 011 1v3z" />
                  </svg>
                  Schedule
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-full ">
                  Publish
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="rotate-0"
                  >
                    <path d="M21.426 11.095l-17-8A1 1 0 003.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 001.396 1.147l17-8a1 1 0 000-1.81z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
