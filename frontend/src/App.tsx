import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hello/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <>{message}</>;
}

export default App;
