import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { ThemeContext, useTheme} from '../../context/ThemeContext';
import { useContext } from 'react';

function Greenhouse() {

  const context = useContext(ThemeContext);
  const theme = useTheme(context);

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
