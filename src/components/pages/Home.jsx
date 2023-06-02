import styles from './Home.module.css'

function Home(){
    return(
       <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Siscobra-Hub</span></h1>
       </section>
    )
}

export default Home