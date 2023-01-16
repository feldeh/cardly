import Footer from './Footer/Footer';
import Header from './Header/Header';

const Navbar = ({ children, current }) => {
  return (
    <div>
      <Header />
      {children}
      {!(current == 'waitlist' || current == 'envoi') ? <Footer /> : null}
    </div>
  );
};

export default Navbar;
