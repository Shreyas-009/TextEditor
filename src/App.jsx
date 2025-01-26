import React from "react";
import Routing from "./Routing";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <div className="w-full min-h-screen bg-white text-gray-900">
        <Routing />
      </div>
    </>
  );
};

export default App;
