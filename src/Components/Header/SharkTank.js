import React from 'react';
import classes from './SharkTank.module.scss';
import { ReactComponent as SharktankSvg } from '../../Assets/HeaderAsset/sharktank.svg';

const Sharktank = ({ onClose }) => {
  return <SharktankSvg onClick={onClose} />;
};

export default Sharktank;
