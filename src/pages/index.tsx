import Image from "next/image";
import { Inter } from "next/font/google";
import CustomNavbar from '../components/CustomNavbar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <CustomNavbar/>
  );
}
