import { Link } from "react-router-dom";
import Perfil from "./perfil";

interface Props{
    image: string;
    name: string;
    description:string;
}

export default function Card(props:Props) {
    return(
        <div className="flex flex-row justify-between w-full h-[123px] bg-[#202024] items-center rounded-md">
            <Perfil {...props}/>
            <Link to={`/${props.name.toLocaleLowerCase()}`} className="flex bg-[#00875F] w-44 h-12 rounded-md m-5 items-center justify-center text-white font-medium cursor-pointer">
                <p>Ir para publicação</p>
            </Link>
        </div>
    );
}