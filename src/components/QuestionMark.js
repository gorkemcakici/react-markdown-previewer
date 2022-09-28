import { BsQuestionSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setIsShowingHelp } from "../store";
const QuestionMark = () => {

   const dispatch = useDispatch()
  return (
    <div className="absolute top-1 right-1 cursor-pointer  shadow-2xl shadow-red-500">
      <BsQuestionSquare
        size={48}
        onClick={() => dispatch(setIsShowingHelp())}
      />
    </div>
  );
};

export default QuestionMark;
