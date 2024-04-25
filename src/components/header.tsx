import { Link } from "react-router-dom";
import jacare from "../assets/jacare.png";

interface Props {}

export default function Header(props: Props) {
  return (
    <div className="flex w-screen h-24 bg-[#202024] justify-center items-center">
      <Link to="/" className="flex justify-center items-center">
        <img src={jacare} className="w-28"></img>
        <h1 className="text-2xl text-gray-400">Jacréds</h1>
      </Link>
    </div>
  );
}
