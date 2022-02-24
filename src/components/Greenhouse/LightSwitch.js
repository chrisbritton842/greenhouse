import './LightSwitch.css';
import { useContext } from 'react';
import { ThemeContext, useTheme } from '../../context/ThemeContext'

function LightSwitch() {
  const theme = useContext(ThemeContext);
  const { themeName, setThemeName } = useTheme(theme);
  console.log('ThemeName', themeName)

  return (
    <div className={`light-switch ${themeName}`} >
      <div className="on" onClick={() => setThemeName('day')} >DAY</div>
      <div className="off" onClick={() => setThemeName('night')}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
