import rec from '../../images/rec.png'
import compo from '../../images/compo.png'
import { FaPlusCircle } from "react-icons/fa";

const CreateFlashCard = () => {
    return (
        <div className='flex justify-between my-20'>
            <div className='flex gap-5'>
                <div className='border-2 rounded-full px-5 py-6 drop-shadow-2xl shadow-blue-400'>
                <img src={rec} alt="" />
                </div>
                <div>
                    <p className='text-gray-500 mb-2 font-semibold'>Published By</p>
                    <img src={compo} alt="" />
                </div>
            </div>

            <div className='flex gap-4'>
            <FaPlusCircle className='text-5xl ' />
            <h1 className='text-4xl font-semibold'>Create Flashcard</h1>
            </div>
        </div>
    );
};

export default CreateFlashCard;