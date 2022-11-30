import Link from 'next/link'
import styles from './styles.module.scss'
import { YoutubeLogo, InstagramLogo, FacebookLogo, TwitterLogo } from 'phosphor-react'
import Logo from '../../assets/Logo'

interface Props {
  ref?: React.Ref<HTMLDivElement>
  menu: {
    title: string
    linkUrl:string
  }[]
}

export const Header = ({ menu,ref}:Props) => {

    return(
        <header className={styles.container}>
          <nav className={styles.container_nav}>
          <div className={styles.container_nav_menu}>
            <Logo  />
            <ul>
              {menu.map((item) => (
                <li key={item.title}>
                  <Link href={item.linkUrl} title={item.title}>
                    {item.title}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          <div className={styles.container_nav_socials}>
            <Link href="/" >
                <FacebookLogo size={24}  />
            </Link>

            <Link href="/" >
              <InstagramLogo size={24} />
            </Link>

            <Link href="/" >
              <YoutubeLogo size={24} />
            </Link>

            <Link href="/" >
              <TwitterLogo size={24} />
            </Link>
          </div>
          <span className={styles.container_nav_mobile}></span>
          </nav>
        </header>
    );
}
