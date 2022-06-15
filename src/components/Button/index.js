import React from 'react';
import classNames from 'classnames/bind';

import {Link} from 'react-router-dom'
import styles from './Button.module.scss'

const cn = classNames.bind(styles)
const ButtonCpn = ({to,href,children,onclick,...passProp}) => {
    const props = {onclick,...passProp}
    let Comp = 'button'
    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = 'a';
    }
    return (
        <Comp className={cn('btn')}>{children}</Comp>
    );
};

export default ButtonCpn;