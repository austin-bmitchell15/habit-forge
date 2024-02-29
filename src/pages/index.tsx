import Image from "next/image";
import { Inter } from "next/font/google";
import CustomNavbar from '../components/CustomNavbar'

const inter = Inter({ subsets: ["latin"] });
const [selected, setSelected] = useState(1);

export default function Home() {
  return (
    <CustomNavbar selected={selected} onChangeSelected={onChangeSelected}/>
  );
}
