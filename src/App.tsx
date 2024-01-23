import { useState } from "react";
import "./App.css";
import Home from "./components/pages/home/home";

const Firstnames = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
];
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <Home />;
}

export default App;
