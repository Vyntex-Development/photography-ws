import classes from "./BlogPage.module.css";
import Image from "next/image";
import Link from "next/link";


const BlogPage = () => {
    return (

    <div className="container">
    <div className={classes.HeroWrapper}>
        <div className={classes.ArrowDotWrapper}>
        <Link passHref={true} href="https://www.google.com/">
            <a>
            <div className={classes.ArrowWrapper}>
                <Image
                    layout="fill"
                    objectFit="cover"
                    alt="blog-arrow"
                    src="/images/blog-arrow.png"
                ></Image>

            </div>
            </a>
        </Link>
           
            <span className={classes.Dot}></span>
        </div>
        
        <h2>Best Camera for Portrait Photography</h2>
        <p>Killer classics behind the scenes Kate Moss does Anna Wintour smile fall fashion hashtag.</p>
        
                <div className={classes.ImageWrapper}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="blog-hero"
                        src="/images/blog-hero.png"
                    ></Image>
                </div>
        
       
    </div>
</div>
    )


};

export default BlogPage;