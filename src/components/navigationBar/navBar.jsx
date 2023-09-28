import React from 'react';
import NavigationButton from '../utils/navigationViews';
import GamorSVG from '../../assets/gamorSVG';
import HomeSVG from '../../assets/homeButtonSVG';

const Navbar = () => {
  return (
    <nav className="Container">
      <div className='NavigateLayout'>
        <HomeSVG className="NavBarSVG" url='/'/>
        <NavigationButton className="PlainButton" tittle="Streams" url='/streams'/>
        <NavigationButton className="PlainButton" tittle="Party" url='/party'/>
        <NavigationButton className="PlainButton" tittle="Premium" url='/premium'/>
      </div>
      <div className='BannerLayout'>
        <GamorSVG className="NavBarSVG" />
      </div>
      <div className='LoginLayout'>
        <NavigationButton className="PlainButton" tittle="Sign In" url='/signIn'/>
        <NavigationButton className="StyledButton" tittle="Create account" url='/createaccount'/>
      </div>
    </nav>
  );
}


export default Navbar;
