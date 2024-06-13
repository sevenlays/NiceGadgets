import { useState } from 'react';
import './Switch.scss';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux';
import { setTheme } from '../../redux';

export const ToggleTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  const initialTheme = theme === 'Original' ? false : true;
  const [isChecked, setIsChecked] = useState(initialTheme);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(setTheme('Original'));
    } else {
      dispatch(setTheme('Original Dark'));
    }
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="checkbox"
        className="switch__checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="switch__label">
        <div className="switch__label__ball">
          {theme === 'Original' ? (
            <Sun className={`sun-icon ${isChecked ? 'active' : ''}`} />
          ) : (
            <Moon className={`moon-icon ${isChecked ? 'active' : ''}`} />
          )}
        </div>
      </label>
    </div>
  );
};
