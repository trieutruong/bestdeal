import styles from 'styles/components/Menu/Menu.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const Menu = () => {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>Tất cả</h4>
            <section className={cx('section')}>
                <div className={cx('parent')}>Trang Điểm</div>
                <div className={cx('child')}>
                    Trang Điểm Mặt
                </div>
                <div className={cx('child')}>
                    Trang Điểm Mắt
                </div> 
            </section>
            <section className={cx('section')}>
                <div className={cx('parent')}>Son Môi</div>
                <div className={cx('child')}>
                    Son thỏi
                </div>
                <div className={cx('child')}>
                    Son Kem
                </div> 
                <div className={cx('child')}>
                    Son Dưỡng
                </div> 
                <div className={cx('child')}>
                    Son Bóng
                </div> 
                <div className={cx('child')}>
                    Mặt Nạ Ngủ Môi
                </div> 
                <div className={cx('child')}>
                    Tẩy Da Chết Môi
                </div> 
            </section>
            <section className={cx('section')}>
                <div className={cx('parent')}>Chăm sóc da</div>
                <div className={cx('child')}>
                    Son thỏi
                </div>
                <div className={cx('child')}>
                    Son Kem
                </div> 
                <div className={cx('child')}>
                    Son Dưỡng
                </div> 
                <div className={cx('child')}>
                    Son Bóng
                </div> 
                <div className={cx('child')}>
                    Mặt Nạ Ngủ Môi
                </div> 
                <div className={cx('child')}>
                    Tẩy Da Chết Môi
                </div> 
            </section>
            <section className={cx('section')}>
                <div className={cx('parent')}>Chăm óc Cơ Thể</div>
                <div className={cx('child')}>
                    Chăm sóc Răng Miệng
                </div>
                <div className={cx('child')}>
                    Dưỡng Thể
                </div> 
                <div className={cx('child')}>
                    Body Mist - Xịt Thơm
                </div> 
                <div className={cx('child')}>
                    Làm sạch
                </div> 
                <div className={cx('child')}>
                    Kem Tay
                </div> 
                <div className={cx('child')}>
                    Lăn Xịt Khử Mùi
                </div> 
                <div className={cx('child')}>
                    Kem Trị Rạn/ Tan Mỡ
                </div> 
            </section>
        </div>
    )
}

export default Menu