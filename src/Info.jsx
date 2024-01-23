import headshot from "./assets/dkytr.png"
import mailLogo from "./assets/envelope-solid.svg"
import linkedin from "./assets/linkedin-brands.svg"

export default function Info() {
    return (
        <section className="info">
            <img className="info--photo" src={headshot} alt="headshot" />

            <h1>Dimitris Kytridis</h1>
            <h2>Frontend Developer</h2>
            <p><a href="https://github.com/dimitriskd">dimitris-kytr.dev</a></p>

            <div className="info--links">
                <a className="info--links--btn info--link--mail" href="">
                    <img className="info--link--icon" src={mailLogo} alt="" />
                    <span>Email</span>
                </a>
                <a className="info--links--btn info--link--linkedin" href="">
                    <img className="info--link--icon" src={linkedin} alt="" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}