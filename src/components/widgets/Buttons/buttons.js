import React from 'react';
import {Link} from 'react-router-dom';

import styles from './buttons.css';

const buttons = (props) => {
    let tempate = null

    switch(props.type){
        case 'loadMore':
            tempate = (
                <div className={styles.blue_btn}
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
        case 'linkTo':
            tempate = (
                <Link to={props.linkTo}
                      className={styles.blue_btn}>
                    {props.cta}
                </Link>
            );
            break;            
        default: 
            tempate = null;            
    }
    return tempate;
}



export default buttons;