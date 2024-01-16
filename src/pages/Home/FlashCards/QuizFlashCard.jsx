import '../CSS/FLashcard.css'

const QuizFlashCard = () => {
    return (
        <div>
            <div className="maincontainer ">

                <div className="thecard">

                    <div className="thefront">
                        <h1 className='text-white font-bold  text-center text-5xl mb-3'>What is React?</h1>
                        <ol className='text-white space-y-3  text-center text-xl'>



                            <li>a. Library</li>
                            <li>b. Database</li>
                            <li>c. OS</li>
                            <li>d. Language </li>
                        </ol>
                    </div>

                    <div className="theback"><h1 className='text-white font-bold  text-center text-5xl'>a. Library</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuizFlashCard;