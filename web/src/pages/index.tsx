import { GetStaticProps } from 'next'
import styles from './index.module.scss'
import Head from 'next/head'
import { Header } from '../Components/Header'
import {menuHeader} from './../utils/helpers'
import { Button } from '../Components/Button'
import PSLogo from '../assets/ps.svg'
import marvelLogo from '../assets/marvel.svg'
import Image from 'next/image'
import { BgVideo } from '../Components/BgVideo'
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react'


interface IPropsHome {}


export default function Home({ }: IPropsHome) {
  const tilt = useRef(null);


  const options = {
    perspective: 2000,
    scale: 1.05,
    speed:8000
  }
  useEffect(() => {
    VanillaTilt.init(tilt.current as any, options);
  }, [options]);

  return (
    < >
      <Head>
        <title>Spider-Man - Create designer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header menu={menuHeader} />

      <main className={styles.container}>
        <BgVideo />
        <section className={styles.content_1}>

          <div>
            <img src="/spider-man-name-2.png" alt="Spider-man miles Morales logo escrita isso" />
          </div>

          <p>O adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos do seu mentor, Peter Parker,
            como um novo Homem-Aranha. Mas quando uma violenta disputa de forças ameaça destruir seu novo lar,
            Miles precisa reconhecer e assumir o título de Homem-Aranha..
          </p>

          <div className={styles.buttons}>
            <Button link='/' >
              PRE-ORDER NOW
            </Button>
            <Button link='/'  variant='SECONDARY'>
              watch the teaser
            </Button>
          </div>

          <div className={styles.dev}>
            <Image src={PSLogo} alt="logo da PlayStation" />
            <Image src={marvelLogo} alt="logo da marvel" />
          </div>

        </section>
        <section className={styles.content_2}>
          <div ref={tilt}>
              <img src="/spider-man.png" alt="Spider-man personagem com a mao elétrica e jogando a teia" className={styles.spider} />
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </>
  )
}


export const getStaticProps: GetStaticProps = () => {

  return {
    props: {

    },
    revalidate:60 *1 //
  }

}
