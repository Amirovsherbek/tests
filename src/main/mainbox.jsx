import './mainbox.css'
import TitleImg from '../image/title_img.png'
function MainBox(){
    return(
        <div className="main_box">
           <div className="main_title">
                <div className="main_title_1">
                    <div >
                        <span>IT SOHASINI</span>
                        <span className='warring'> BIZ BILAN</span>
                       <span> O’RGANING</span>
                    </div>
                </div>
                <div className="main_title_2">
                       <div> Har yakshanba 
                         <span className='warring'>BEPUL</span> OCHIQ  darslar
                       </div>
                       <button type={'button'} className={'btn btn_main'}>
                           Darsga yozilish
                       </button>
                </div>
           </div>
           <div className="main_img">
              <img src={TitleImg} alt="error" />
           </div>
        </div>
    )
}
export default MainBox;