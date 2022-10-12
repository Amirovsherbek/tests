import './afzaliklar.css'
import {FaUserFriends} from"react-icons/fa"
function Afzal(){
    return(
        <div className="afzaliklar">
        <div className="afzaliklar_title">
           <div> Bizning afzalliklarimiz</div>
           <div>Bizning kurslar orqali IT kasblarini tez va oson o’rganing </div>
        </div>
        <div className="afzaliklar_card">
           <div className="icon_box">
              <span><FaUserFriends/></span>
           </div>
           <div className="card_box">
              <div>Do’stlar</div>
              <div>Yangi do’stlar orttirish imkoniyati</div>
           </div>
        </div>
        <div className="afzaliklar_card">
           <div className="icon_box">
              <span><i class="fa-solid fa-user-group"></i></span>
           </div>
           <div className="card_box">
              <div>Do’stlar</div>
              <div>Yangi do’stlar orttirish imkoniyati</div>
           </div>
        </div>
        <div className="afzaliklar_card">
           <div className="icon_box">
              <span><i class="fa-solid fa-user-group"></i></span>
           </div>
           <div className="card_box">
              <div>Do’stlar</div>
              <div>Yangi do’stlar orttirish imkoniyati</div>
           </div>
        </div>
        <div className="afzaliklar_card">
           <div className="icon_box">
              <span><i class="fa-solid fa-user-group"></i></span>
           </div>
           <div className="card_box">
              <div>Do’stlar</div>
              <div>Yangi do’stlar orttirish imkoniyati</div>
           </div>
        </div>
     </div>
    )
}
export default Afzal;