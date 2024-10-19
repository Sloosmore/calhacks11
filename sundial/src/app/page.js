import DynamicIsland from "./conponents/ChatMain";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex-grow">{/* Main content goes here */}</div>

      <DynamicIsland className="h-14" />
    </div>
  );
}
