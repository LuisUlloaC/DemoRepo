import React from 'react';
import NavigationButton from '../utils/navigationViews';
import GamorSVG from '../../assets/gamorSVG';
import HomeSVG from '../../assets/homeButtonSVG';

const Navbar = () => {
  return (
    <nav className="Container">
      <div className='NavigateLayout'>
        <HomeSVG className="NavBarSVG" url='/'/>
        <NavigationButton className="NavBarPlainButton" tittle="Streams" url='/streams'/>
        <NavigationButton className="NavBarPlainButton" tittle="Party" url='/party'/>
        <NavigationButton className="NavBarPlainButton" tittle="Premium" url='/premium'/>
      </div>
      <div className='BannerLayout'>
        <GamorSVG className="NavBarSVG" />
      </div>
      <div className='LoginLayout'>
        <NavigationButton className="NavBarPlainButton" tittle="Sign In" url='/signin'/>
        <NavigationButton className="NavBarStyledButton" tittle="Create account" url='/signup'/>
      </div>
    </nav>
  );
}


export default Navbar;
