import classes from "./LineList.module.css"
import Link from "next/link";



const LineList = () => {
    return (
        <div className="container">
            <div className={classes.List}>
                <h2>CV</h2>
                <div className={classes.FirstLine}></div>
                
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Communication team manager and official photographer & videographer, Film Festival berlin</span>
                                <span>2015-present</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Assistent production & managment for Mienium Photos exibition</span>
                                <span>2015-2018</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Member, cenzura photo collective</span>
                                <span>2013-2015</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>official ban phtographer</span>
                                <span>2011-2013</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <p className={classes.Load}>load more</p>
                    
            </div>
            <div className={classes.List}>
                <h2>Exibitions</h2>
                <div className={classes.FirstLine}></div>
                
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>conscientious, gallery of new york, new york</span>
                                <span>2020</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>wenting out, Soho, west germany, Berlin</span>
                                <span>2018</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>New times are coming, Beppe Finnesi, milan</span>
                                <span>2015</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <div className={classes.LinksWrapper}>
                        <Link passHref={true} href="https://www.google.com/">
                            <a>
                                <span>Bodilymay, 404 gallery, berlin</span>
                                <span>2014</span></a>
                        </Link>
                            
                            
                        </div>
                        <div className={classes.Line}></div>
                        <p className={classes.Load}>load more</p>
                    
            </div>
        </div>
    )
}

export default LineList;