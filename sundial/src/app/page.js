import DynamicIsland from "./conponents/chat/ChatMain";
import MainHeader from "./conponents/header/MainBar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <MainHeader />

      <div className="flex-grow">{/* Main content goes here */}</div>

      <DynamicIsland className="h-14" />
    </div>
  );
}
