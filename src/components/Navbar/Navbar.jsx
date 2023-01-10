import Footer from './Footer/Footer';
import Header from './Header/Header';

const Navbar = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Navbar;
