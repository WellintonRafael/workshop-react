import Card from "../components/card";
import MainCard from "../components/mainCard";

interface Props {}

export default function Home(props: Props) {
  return (
    <>
      <div className="flex row gap-10 justify-center m-6 min-w-[800px]">
        <div className="flex">
          <MainCard
            name="Joana"
            image="https://th.bing.com/th/id/R.0c8a429344cf2a2c782454982b9487de?rik=dRq8xK8xPo5R2Q&pid=ImgRaw&r=0"
            bgImage="https://th.bing.com/th/id/R.cfc5acc60a18d26ca3c23852c0ca2b53?rik=5KMP%2bB5E199HtA&pid=ImgRaw&r=0"
            description="chinese guitarrist"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Card
            name="joao"
            image="https://github.com/joaomoreiraNI.png"
            description="Dev Python FullStack"
          />
          <Card
            name="joao"
            image="https://github.com/joaomoreiraNI.png"
            description="Dev Python FullStack"
          />
          <Card
            name="joao"
            image="https://github.com/joaomoreiraNI.png"
            description="Dev Python FullStack"
          />
        </div>
      </div>
    </>
  );
}
