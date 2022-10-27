import { useEffect } from 'react'
import './kurs.css'
function Kurs(){
  useEffect(()=>{
   setInterval(()=>{
     console.log('helloo')
   },3000)
  },[])♠
   return (
         <div className="kurs">
            <div className="kurs_them">
                <h1>Bizning kurslar</h1>
                <div>Bizning kurslar orqali IT kasblarini
                     tez va oson o’rganing 
                </div>
            </div>
            <div className="kurslar">
                <div className="kurs_card">
                  <div className="kurs_card_img">
                     <img src="https://brunoyam.com/storage/post/37/9b9b7f01c880573efaf20d234b1eea57.png" alt="motion dizayn" />
                  </div>
                  <div className="kurs_card_header">
                     <div>Motion dizayn</div>
                  </div>
                  <div className="kurs_card_body">
                      <div>Motion dizayn kursimiz  davomida siz
                       dasturlash mantigʻi, uning algoritmi
                      </div>
                  </div>
                </div> 
                <div className="kurs_card">
                  <div className="kurs_card_img">
                     <img src="https://brunoyam.com/storage/post/37/9b9b7f01c880573efaf20d234b1eea57.png" alt="motion dizayn" />
                  </div>
                  <div className="kurs_card_header">
                     <div>Motion dizayn</div>
                  </div>
                  <div className="kurs_card_body">
                      <div>Motion dizayn kursimiz  davomida siz
                       dasturlash mantigʻi, uning algoritmi
                      </div>
                  </div>
                </div>      
                <div className="kurs_card">
                  <div className="kurs_card_img">
                     <img src="https://brunoyam.com/storage/post/37/9b9b7f01c880573efaf20d234b1eea57.png" alt="motion dizayn" />
                  </div>
                  <div className="kurs_card_header">
                     <div>Motion dizayn</div>
                  </div>
                  <div className="kurs_card_body">
                      <div>Motion dizayn kursimiz  davomida siz
                       dasturlash mantigʻi, uning algoritmi
                      </div>
                  </div>
                </div> 
                <div className="kurs_card">
                  <div className="kurs_card_img">
                     <img src="https://brunoyam.com/storage/post/37/9b9b7f01c880573efaf20d234b1eea57.png" alt="motion dizayn" />
                  </div>
                  <div className="kurs_card_header">
                     <div>Motion dizayn</div>
                  </div>
                  <div className="kurs_card_body">
                      <div>Motion dizayn kursimiz  davomida siz
                       dasturlash mantigʻi, uning algoritmi
                      </div>
                  </div>
                </div>         
            </div>
           
         </div>
    )
}
export default Kurs