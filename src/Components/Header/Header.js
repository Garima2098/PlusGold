import React from 'react';
import { useState } from 'react';
import classes from './Header.module.scss';
import { ReactComponent as Logo } from '../../Assets/HeaderAsset/CompanyLogo.svg';
import Sharktank from './SharkTank';
import { ReactComponent as Sharkleft } from '../../Assets/HeaderAsset/sharkleft.svg';
import { ReactComponent as SharkRight } from '../../Assets/HeaderAsset/sharkright.svg';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    console.log('close');
    setIsVisible(false);
  };
  return (
    <div className={classes['header-container']}>
      <div className={classes['sharttank-header']}>
        {isVisible && <Sharktank onClose={handleClose} />}
      </div>
      <div className={classes['sharktank-header-content']}>
        <div className={classes['logo']}>
          <Logo />
        </div>
        <div className={classes['header-content-left']}>
          <h4 className={classes['header-text']}>Start Saving</h4>
          <div className={classes['sharktank-header-name']}>
            <div className={classes['sharktankleft']}>
              <Sharkleft />
            </div>
            <h4 className={classes['header-text']}>Shark Tank</h4>
            <div className={classes['sharktankright']}>
              <SharkRight />
            </div>
          </div>
          <h4 className={classes['header-text']}>Gold Rush Festival</h4>
          <h4 className={classes['header-text']}>Partner</h4>
          <botton className={classes['download-app']}> Download App</botton>
        </div>
      </div>
    </div>
  );
};

export default Header;
