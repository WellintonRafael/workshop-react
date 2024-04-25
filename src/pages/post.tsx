import { Link } from "react-router-dom";
import Header from "../components/header";
import Perfil from "../components/perfil";

interface Props {
  image: string;
  name: string;
  description: string;
}

export default function Post(props: Props) {
  return (
    <>
      <div className="bg-[#202024] w-screen h-full">
        <Header />
        <div>
        <Perfil {...props} />
        <p className="text-white m-10">
          Fala galera
          <br />
          Sou João durante o dia. Na parte da noite sou Karina. Adoro me
          divertir e cantar no Karaokê. Minha profissão é fazer programa. Mas
          não é esse programa que você está pensando. Até mesmo porque eu nem
          sei mexer em computador
        </p>
        <hr className="w-4/5 mx-10 " />
        <div className="flex flex-col h-1/2 m-10 justify-center">
          <h1 className="text-white">Deixe seu feedback</h1>
          <div>
            <textarea className="bg-black w-full h-28 rounded-md text-white p-3 m-4"></textarea>
          </div>
        <button className="flex bg-[#00875F] w-44 h-12 rounded-md m-5 items-center justify-center text-white font-medium cursor-pointer">
                <p>Publicar</p>
            </button>
        </div>
        </div>
      </div>
    </>
  );
}
