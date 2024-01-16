import Container from "../../Container/Container";
import CreateFlashCard from "./CreateFlashCard";
import FAQ from "./FAQ";
import Slider from "./Slider";



const Home = () => {
    return (
        <div>
         <Container>
         <Slider></Slider>
         <CreateFlashCard></CreateFlashCard>
          <FAQ></FAQ>
         </Container>
        </div>
    );
};

export default Home;