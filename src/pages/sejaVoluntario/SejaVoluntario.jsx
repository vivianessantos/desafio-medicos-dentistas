import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {
  return (
    <main>
      <section className={S.top}>
        <div className={S.title}>
          <h1>Seja Voluntário</h1>
          <p>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>
        </div>

        <div className={S.cards}>
          <article>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>

          <article>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>

          <article>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>

      <section className={S.formSection}>
        <div className={S.formBox}>
          <h2>Inscrição para Voluntários</h2>

          <div className={S.inputs}>
            <input type="text" placeholder="Seu Nome *" />
            <input type="email" placeholder="Seu Email *" />
          </div>

          <input type="tel" placeholder="Seu Telefone *" />

          <textarea placeholder="Conte-nos porque você quer ser voluntário..." />

          <p>Entraremos em contato para mais informações</p>

          <button>Enviar Inscrição</button>
        </div>
      </section>
    </main>
  );
}