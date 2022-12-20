import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import classNames from 'classnames/bind';
import Section from '../src/components/section/Section';

const cx = classNames.bind(styles)

export default function Home() {
  return (
    <div className={cx('app__container')}>
        <div className={cx('home__wrap')}>

        </div>
        <Section title="FLASH DEAL" view="XEM TẤT CẢ"></Section>
    </div>
  )
}
