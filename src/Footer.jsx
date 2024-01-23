import Twitter from "./assets/twitter-square-brands.svg";
import Facebook from "./assets/facebook-square-brands.svg";
import Instagram from "./assets/instagram-square-brands.svg";
import Github from "./assets/github-square-brands.svg";
import userData from "./details";

export default function Footer(){
    return (
        <section className="footer">
            <div className="footer--links">
                <a href={userData.x}><img className="footer--icon" src={ Twitter } alt="twitter icon" /></a>
                <a href={userData.facebook}><img className="footer--icon" src={ Facebook} alt="facebook icon" /></a>
                <a href={userData.instagram}><img className="footer--icon" src={ Instagram } alt="instagram icon" /></a>
                <a href={userData.github}><img className="footer--icon" src={ Github } alt="github icon" /></a>
            </div>
        </section>
    )
}