import Image from "next/image";
import classes from "./Hero.module.css"

const Hero = () => {
    return (
        <div className="container">
            <div className={classes.HeroSection}>
                <div className={classes.HeroWrapper}>
                    
                    <div className={classes.ImageWrapper}>
                    <Image
                    layout="fill"
                    objectFit="contain"
                    alt="hero"
                    src="/images/hero.png"
                ></Image>

                    </div>
                <h1>Alexander Alexadrovic</h1>

                </div>
                <p>At Bay by Dear Criminals is about a daydream that extends and fades away in the night. Its the end of a romantic story. All that is left is the memory of a feeling, a texture, a color.</p>
            </div>
            
           
           
        </div>
        
    )
}

export default Hero;