import React, { useState, useRef } from "react";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";
import thumb from "../assets/icons/thumb.svg";
import clap from "../assets/icons/clap.svg";
import hand from "../assets/icons/hand.svg";
import hert from "../assets/icons/hert.svg";

const Preview = ({ content, device, onDeviceChange }) => {
  const deviceClasses = {
    mobile: "max-w-[375px]",
    tablet: "max-w-[768px]",
    desktop: "max-w-full",
  };

  const renderContent = () => {
    if (!content) return "Start typing to see preview...";

    return (
      <div
        className="prose max-w-none [&>p]:!my-0  max-h-[300px] overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className="h-full bg-zinc-50">
      {/* Preview Header */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-zinc-200">
        <h2 className="text-[15px] text-zinc-500 font-bold">Post Preview</h2>

        {/* Device Toggle Buttons */}
        <div className="flex items-center gap-1">
          <span className="text-sm text-zinc-500 mr-2">Devices:</span>

          <button
            onClick={() => onDeviceChange("mobile")}
            className={`p-1.5 rounded-full ${
              device === "mobile"
                ? "bg-blue-100 text-blue-400"
                : "text-zinc-400 hover:bg-zinc-50"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
              <path d="M11 18h2" />
            </svg>
          </button>

          <button
            onClick={() => onDeviceChange("tablet")}
            className={`p-1.5 rounded-full ${
              device === "tablet"
                ? "bg-blue-100 text-blue-400"
                : "text-zinc-400 hover:bg-zinc-50"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          </button>

          <button
            onClick={() => onDeviceChange("desktop")}
            className={`p-1.5 rounded-full ${
              device === "desktop"
                ? "bg-blue-100 text-blue-400"
                : "text-zinc-400 hover:bg-zinc-50"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 bg-zinc-50">
        {/* Copy Text Button */}
        <div className="flex justify-center mb-4">
          <button className="px-4 py-1.5 text-sm font-bold text-zinc-600 bg-white border-2 border-zinc-200 rounded-full hover:bg-zinc-50">
            Copy Text
          </button>
        </div>

        {/* Preview Card */}
        <div
          className={`mx-auto transition-all duration-300 ${deviceClasses[device]}`}
        >
          <div className="border border-zinc-200 rounded-lg p-4 bg-white shadow-sm">
            {/* Author Info */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 mr-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[15px]">User Name</h3>
                <p className="text-sm text-zinc-500">
                  UI/UX Designer | Developer
                </p>
                <div className="flex items-center gap-1 text-zinc-500 text-sm mt-0.5">
                  <span>Now</span>
                  <span>•</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0-11a.5.5 0 01.5.5v4.5H11a.5.5 0 010 1H8a.5.5 0 01-.5-.5V4a.5.5 0 01.5-.5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content with See More */}
            <div className="mb-3">
              <div className="text-[15px] text-zinc-600 relative">
                {renderContent()}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between mb-4">
              {/* Reactions */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className=" rounded-full bg-[#378FE9]  border-2 border-white ">
                    <img src={thumb} alt="Like" className="w-4 h-4" />
                  </div>
                  <div className="rounded-full bg-[#6dae4f] border-2 border-white">
                    <img src={clap} alt="Celebrate" className="w-4 h-4" />
                  </div>
                  <div className="rounded-full bg-[#bba9d1] border-2 border-white">
                    <img src={hand} alt="Support" className="w-4 h-4" />
                  </div>

                  <div className=" rounded-full bg-[#DF704D]  border-2 border-white">
                    <img src={hert} alt="Love" className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-sm text-zinc-500">88</span>
              </div>

              {/* Comments and Reposts */}
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <span>4 comments</span>
                <span>•</span>
                <span>1 repost</span>
              </div>
            </div>

            {/* Post Actions */}
            <div className="grid grid-cols-4 gap-1  pt-4 border-t border-zinc-200">
              <button className="flex items-center justify-center gap-1 px-2 py-2 text-sm text-zinc-600 rounded-md">
                <ThumbsUp className="w-4 h-4" />
                <span className="whitespace-nowrap">Like</span>
              </button>
              <button className="flex items-center justify-center gap-1 px-2 py-2 text-sm text-zinc-600 rounded-md">
                <MessageCircle className="w-4 h-4" />
                <span className="whitespace-nowrap">Comment</span>
              </button>
              <button className="flex items-center justify-center gap-1 px-2 py-2 text-sm text-zinc-600 rounded-md">
                {/* <Share2 className="w-4 h-4" /> */}
                <img
                  src="https://www.studioveld.com.au/dist/images/arrow-brown-right.svg"
                  alt=""
                  className="w-4 h-4"
                />
                <span className="whitespace-nowrap">Share</span>
              </button>
              <button className="flex items-center justify-center gap-1 px-2 py-2 text-sm text-zinc-600 rounded-md">
                <Send className="w-4 h-4" />
                <span className="whitespace-nowrap">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
