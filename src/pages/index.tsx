import Image from "next/image";
import CustomNavbar from '../components/CustomNavbar'
import { useState } from "react";
import Layout from "../components/Layout"
import Habits from "./habits";

export default function Home() {
  const [selected, setSelected] = useState(1);
  function onChangeSelected(value : number) {
    setSelected(value);
  }

  return (
    <></>
  );
}
