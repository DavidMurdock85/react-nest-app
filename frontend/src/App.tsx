import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MessageComponent from "./components/main/MessageComponent";
import ResponseComponent from "./components/main/ResponseComponent";

function App() {
  return (
    <div className="min-h-screen flex-col justify-center bg-gray-100">
      <Header />

      <div className=" flex items-center justify-center bg-gray-100 p-5">
        <ResponseComponent />
      </div>

      <div className=" flex items-center justify-center bg-gray-100 p-5">
        <MessageComponent />
      </div>

      <Footer />
    </div>
  );
}

export default App;
