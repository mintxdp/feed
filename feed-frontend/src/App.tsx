import LeftBar from "./components/leftBar";
import ContentBox from "./components/contentBox";
import RightBar from "./components/rightBar";

function App() {

  return (
    <div className="content w-[100%] grid grid-cols-[20%_60%_20%]">
      <LeftBar />
      <ContentBox />
      <RightBar />
    </div>
  )
}

export default App
