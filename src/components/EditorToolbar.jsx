import React, { useState } from "react";
import { useEditorContext } from "../context/EditorContext";
import {
  LinkIcon,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Paperclip,
  Copy,
  Image,
  Gauge,
  Forward,
  MinusSquare,
  Grid,
  RefreshCcw,
  AlignLeft,
  Slash,
  Clock,
  Globe2,
  Volume2,
  Timer,
} from "lucide-react";

const EditorToolbar = () => {
  const { editor } = useEditorContext();
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [url, setUrl] = useState("");
  const [showAiDropdown, setShowAiDropdown] = useState(false);

  const aiOptions = [
    { id: "complete", label: "Complete", icon: Forward },
    { id: "shorten", label: "Shorten", icon: MinusSquare },
    { id: "extend", label: "Extend", icon: Grid },
    { id: "rephrase", label: "Rephrase", icon: RefreshCcw },
    { id: "summarize", label: "Summarize", icon: AlignLeft },
    { id: "tldr", label: "tl;dr", icon: Slash },
    { id: "simplify", label: "Simplify", icon: Timer },
    {
      id: "spelling",
      label: "Spelling & Grammar",
      customIcon: (
        <span className="font-semibold text-[15px] text-gray-600">Aa</span>
      ),
    },
    {
      id: "emojify",
      label: "Emojify",
      customIcon: (
        <span className="font-semibold text-[15px] text-gray-600">☺</span>
      ),
    },
    {
      id: "tone",
      label: "Tone of Voice",
      icon: Volume2,
      hasSubmenu: true,
    },
    {
      id: "translate",
      label: "Translate",
      icon: Globe2,
      hasSubmenu: true,
    },
  ];

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
    <div className="border-b border-gray-200">
      {/* Top Row with border */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900">Write Post</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-1.5 text-gray-600 border-2 border-gray-200 rounded-full hover:bg-gray-50">
            <Gauge className="w-4 h-4" />
            <span className="text-sm font-semibold">Check Score</span>
          </button>
          <hr className="h-4 w-px bg-gray-300 mx-2" />
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden">
              {/* Profile image will go here */}
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <ChevronUp className="w-4 h-4 text-gray-400" />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Formatting Tools */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-1">
          {/* Basic Formatting */}
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`p-2 hover:bg-gray-100 rounded ${
              editor?.isActive("bold") ? "bg-gray-100" : ""
            }`}
          >
            <span className="font-bold">B</span>
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`p-2 hover:bg-gray-100 rounded ${
              editor?.isActive("italic") ? "bg-gray-100" : ""
            }`}
          >
            <span className="italic">I</span>
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            className={`p-2 hover:bg-gray-100 rounded ${
              editor?.isActive("strike") ? "bg-gray-100" : ""
            }`}
          >
            <span className="line-through">S</span>
          </button>

          {/* Link Input */}
          {!showLinkInput ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (editor?.isActive("link")) {
                  removeLink();
                } else {
                  setShowLinkInput(true);
                }
              }}
              className={`p-2 hover:bg-gray-100 rounded ${
                editor?.isActive("link") ? "bg-gray-100 text-blue-600" : ""
              }`}
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          ) : (
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                onClick={(e) => e.stopPropagation()}
                placeholder="Enter URL..."
                className="px-2 py-1 border border-gray-200 rounded text-sm w-64 focus:outline-none focus:border-blue-500"
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

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 mx-2" />

          <div className="relative">
            <button
              onClick={() => setShowAiDropdown(!showAiDropdown)}
              className="flex items-center gap-2 p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-100 relative"
            >
              <Sparkles className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-4 flex items-center justify-center rounded-full">
                AI
              </span>
            </button>

            {/* AI Dropdown */}
            {showAiDropdown && (
              <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {aiOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      // Handle AI option click
                      setShowAiDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left flex items-center gap-2"
                  >
                    {option.customIcon ? (
                      option.customIcon
                    ) : (
                      <option.icon className="w-4 h-4 text-gray-600" />
                    )}
                    <span>{option.label}</span>
                    {option.hasSubmenu && (
                      <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side tools - Updated order */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Copy className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Image className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Paperclip className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* AI Dropdown remains same */}
    </div>
  );
};

export default EditorToolbar;
