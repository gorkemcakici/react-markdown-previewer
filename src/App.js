import AppTitle from "./components/AppTitle";
import LeftCard from "./components/LeftCard";
import QuestionMark from "./components/QuestionMark";
import RightCard from "./components/RightCard";


function App() {
  return (
    <div className="p-10 flex flex-col gap-y-10">
      <AppTitle />
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10 items-center justify-center">
        <LeftCard />
        <RightCard />
        <QuestionMark />
      </div>
    </div>
  );
}

export default App;
