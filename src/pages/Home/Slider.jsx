import TabH from "./TabH";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
    return (
        <div >
            <div className="flex gap-2 my-16">
            <IoHomeOutline className="text-3xl" /> 
            <MdKeyboardArrowRight className="text-3xl" />
            <h1 className="text-xl">Home</h1>
            <MdKeyboardArrowRight className="text-3xl" />
            <h1 className="text-xl">FlashCard</h1>
            <MdKeyboardArrowRight className="text-3xl" />
            <h1 className="text-xl text-blue-800 font-semibold">Relations and Functions</h1>
            </div>
            <h1 className="text-4xl font-bold text-blue-900  my-10">Relations and Functions ( Mathematics )</h1>
            <div className="max-w-4xl mx-auto mt-28">
                <TabH></TabH>
            </div>
            
        </div>
    );
};

export default Slider;