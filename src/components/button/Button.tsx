import Link from 'next/link'
import classNames from 'classnames/bind';
import styles from 'styles/components/Button/Button.module.scss'

const cx = classNames.bind(styles);

// console.log(styles);

// function Button({
//     to,
//     href,
//     primary = false,
//     outline = false,
//     rounded = false,
//     text = false,
//     disabled = false,
//     small = false,
//     large = false,
//     children,
//     className,
//     leftIcon,
//     rightIcon,
//     onClick,
//     ...passProps
// }) {
//     let Comp = 'button';
//     const props = {
//         onClick,
//         ...passProps, // là các props còn lại như target="_blank"
//     };

//     if (disabled) {
//         delete props.onClick;
//     }

//     if (to) {
//         props.to = to;
//         Comp = Link;
//     } else if (href) {
//         props.href = href;
//         Comp = 'a';
//     }

//     const classes = cx('wrapper', {
//         [className]: className,
//         primary,
//         outline,
//         text,
//         disabled,
//         rounded,
//         small,
//         large,
//     });

//     return (
//         <Comp className={classes} {...props}>
//             {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
//             <span className={cx('title')}>{children}</span> {/* đây là các icon có thể thay đổi tùy từng button*/}
//             {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
//         </Comp>
//     );
// }

// export default Button;

interface Props{
    className?: any
    to?: string
    href?: string
    children?: any
    text?: string
    primary?: any 
    outline?: any,
    secondary?: any,
    rounded?: any
    small?: any
    large?: any 
    disabled?: any,
    leftIcon?: any,
    rightIcon?:  any,
    type?: string,
    onClick?: (value: any) => void,
    passProps?: string[],
}

const Button: React.FC<Props> = ({
    className,
    to,
    href,
    children,
    text,
    primary = false,
    outline = false,
    secondary = false,
    rounded = false,
    small = false,
    large = false,
    disabled,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp: any = 'button';

    const props: any = {
        to,
        onClick,
        href,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }

    if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof (props[key] === 'function')) {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        secondary,
        rounded,
        text,
        small,
        large,
        disabled,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}


export default Button;
