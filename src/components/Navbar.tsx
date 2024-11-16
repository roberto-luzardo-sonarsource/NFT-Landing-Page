import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkBg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
          </div>
          <span className="font-display text-xl">Crypterio</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/artworks" className="nav-link">ARTWORKS</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <button className="btn-primary">SHOP NFT</button>
        </div>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;