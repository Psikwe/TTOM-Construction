import Navbar from "../../components/navbar/_component";
import Banner from "../../components/banner/_component";
import AboutUs from "../../components/about-us/_component";
import Projects from "../../components/projects/_component";
import Footer from "../../components/footer/_component";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Projects />
      <Footer />
    </>
  );
};

export default LandingPage;
