import styles from '../styles/Layout.module.css'

const about = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <a href='https://instagram.com/wbertchen' target='_blank' 
                    rel='noreferrer' className={styles.card}>
                        <h3>Instagram</h3>
                        <p>@wbertchen</p>
                    </a>
                    <a className={styles.card}>
                        <h3>Whatsapp</h3>
                        <p>089699599999</p>
                    </a>
                    <a className={styles.card}>
                        <h3>Email</h3>
                        <p>wilbertchen2001@gmail.com</p>
                    </a>
                    <a href='https://www.linkedin.com/in/wilbert-chen-ab456320a/' target='_blank'
                    rel='noreferrer' className={styles.card}>
                        <h3>LinkedIn</h3>
                        <p>Wilbert Chen</p>
                    </a>
                </div>
            </main>
        </div>
     );
}
 
export default about;