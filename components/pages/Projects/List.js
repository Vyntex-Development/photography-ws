import Link from "next/link"
import Image from "next/image";
import classes from "./List.module.css"
const List = () => {

    return (
        <div className="container">
            <div className={classes.ListWrapper}>
                <div className={classes.TitleLinksWrapper}>
                    <h2 className={`${classes.ProjectHeading} h2`}>Projects</h2>
                    <div className={classes.SpansWrapper}>
                        <span>All</span>
                        <span>Personal</span>
                        <span>Commercial</span>
                    </div>

                </div>
                <div className={classes.List}>
                    <div className={classes.ImageWrapper}>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt="projects"
                            src="/images/projects.png"
                        ></Image>
                    </div>
                    <div className={classes.FirstLine}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.Line}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.Line}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.Line}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.Line}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.Line}></div>
                    <div className={classes.LinksDotWrapper}>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Simplicity of Living</span>
                                <span>2021</span></a>
                        </Link>
                            
                            
                        </div>
                        <span className={classes.SpanBlock}></span>
                    </div>
                    <div className={classes.LastLine}></div>
                </div>
            </div>
        </div>
    )
}

export default List;