import './footer.css'

function Footer(){
    return(
        <div className="footer">
        <div className="footer_title">
             <div>Bepul ochiq darsda qatnashing!</div>
             <div>   Bepul darsimizda qatnashib ko’ring, sizga 
                     yoqsa o’quvchimizga aylanishingiz mumkin!
             </div>
        </div>
        <div className="form_users">
              <input type="text" className='form' placeholder='Ism sharifingiz' />
              <input type="text" className='form' placeholder='Tel raqam' />
              <select className='form' >
                 <option value="fronted developer">fronted developer</option>
                 <option value="Backend developer">Backend developer</option>
                 <option value="Full stack developer">Full stack developer</option>
                 <option value="fronted developer">fronted developer</option>
                 <option value="Full stack developer">Full stack developer</option>
                 <option value="Backend developer">Backend developer</option>
                 <option value="SMM">SMM</option>
              </select>
              <button className='btn btn_add' type={"button"}>Darsimizga yozilish !</button>
        </div>
     </div>
    )
}
export default Footer;