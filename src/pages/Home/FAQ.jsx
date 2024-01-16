import Container from "../../Container/Container";



const FAQ = () => {
    return (
       <div className="mt-32 mb-40" id="Faq"> 
         <Container>
            <div id="flashCard">
                <h1 className="text-6xl text-left py-14 font-semibold text-blue-800">FAQ</h1>
            </div>
            <div className="space-y-5">
                <div className="collapse w-[900px] collapse-arrow bg-transparent border-2 border-blue-500 px-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Can education flashcards be used for all age groups?
                    </div>
                    <div className="collapse-content">
                        <p  className="text-lg text-black">Yes education flashcards can be tailored to different age groups and learning levels. There are flash cards designed for preschoolers elementary school students high school students and even for college level and adult learners</p>
                    </div>
                </div>
                <div className="collapse w-[900px] collapse-arrow bg-transparent border-2 border-blue-500 px-2"> <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How do education flashcards work?
                    </div>
                    <div className="collapse-content">
                        <p className="text-lg text-black">Education flash cards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly reinforcing their memory and enhancing learning through reputation</p>
                    </div>
                </div>
                <div className="collapse w-[900px] collapse-arrow bg-transparent border-2 border-blue-500 px-2"> <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Can education flashcards be used for test preparation?
                    </div>
                    <div className="collapse-content">
                        <p className="text-lg text-black">Absolutely ! Flashcards are an excellent tool for test preparation allowing students to review key concepts, terms and Facts. They provide a quick and focused way to reinforce knowledge before exams.</p>
                    </div>
                </div>
            </div>
        </Container>
       </div>
    );
};

export default FAQ;