import React from 'react';
import classes from './Footer.module.scss';
import { ReactComponent as Logo } from '../../Assets/HeaderAsset/CompanyLogo.svg';
import { ReactComponent as Facebook } from '../../Assets/FooterAssets/Facebook.svg';
import { ReactComponent as Insta } from '../../Assets/FooterAssets/Instagram.svg';
import { ReactComponent as Link } from '../../Assets/FooterAssets/Linkedln.svg';
import { ReactComponent as Twitter } from '../../Assets/FooterAssets/Twitter.svg';
import { ReactComponent as You } from '../../Assets/FooterAssets/Youtube.svg';
import { ReactComponent as SharkTank } from '../../Assets/FooterAssets/seenonshark.svg';

const Footer = () => {
  return (
    <div className={classes['footer-conatiner']}>
      <div className={classes['footer-top']}>
        <div className={classes['address']}>
          <Logo />
          <p className={classes['addresss']}>
            B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi School, Nagpur,
            Maharashtra, 440014 Email : founders@getplus.in | Phone :
            +91-9035202565
          </p>
          <div className={classes['website']}>
            <Facebook />
            <Insta />
            <Link />
            <Twitter />
            <You />
          </div>
        </div>

        <div className={classes['footer-data']}>
          <ul className={classes['ull']}>
            <li className={classes['li-header']}>Plus</li>
            <li>About Us</li>
            <li>Partner Jewellars</li>
            <li>Gold Coin</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={classes['footer-data']}>
          <ul className={classes['ull']}>
            <li className={classes['li-header']}>Top Cities</li>
            <li>Bangalore</li>
            <li>Kolkata</li>
            <li>Chennai</li>
            <li>Mumbai</li>
            <li>Delhi</li>
          </ul>
        </div>
      </div>

      <div className={classes['footer-bottom']}>
        <h1 className={classes['header1']}>What is a Gold Savings Scheme?</h1>
        <p className={classes['content']}>
          A gold savings scheme or gold investment scheme is a financial
          instrument that enables individuals to invest in gold systematically
          over a period of time. At Plus Gold, India’s first jewellery savings
          app, we offer various gold schemes to cater to the diverse needs of
          gold investors and buyers with varying budgets.
        </p>
        <p className={classes['content']}>
          These schemes work on the principle of accumulating gold gradually,
          making them accessible to all seeking to invest in gold. PlusGold
          allows investors to choose from different schemes like the golden
          bonanza scheme, wedding saving scheme, anniversary gift scheme, gold
          monthly scheme, and many other gold savings schemes, each tailored to
          suit their preferences and financial goals.
        </p>
        <p className={classes['content']}>
          These schemes often offer flexibility in terms of payment frequencies
          and duration, allowing investors to choose the most suitable plan
          according to their financial capabilities. By choosing in a gold
          savings scheme, individuals can diversify their investment portfolio,
          hedge against inflation, and accumulate gold in a disciplined manner,
          thereby fostering long-term financial security.
        </p>

        <h1 className={classes['header1']}>How Plus Gold Works?</h1>
        <p className={classes['content']}>
          PlusGold is a revolutionary app that makes investing in gold
          hassle-free and rewarding. The app helps Indian households pre-plan
          their jewellery purchase by saving monthly and gaining 10% extra gold.
          It provides a user-friendly platform where investors can start saving
          in gold effortlessly.
        </p>
        <p className={classes['content']}>
          The app operates by offering some of the best gold-saving schemes,
          allowing for easy accessibility to pure gold both in physical and
          digital forms without the hassle of visiting physical stores.
        </p>
        <p className={classes['content']}>
          Users can deposit a fixed amount daily, weekly, or monthly, which is
          then converted into gold and can be redeemed anytime in the form of
          jewellery, gold coins, or cash at our 300+ trusted jewellery partners.
          Additionally, PlusGold offers the advantage of earning an extra 10%
          gold on every deposit, enhancing the value of the savings.
        </p>
        <p className={classes['content']}>
          This innovative approach allows individuals to accumulate gold
          systematically, ensuring they are better prepared for future jewellery
          purchases or financial security.
        </p>
        <p className={classes['content']}>
          By leveraging technology, PlusGold provides a transparent and
          convenient platform for individuals to invest in gold, catering to the
          diverse needs of Indian households. With transparent processes and
          dedicated customer support, we strive to make your investment journey
          seamless.
        </p>
      </div>
      <div>
        <div className={classes['sharktankseen']}>
          <SharkTank />
        </div>
      </div>
    </div>
  );
};

export default Footer;
