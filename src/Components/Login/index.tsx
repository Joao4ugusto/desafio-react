import styles from "./Login.module.scss"

export default function Login() {
    return (
        <>
            <h1 className={styles.titulo}>Acesse a plataforma</h1>
            <p className={styles.paragrafo}>Faça login ou registre-se para começar a construir <br /> seus projetos ainda hoje.</p>
            <div>
                <p className={styles.titulo__input}>E-mail</p>
                <input className={styles.input} type="Email" placeholder="Digite seu e-mail" />
            </div>
            <div>
                <div className={styles.senha}>
                    <p className={styles.titulo__input}>Senha</p>
                    <a className={styles.esqueceu} href="#">Esqueceu sua senha?</a>
                </div>
                <input className={styles.input} type="password" placeholder="Digite sua senha" />
            </div>
            <button className={styles.button}>Entrar</button>
            <p className={styles.paragrafo_link}>Ainda não tem uma conta?<a className={styles.esqueceu} href="#">Inscreva-se</a></p>
        </>
    )
}