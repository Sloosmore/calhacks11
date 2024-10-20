import DynamicIsland from "./conponents/chat/ChatMain";
import MainHeader from "./conponents/header/MainBar";
import Block from "./conponents/block/Block";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-full max-w-[800px] max-h-[600px] shadow rounded-xl">
        <MainHeader />

        <div className="flex flex-col items-center flex-grow justify-center"> </div>
        <Block />
        <DynamicIsland className="h-14" />
      </div>
    </div>
  );
}
