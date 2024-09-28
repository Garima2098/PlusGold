import React from 'react';
import classes from './HomePage.module.scss';
import { ReactComponent as Flower } from '../../Assets/HomePageAssets/Vector.svg';
import { ReactComponent as Sona } from '../../Assets/HomePageAssets/sona.svg';
import { ReactComponent as Aug } from '../../Assets/HomePageAssets/Augmount.svg';
import { ReactComponent as Cash } from '../../Assets/HomePageAssets/cashfree.svg';
import { ReactComponent as NPCI } from '../../Assets/HomePageAssets/NPCI.svg';
import { ReactComponent as Downcurve } from '../../Assets/HomePageAssets/downcurve.svg';
import { ReactComponent as Forbes } from '../../Assets/HomePageAssets/forbes.svg';
import { ReactComponent as Enter } from '../../Assets/HomePageAssets/enterpreneur.svg';
import { ReactComponent as YourStory } from '../../Assets/HomePageAssets/yourstory.svg';
import { ReactComponent as IndiaToday } from '../../Assets/HomePageAssets/IndiaToday.svg';
import { ReactComponent as People } from '../../Assets/HomePageAssets/peopleface.svg';
import { ReactComponent as Iphone } from '../../Assets/HomePageAssets/iphone15full.svg';
import { ReactComponent as Graph } from '../../Assets/HomePageAssets/graph.svg';
import { ReactComponent as Leftarrow } from '../../Assets/HomePageAssets/leftarrow.svg';
import { ReactComponent as GoldBrick } from '../../Assets/HomePageAssets/goldbrick.svg';
import { ReactComponent as GoldStar } from '../../Assets/HomePageAssets/stars.svg';
import { ReactComponent as GoldRush } from '../../Assets/HomePageAssets/goldrushfestival.svg';
import { ReactComponent as Silver } from '../../Assets/HomePageAssets/silvertrophy.svg';
import { ReactComponent as GoldTrophie } from '../../Assets/HomePageAssets/goldtrophie.svg';
import { ReactComponent as Card } from '../../Assets/HomePageAssets/card.svg';
import { ReactComponent as Iphonesmall } from '../../Assets/HomePageAssets/ihpnesona.svg';
import { ReactComponent as Play } from '../../Assets/HomePageAssets/play.svg';
import { ReactComponent as App } from '../../Assets/HomePageAssets/appstore.svg';
import { ReactComponent as Hassel } from '../../Assets/HomePageAssets/Hasselfree.svg';
import { ReactComponent as Extra } from '../../Assets/HomePageAssets/extrareward.svg';
import { ReactComponent as Online } from '../../Assets/HomePageAssets/onlinePlatform.svg';

const HomePage = () => {
  return (
    <div className={classes['homepage-container']}>
      <div className={classes['homepage-container1']}>
        <div className={classes['homepage-container1-left']}>
          <div className={classes['homepage-container1-left-top']}>
            <h2 className={classes['container1heading']}>
              Save in <span className={classes['goldheading']}>GOLD</span>
            </h2>
            <h2 className={classes['container1heading']}>with 21 % * Extra</h2>
          </div>
          <div className={classes['homepage-container1-left-middle']}>
            <button className={classes['start-saving']}>
              Start Saving Now
            </button>
            <button className={classes['trust']}>
              Trusted by 3lakh + Indians
            </button>
          </div>
          <div className={classes['homepage-container1-left-bottom']}>
            <h2 className={classes['heading2']}>Powered By:</h2>
            <Aug />
            <Cash />
            <NPCI />
          </div>
        </div>
        <div className={classes['homepage-container1-right']}>
          <div className={classes['homepage-container1-flower']}>
            <Flower className={classes['flower-background']} />
            <Sona className={classes['sona-foreground']} />
          </div>
        </div>
      </div>
      <div className={classes['homepage-container2']}>
        <div className={classes['homepage-container2-top']}>
          <h1 className={classes['homepage-container2-heading']}>
            Featured in
          </h1>
          <h1 className={classes['homepage-container2-heading']}>
            top channels
          </h1>
          <Downcurve />
        </div>
        <div className={classes['featured']}>
          <Forbes />
          <Enter />
          <YourStory />
          <IndiaToday />
        </div>
      </div>
      <div className={classes['homepage-container3']}>
        <div className={classes['homepage-container3-left']}>
          <h1 className={classes['homepage-conatiner3-heading']}>
            Benefits of buying
          </h1>
          <h1 className={classes['homepage-conatiner3-heading']}>
            from Plus Gold
          </h1>
          <div className={classes['homepage-paragraph']}>
            <p className={classes['homepage-conatiner3-paragraph']}>
              Opting for the Plus Gold Savings Scheme is a smart
            </p>
            <p className={classes['homepage-conatiner3-paragraph']}>
              and easy way to accumulate gold
            </p>
            <p className={classes['homepage-conatiner3-paragraph']}>
              Here's why you should choose our scheme
            </p>
          </div>
          <div className={classes['button-container']}>
            <button className={classes['homepage-container3-button']}>
              Start Saving Now
            </button>
            <Leftarrow className={classes['leftarrow-container']} />
          </div>
        </div>
        <div className={classes['homepage-container3-right']}>
          <div className={classes['container3-right-top']}>
            <div>
              <Hassel />
            </div>
            <div>
              <Extra />
            </div>
          </div>
        </div>
      </div>
      <div className={classes['homepage-container4']}>
        <div className={classes['homepage-container4-left']}>
          <h1 className={classes['homepage-conatiner4-header']}>
            How it Works?
          </h1>
          <Downcurve className={classes['downcurve']} />
          <div className={classes['homepage-conatiner4-inside']}>
            <div className={classes['heading1']}>
              <h1 className={classes['container4-heading1']}>
                Buy
                <span className={classes['container4-heading1-gold']}>
                  Gold
                </span>{' '}
                is just 3 clicks
              </h1>
              <h1 className={classes['container4-heading11']}>
                Through our 10 + 1 Savings Scheme
              </h1>
            </div>
            <div className={classes['heading2']}>
              <h1 className={classes['container4-heading2']}>
                Reedem as Jewellary, Coin or Cash
              </h1>
              <h1 className={classes['container4-heading21']}>
                Explore our easy and flexible redemption options
              </h1>
            </div>
            <div className={classes['heading3']}>
              <h1 className={classes['container4-heading3']}>
                Participate & win extra GOLD
              </h1>
              <h1 className={classes['container4-heading31']}>
                Win big in our Gold Rush Festival
              </h1>
            </div>
          </div>
        </div>
        <div className={classes['homepage-container4-right']}>
          <Iphone />
        </div>
      </div>
      <div className={classes['homepage-container5']}>
        <div className={classes['homepage-container5-left']}>
          <h1 className={classes['conatiner5-heading1']}>
            Why{' '}
            <span className={classes['conatiner5-heading1-gold']}>Gold</span> is
            the
          </h1>
          <h2 className={classes['conatiner5-heading2']}>
            safest asset to invest ?
          </h2>
          <h2 className={classes['conatiner5-heading3']}>
            What the statistics reveal:
          </h2>
          <div className={classes['conatiner5-below']}>
            <div>
              <h3 className={classes['conatiner5-below-heading4']}>
                Gold Reserves
              </h3>
              <h2 className={classes['conatiner5-below-heading5']}>
                700 tonnes
              </h2>
            </div>
            <div>
              <h3 className={classes['conatiner5-below-heading4']}>
                Gold Imports (2023)
              </h3>
              <h2 className={classes['conatiner5-below-heading5']}>
                $45.54 billion
              </h2>
            </div>
            <div>
              <h3 className={classes['conatiner5-below-heading4']}>
                Gold Consumption
              </h3>
              <h2 className={classes['conatiner5-below-heading5']}>
                25% of world
              </h2>
            </div>
          </div>
          <button className={classes['container5-button']}>
            Start Saving Now
          </button>
        </div>
        <div className={classes['homepage-container5-right']}>
          <div className={classes['homepage-container4-people']}>
            <People />
          </div>
          <div className={classes['homepage-conatiner5-left-below']}>
            <h1 className={classes['homepage-container5-left-heading1']}>
              We Indians love{' '}
              <span
                className={classes['homepage-container5-left-heading1-gold']}
              >
                Gold
              </span>{' '}
              <span className={classes['homepage-container5-left-heart']}>
                ♥️
              </span>
            </h1>
            <h1 className={classes['homepage-container5-left-heading1']}>
              3Lakh+ Indians prefer{' '}
            </h1>
            <h1 className={classes['homepage-container5-left-heading1']}>
              Plus Gold
            </h1>
            <h1 className={classes['homepage-container5-left-heading1']}>
              We Indians love{' '}
              <span
                className={classes['homepage-container5-left-heading1-gold']}
              >
                Gold
              </span>{' '}
              <span className={classes['homepage-container5-left-heart']}>
                ♥️
              </span>
            </h1>
          </div>
          <div>
            <Graph />
          </div>
        </div>
      </div>
      <div className={classes['homepage-container6']}>
        <h1 className={classes['container6-heading']}>
          Saving with PLUS{' '}
          <span className={classes['conatiner6-gold']}>Gold</span>
        </h1>
        <h1 className={classes['container6-heading']}>is fun and rewarding!</h1>
        <Downcurve className={classes['downcurve-container6']} />

        <div className={classes['homepage-container6-bottom']}>
          <div className={classes['container6-left']}>
            <div className={classes['left-top']}>
              <h1 className={classes['left-top-heading']}>
                Earn free{''}
                <span className={classes['left-top-heading-gold']}>Gold</span>
              </h1>
              <h2 className={classes['left-top-heading2']}>
                Refer Plus Gold to your{' '}
              </h2>
              <h2 className={classes['left-top-heading2']}>
                friends and family
              </h2>
              <GoldBrick className={classes['goldbrick']} />
            </div>
            <div className={classes['left-top']}>
              <h1 className={classes['left-top-heading']}>
                <span className={classes['left-top-heading-gold']}>Offer</span>{' '}
                like never before!
              </h1>
              <h2 className={classes['left-top-heading2']}>
                Earn points and enjoy
              </h2>
              <h2 className={classes['left-top-heading2']}>
                our exciting rewards
              </h2>
              <GoldStar className={classes['goldstar']} />
            </div>
          </div>
          <div className={classes['container6-right']}>
            <GoldRush className={classes['goldrush']} />
            <h1 className={classes['left-top-heading']}>
              Be the next winner of{''}
              <span className={classes['left-top-heading-gold']}>
                10gm gold
              </span>
            </h1>
            <h2 className={classes['left-top-heading2']}>
              By joining the Gold Rush Festival
            </h2>
            <div>
              <Silver />
              <GoldTrophie />
            </div>
          </div>
        </div>
      </div>
      <div className={classes['homepage-container7']}>
        <div className={classes['container7-left']}>
          <h1 className={classes['container7-heading']}>Introducing</h1>
          <h1 className={classes['container7-heading']}> Gold Gift Cards</h1>
          <Downcurve className={classes['downcurve']} />
          <h2 className={classes['homepage-conatiner3-paragraph']}>
            Share the love of gold with your loved ones.Its
          </h2>
          <h2 className={classes['homepage-conatiner3-paragraph']}>
            by gifting them this timeless treasure.Its
          </h2>
          <h2 className={classes['homepage-conatiner3-paragraph']}>
            beauty and value will forever remind them of
          </h2>
          <h2 className={classes['homepage-conatiner3-paragraph']}>
            {' '}
            your heartfelt affection.
          </h2>
          <div>
            <button className={classes['giftnow']}>Gift Now</button>
          </div>
        </div>
        <div className={classes['container7-right']}>
          <Card />
        </div>
      </div>
      <div className={classes['homepage-container8']}>
        <div className={classes['container8-left']}>
          <h1 className={classes['homepage-conatiner8-paragraph']}>
            Download the App
          </h1>
          <h2 className={classes['homepage-conatiner2-paragraph']}>
            Plus, a revolutionary app that helps Indian
          </h2>
          <h2 className={classes['homepage-conatiner2-paragraph']}>
            homemakers to pre-plan their jewellery
          </h2>
          <h2 className={classes['homepage-conatiner2-paragraph']}>
            purchase by saving monthly & gaining 10% IRR
          </h2>
          <div className={classes['appstores']}>
            <div>
              <Play />
            </div>
            <div>
              <App />
            </div>
          </div>
        </div>
        <div className={classes['conatiner8-right']}>
          <Iphonesmall />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
