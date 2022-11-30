import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  link: string;
  icon?: string
  variant?: 'PRIMARY' | 'SECONDARY'
}

export const Button = ({ children, icon, link,variant= 'PRIMARY',...rest }:Props) => {

    return(
        <Link className={variant === 'PRIMARY' ? styles.btn : styles.btn_secondary} {...rest} href={link}>
          {children}
        </Link>
    );
}
