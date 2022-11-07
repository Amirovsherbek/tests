import Navbar from "./navbar/Navbar";
import MainBox from "./main/mainbox";
import Kurs from "./kurslar/kurs";
import Afzal from "./afzaliklar/afzaliklar";
import About from "./about/about";
import Footer from "./footer/footer";
import call from '../src/image/call.png'
import telegram from '../src/image/telegram.png'
import './App.css'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
    <div className="container">
       <div className="navbar_row">
             <Navbar/>
        </div>
        <div className="main_box_row">
             <MainBox/>
        </div>
        <div className="kurs_row">
             <Kurs/>
        </div>
        <div className="afzal_row">
             <Afzal/>
        </div>
        <div className="about_row">
             <About/>
        </div>
        <div className="footer_row">
             <Footer/>
        </div>
    
        <div className="contact" >
              <div className="footer_contact">
                 <div className="call_contact">
                     <div className="contact_icon">
                           <img src={call} alt="error" />
                     </div>
                     <div className="contact_link">
                         <div>+998 55 500 37 00</div>
                     </div>
                 </div>
                 <div className="call_contact">
                     <div className="contact_icon">
                           <img src={call} alt="error" />
                     </div>
                     <div className="contact_link">
                         <div>+998 55 500 37 00</div>
                     </div>
                 </div>
                 <div className="call_contact">
                     <div className="contact_icon">
                           <img src={call} alt="error" />
                     </div>
                     <div className="contact_link">
                         <div>+998 55 500 37 00</div>
                     </div>
                 </div>
              </div>
              <span></span>
              <div className="messenger">
                 <div className="author">
                    <div>© 2021 "Registon IT School" MChJ</div>
                </div>
                <div className="messenger_row">
                   <NavLink ><img src={telegram} alt="telegram" /></NavLink>
                   <NavLink ><img src={telegram} alt="telegram" /></NavLink>
                   <NavLink ><img src={telegram} alt="telegram" /></NavLink>
                   <NavLink ><img src={telegram} alt="telegram" /></NavLink>
                </div>
             </div>
        </div>
    </div>
  );
}
export default App;
