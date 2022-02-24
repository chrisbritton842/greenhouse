import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext';


function Greenhouse() {

  //const context = useContext(ThemeContext);
  const theme = useTheme();

  // console.log(theme, "this is our theme")

  return (
    <section>
      <img  className='greenhouse-img'
            src={theme.themeName === 'day' ? dayImage : nightImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
