import StudyFlashCard from "../FlashCards/StudyFlashCard";
import { FaVolumeUp, FaRegLightbulb } from "react-icons/fa";



const StudySlider = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-[400px]">
                    <StudyFlashCard></StudyFlashCard>
                    <div className="absolute flex justify-between gap-10  left-9 right-9 top-16">
                        <FaRegLightbulb className="text-2xl text-white font-bold light" />
                        <FaVolumeUp className="text-2xl text-white volume" />


                    </div>
                    {/* <div className="absolute flex justify-center gap-10  left-5 right-5 -bottom-16">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                  
                </div>
               


            </div>
        </div>
    );
};

export default StudySlider;