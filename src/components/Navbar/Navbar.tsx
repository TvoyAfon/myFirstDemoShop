import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import Buttons from "../Button/Buttons"
import Clock from "./Clock";

export default function Navbar () {
    return (
     <>
     <nav className={styles.navbar}>
        <div className="navbar_help font-thin flex justify-end p-2 gap-3 text-2xl items-center">
            <BsTelephone className="flex justify-end text-2xl text-white"/>
              <span className="text-white">77-00-50 <p className=" text-sm">Узнать о туре прямо сейчас</p> </span>
          <div className="clock text-white">
            <Clock/>
          </div>
        </div>
            <div className="navbar-container ">
            <Link to='/' className='navbar-logo font-thin text-6xl text-white'>TRVL </Link>
                <ul className={styles.nav_menu}>
                 <Buttons/>
                </ul>       
            </div>
     </nav> 
    </>
)
}
    