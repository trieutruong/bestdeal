import classNames from 'classnames/bind';
import React from 'react';
import styles from 'styles/components/Section/Section.module.scss';
import Link from 'next/link';
import Item from '../Item/Item';

const cx = classNames.bind(styles)

interface Props {
    title: string
    view: string
    data: any
}

const Section : React.FC<Props> = ({ title, view, data }) => {

  console.log(data)

  return (
    <div className={cx('bg-white')}>
        <div className={cx('bg-white__header')}>
            <h2 className={cx('title')}><Link className={cx('bg-white__link')} href="">{title}</Link></h2>
            <h2 className={cx('title')}><Link className={cx('bg-white__link')} href="">{view}</Link></h2>
        </div>
        <div className={cx('bg-white__body')}>
            <div className={cx('bg-white-row') + ' row'}>
                <Item />
            </div>
        </div>
    </div>
  )
}

export default Section