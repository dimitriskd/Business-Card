import mailLogo from "./assets/envelope-solid.svg"
import linkedin from "./assets/linkedin-brands.svg"
import userData from "./details.js"
console.log(userData);

export default function Info() {
    return (
        <section className="info">
            <img className="info--photo" src={userData.headshot} alt="headshot" />

            <h1>{userData.name}</h1>
            <h2>{userData.title}</h2>
            <p><a href={userData.site}>{userData.site}</a></p>

            <div className="info--links">
                <a className="info--links--btn info--link--mail" href={userData.email}>
                    <img className="info--link--icon" src={mailLogo} alt="" />
                    <span>Email</span>
                </a>
                <a className="info--links--btn info--link--linkedin" href={userData.linkedin}>
                    <img className="info--link--icon" src={linkedin} alt="" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}