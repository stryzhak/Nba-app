import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';
import styles from './footer.css';


const Footer = () => (
        <div className={styles.footer}>
            <Link to="/" className={styles.Logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
            <div className={styles.rigth}>
              @NBA {CURRENT_YEAR} All rights reserved.  
            </div>
        </div>
);

export default Footer;    