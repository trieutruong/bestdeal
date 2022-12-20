import classNames from 'classnames/bind';
import React from 'react';
import styles from 'styles/components/Item/Item.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles)

interface Props {
    title: string
    view: string
}

const Item : React.FC<Props> = ({ title, view }) => {
  return (
    <div className={cx('wrapper') + ' l-2-4'}>
        <div className={cx('owl-item')}>
            <Link className={cx('flash-sale__product-item')} href="">
                
            </Link>
        </div>
    </div>
  )
}

export default Item