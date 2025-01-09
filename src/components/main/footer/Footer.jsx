import insta from "../../../assets/footer/instagram.png"
import face from "../../../assets/footer/facebook.png"
import gmail from "../../../assets/footer/gmail.png"
import phone from "../../../assets/footer/phone.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex flex-col items-center flex-wrap">
        <hr className="w-5/6 h-0.5 text-black bg-black" />
        <div className="flex gap-10 justify-center p-10">
          <a href="https://www.instagram.com/elitar_shin/?igsh=ODN0MzB4MndpMXRj"><img src={insta} alt="" className="w-10 h-10"/></a>
          <a href="https://www.facebook.com/pemzablokbetoncement?mibextid=LQQJ4d"><img src={face} alt="" className="w-10 h-10"/></a>
          <a href="mailto:elitarshin@mail.ru"><img src={gmail} alt="" className="w-10 h-10"/></a>
          <a href="tel:091 400502"><img src={phone} alt="" className="w-10 h-10"/></a>
        </div>
    </div>
  )
}

export default Footer
