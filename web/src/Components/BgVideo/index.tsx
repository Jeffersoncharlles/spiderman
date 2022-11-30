import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDListElement> {
  ref: React.Ref<HTMLDivElement>
 }

export const BgVideo = ({ ref}:Props) => {

    return(
      <section className={styles.container}  ref={ref}>
        <video  autoPlay muted loop>
          <source src="/spiderman.mp4" type='video/mp4' />
        </video>
        </section>
    );
}
