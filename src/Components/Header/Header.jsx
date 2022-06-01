import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';

const NavigationLinks = [
  {
    label: 'Библиотека',
    link: '/',
  },
  {
    label: 'Wish List',
    link: '#',
  },
]

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const activate = (label, link) => (e) => {
    e.preventDefault();
  
      setActive(label);
      navigate(link, { replace: true });
    
  };
  const { pathname } = useLocation();

  useEffect(() => {
    const labelA = NavigationLinks.find(({ link }) => link === pathname);
    if (labelA) {
      setActive(labelA.label);
    } else {
      setActive('');
    }
  }, [pathname]);

  const getActiveStyles = (label) => (label === active ? 'active' : 'header__info');

  return (
    <div className="header__container">
      <div className="header__info__container">
        {NavigationLinks.map(({ label, link }) => (
          <Link
            key={label}
            to={link}
            className={getActiveStyles(label)}
            onClick={activate(label, link)}
          >
            {label}
          </Link>
        ))}
      </div>

    </div>
  );
}
