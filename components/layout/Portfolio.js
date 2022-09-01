import Link from "next/link";
import Image from "next/image";
import classes from "./Portfolio.module.css"

const Portfolio = () => {
    return (
        <div className="container">
                <div className={classes.ProtfolioWrapper}>
                    <div className={classes.CurveWrapper}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="curve"
                        src="/images/curve.png"
                    ></Image>

                    </div>
                    <div className={classes.ScrollWrapper}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="scroll"
                        src="/images/scroll.png"
                    ></Image>

                    </div>
                <div className={classes.SpansWrapper}>
                    <span>All</span>
                    <span>Personal</span>
                    <span>Commercial</span>
                </div>
                <div className={classes.PortfolioGrid}>
                    <div className={classes.GridItemOne}>
                        <div className={classes.ImageWrapper}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio1.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>simplicity of living</p>
                            <p>divandivan</p>
                        </div>
                    </div>
                    <div className={classes.GridItemTwo}>
                        <div className={classes.ImageWrapper}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio2.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>enrichment</p>
                            <p>sloun</p>
                        </div>
                    </div>
                    <div className={classes.GridItemThree}>
                        <div className={classes.ImageWrapperBig}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio3.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>becoming you</p>
                            <p>floskula</p>
                        </div>
                    </div>
                    <div className={classes.GridItemFour}>
                        <div className={classes.ImageWrapper}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio4.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>Classic as chanel</p>
                            <p>divandivan</p>
                        </div>
                    </div>
                    <div className={classes.GridItemFive}>
                        <div className={classes.ImageWrapperBig}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio5.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>waking life</p>
                            <p>floskula</p>
                        </div>
                    </div>
                    <div className={classes.GridItemSix}>
                        <div className={classes.ImageWrapperBig}>
                        <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/portfolio6.png"
                    ></Image>
                        </div>
                        <div className={classes.GridItemText}>
                            <p>champagne</p>
                            <p>doingwork</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
    )
}

export default Portfolio;