import { basics } from "../../cv.json";
import Image from "../../Image/ImageProfile.jpg";
import "../../StyleCss/Hero.css";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";
import Whatsapp from "../Icons/Whatsapp";
import WorldMap from "../Icons/WorldMap";
import Section from "./Section";

const { name, label, location, profiles, phone, email, page } = basics;
const { city, region } = location;

const SOCIAL_ICONS = {
  GitHub,
  LinkedIn,
  Whatsapp,
};

const printInfo = [email, phone, page].filter(Boolean).join(" • ");

function Hero() {
  return (
    <>
      <Section id="hero" className="hero">
        <div className="container">
          <div className="info">
            <h1 className="nameHero">{name}</h1>
            <h2 className="labelHero">{label}</h2>
            <span>
              <WorldMap />
              {city}, {region}
            </span>
            <footer className="print">{printInfo}</footer>
            <footer className="noPrint">
              {email && (
                <a
                  href={`mailto:${email}`}
                  title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail />
                </a>
              )}

              {phone && (
                <a
                  href={`tel:${phone}`}
                  title={`Llamar por teléfono a ${name} al número ${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone />
                </a>
              )}

              {profiles.map(({ network, url, username }) => {
                const Icon = SOCIAL_ICONS[network];

                return (
                  <a
                    key={network}
                    href={url}
                    title={`Visitar el perfil de ${username} en ${network}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </footer>
          </div>

          <figure>
            <img src={Image} alt={name} title={name} />
          </figure>
        </div>
      </Section>
    </>
  );
}

export default Hero;
