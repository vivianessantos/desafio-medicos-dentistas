import S from "./footer.module.scss";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <div className={S.boxLogo}>
          <div className={S.logoTitle}>
            <img src={Logo} alt="logo do site, coração verde" />
            <h3>Médicos & Dentistas</h3>
          </div>

          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>contato@medico-dentista.org</p>
          <p>(11) 3000-0000</p>
          <p>São Paulo, Brasil</p>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>

      <span>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</span>
    </footer>
  );
}