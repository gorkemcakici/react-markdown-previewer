
import { useSelector ,useDispatch} from "react-redux";
import { setText } from "../store";
const LeftCard = () => {
    const text = useSelector((state) => state.text)
    const dispatch = useDispatch()
  return (
    <textarea
      className="bg-[#FFDD67] h-[500px] w-full placeholder:text-gray-500 shadow-2xl shadow-slate-900 p-5 resize-none outline-none break-all"
      placeholder="Text here"
      value={text}
      onChange={(e) => dispatch(setText(e.target.value))}
    ></textarea>
  );
};

export default LeftCard;





