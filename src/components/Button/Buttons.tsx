import styles from './Buttons.module.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCards } from '../providers/useCards'

export default function Buttons(){
  const {count} = useCards()
  const {countCart} = useCards()

    return (
          <ul className='flex gap-3  justify-center items-center'>
        <li>
        <Link  to='/' className={styles.nav_links} >
            Home
        </Link>
      </li>
      <li>
      <Link to='/services' className={styles.nav_links} >
            Products
        </Link>
      </li>
      <li>
      <Link to='/products' className={styles.nav_links}>
            Services
        </Link>
      </li>
         <li>
         <Link to='/sign-up' className={styles.nav_links_signup} >
            Sign Up
        </Link>
         </li>
         <Link to='/cart' className='cart text-3xl'><FaShoppingCart/><span className='rounded-full w-5 h-5 flex justify-center items-center bg-red-600  absolute top-40 text-lg'>{countCart}</span></Link>
         {count.toFixed(2)}$
        
          </ul>
    )
}