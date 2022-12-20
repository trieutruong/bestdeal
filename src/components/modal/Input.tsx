import styles from 'styles/components/Modal/Input.module.scss'
import classNames from 'classnames/bind';
import * as React from 'react';

const cx = classNames.bind(styles)

interface Props {
    value: any
    className?: string
    id: string,
    name: string,
    type: string,
    placeholder: string,
    onChange: (value: any) => void
    onBlur?: (value: any) => void
}

const Input = (({ value, id, type, placeholder, onChange, onBlur } : Props, ref : any) => {
    return (
        <input ref={ref} className={cx('input')} value={value} id={id}  type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/> 
    )
})

export default React.forwardRef(Input)