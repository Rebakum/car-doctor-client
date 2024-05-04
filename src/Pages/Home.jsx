
import About from './About/About';
import Services from './About/Services/Services';
import Bannar from './Bannar'
const Home = () => {
    return (
        <div>
            <h1 className="text-5xl">this is home pages</h1>
          <Bannar></Bannar>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default Home;