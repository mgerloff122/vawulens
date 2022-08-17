import FAQs from '../../components/FAQs.jsx'
import Footer from '../../components/Footer.jsx'
import MainHeader from '../../components/header/MainHeader.jsx'
import Programs from '../../components/programs/Programs'
import Testimonials from '../../components/Testimonials.jsx'
import Values from '../../components/Values.jsx'


const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs />
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}

export default Home