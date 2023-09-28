import './App.css';
import CardContainer from './components/utils/cardContainer';
import CategoriesCard from './components/utils/categoriesCard';
import PromotionalSVG from './assets/promotionalSVG';
import SessionCard from './components/session/sessionCard';
import SearchCard from './components/utils/searchCard';

function App() {

  const colors = [];
  const data = [
    {
      'header': '01',
      'text': 'Action Games',
      'color': 0,
      'url': '/'
    },
    {
      'header': '02',
      'text': 'Sports Games',
      'color': 1,
      'url': '/'
    },
    {
      'header': '03',
      'text': 'Adventure Games',
      'color': 2,
      'url': '/'
    },
    {
      'header': '04',
      'text': 'Arcade Games',
      'color': 3,
      'url': '/'
    },
    {
      'header': '05',
      'text': 'Fantasy Gmaes',
      'color': 4,
      'url': '/'
    },
    {
      'header': '06',
      'text': 'Strategy Games',
      'color': 5,
      'url': '/'
    },
    {
      'header': '07',
      'text': 'Shooter Games',
      'color': 6,
      'url': '/'
    },
    {
      'header': 'View All',
      'text': 'All Categories',
      'color': 7,
      'url': '/'
    },
  ]

  function updateColors() {
  for (var i = 0; i < 10000 ; i++){
    colors.push(randomRGB())}
  };

  function randomRGB() {
    var roundValue = Math.round, rndmValue = Math.random, maxNum = 255;
    return 'rgba(' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ',' + roundValue(rndmValue()*maxNum) + ')';
  };

  return (
    <header className="App">
      {updateColors()}
      <CardContainer className="MainCardContainer">
        <SessionCard/>
        <div className="BigCardItemCenter">
          <PromotionalSVG className="PromotionalSVG" primaryColor='#5b0cab'/>
        </div>
        <div className="BigCardItemRight">
          <SearchCard/>
        </div>
      </CardContainer>
      
      <div className="GroupCardLayout">
        <span className="Text">Trending Categories</span>
        <div className="GroupCardMainLayout">
          {data.map((dat) => {
            return(
              <CardContainer className="Card">
                <CategoriesCard className="CategoriesCard" lineColor={colors[dat.color]} header={dat.header} text={dat.text} />
              </CardContainer>
            )
          })}
        </div>
      </div>
    </header>
  );
}

export default App;
