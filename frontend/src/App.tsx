import React, { useEffect, useState } from "react";
import "./App.css";
// import Home from "@/pages/Home";
import Loader from "@/components/common/Loader";
import Home from "./pages/Home";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <Home />}
    </>
  )
}

export default App;
