import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RightCard = () => {
  const textExample = useSelector((state) => state.textExample);
  const text = useSelector((state) => state.text);
  const isShowingHelp = useSelector((state) => state.isShowingHelp);

  return (
    <div className="bg-[#FFDD67] h-[500px] w-full shadow-2xl shadow-slate-900 p-5 overflow-auto prose prose-sm max-w-none">
      {isShowingHelp ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{textExample}</ReactMarkdown>
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      )}
    </div>
  );
};

export default RightCard;