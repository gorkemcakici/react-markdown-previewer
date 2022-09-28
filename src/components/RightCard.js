import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
const RightCard = () => {
  const textExample = useSelector((state) => state.textExample);
  const text = useSelector((state) => state.text);
  const isShowingHelp = useSelector((state) => state.isShowingHelp);

//   const processedText = { __html: textExample };
  return (
    <div className="bg-[#FFDD67] h-[500px] w-full shadow-2xl shadow-slate-900 p-5 break-all overflow-auto">
      {isShowingHelp ? (
        <ReactMarkdown children={textExample} />
      ) : (
        <ReactMarkdown children={text} />
      )}
    </div>
  );
};

export default RightCard;
