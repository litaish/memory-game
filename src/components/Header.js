import AppStyles from '../assets/styles/App.module.css';

const Header = () => {
  return (
    <header className={AppStyles.header}>
      <h2 className={AppStyles.header__text}>MemoryCards</h2>
    </header>
  );
}

export default Header;
