interface Props {
  image: string;
  name: string;
  description: string;
}

export default function Perfil(props: Props) {
  return (
    <div className="flex flex-row gap-4 m-8 items-center">
      <img src={props.image} className="h-16 w-16 rounded" />

      <div className="">
        <p className="font-medium text-[#E1E1E6]">{props.name}</p>
        <p className="font-normal text-[#8D8D99]">{props.description}</p>
      </div>
    </div>
  );
}
