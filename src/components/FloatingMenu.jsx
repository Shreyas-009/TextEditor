import React, { useState } from "react";
import { BubbleMenu } from "@tiptap/react";

const FloatingMenu = ({ editor }) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [url, setUrl] = useState("");

  if (!editor) return null;

  const addLink = () => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();

      setUrl("");
      setShowLinkInput(false);
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      addLink();
    }
  };

  return (
    <BubbleMenu
      className="flex items-center space-x-2 bg-white/95 rounded-full px-3 py-1.5 shadow-lg border border-gray-200 relative"
      tippyOptions={{
        duration: 100,
        onHide: () => {
          setShowLinkInput(false);
          setUrl("");
        },
        placement: "top",
      }}
      editor={editor}
    >
      {!showLinkInput ? (
        <>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-700 font-semibold ${
              editor.isActive("bold") ? "bg-gray-100" : ""
            }`}
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-700 italic ${
              editor.isActive("italic") ? "bg-gray-100" : ""
            }`}
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-700 underline ${
              editor.isActive("underline") ? "bg-gray-100" : ""
            }`}
          >
            U
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-700 line-through ${
              editor.isActive("strike") ? "bg-gray-100" : ""
            }`}
          >
            T
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (editor.isActive("link")) {
                removeLink();
              } else {
                setShowLinkInput(true);
              }
            }}
            className={`p-1.5 rounded-full hover:bg-gray-100 text-gray-700 ${
              editor.isActive("link") ? "bg-gray-100 text-blue-600" : ""
            }`}
          >
            🔗
          </button>
          <div className="h-5 w-px bg-gray-200 mx-1" />
          <button
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            onClick={() => {
              editor.chain().focus().unsetAllMarks().run();
              editor.chain().focus().blur().run();
            }}
          >
            ✕
          </button>
        </>
      ) : (
        <div
          className="flex items-center gap-2 rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            placeholder="Enter URL..."
            className="px-3 py-1 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              addLink();
            }}
            className="p-1.5 rounded bg-blue-500 text-white text-sm hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowLinkInput(false);
              setUrl("");
            }}
            className="p-1.5 rounded text-gray-500 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
      )}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/95 after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-t-[6px] after:border-t-gray-200"></div>
    </BubbleMenu>
  );
};

export default FloatingMenu;
