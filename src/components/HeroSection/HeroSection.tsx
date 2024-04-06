import { useNavigate } from 'react-router-dom'
import bg_video from './Earth_Eclipse_Rotate_Medium.mp4'
import styles from './HeroSection.module.css'

export default function HeroSection (){
    const navigate = useNavigate()
    
    const handleClick = (link:string) => {
        window.location.href = link
    }
    return(
        <>
    <div className={styles.hero_container}>
        <video className={styles.video} src={bg_video} autoPlay loop muted/>
        <div className={styles.hero_text_container}>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
         </div>  
            <div className={styles.btns}>
            <button 
                onClick={()=>navigate('/sign-up')}
                className={styles.hero_button}
                >GET STARTED
            </button>
            <button 
                onClick={()=>handleClick('https://www.youtube.com/watch?v=wnhvanMdx4s')}
                className={styles.hero_buttonTrailer}
                >WATCH TRAILER
            </button>
                </div> 
    </div> 
            </>
    )

}