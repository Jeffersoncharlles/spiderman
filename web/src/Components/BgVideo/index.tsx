import styles from './styles.module.scss'

export const BgVideo = () => {

    return(
        <section className={styles.container}>
        <video  autoPlay muted loop>
          <source src="/spiderman.mp4" type='video/mp4' />
        </video>
        </section>
    );
}
