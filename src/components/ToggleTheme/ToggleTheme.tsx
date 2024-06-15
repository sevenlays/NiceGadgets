import { useState } from 'react';
import './Switch.scss';
import { ReactComponent as Black } from '../../assets/icons/dark.svg';
import { ReactComponent as White } from '../../assets/icons/white.svg';
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
            <Black className={`sun-icon ${isChecked ? 'active' : ''}`} />
          ) : (
            <White className={`moon-icon ${isChecked ? 'active' : ''}`} />
          )}
        </div>
      </label>
    </div>
  );
};
