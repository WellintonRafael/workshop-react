interface Props{
    image: string;
    bgImage: string;
    name: string;
    description:string;
}

export default function MainCard(props:Props) {
    return(
        <div className="flex flex-col justify-between w-[256px] h-[294px] bg-[#202024] items-center rounded-md">
            <div className="w-full overflow-clip h-[72px] rounded-t-md">
                <img className=" object-cover -translate-y-14" src={props.bgImage}/>
            </div>
            
            <div className="flex flex-col gap-4 m-8 items-center">
                <img src={props.image} className="h-16 w-16 rounded"/>

                <div className="flex flex-col items-center">
                    <p className="font-medium text-[#E1E1E6]">{props.name}</p>
                    <p className="font-normal text-[#8D8D99]">{props.description}</p>
                </div>
            </div>
        </div>
    );
}