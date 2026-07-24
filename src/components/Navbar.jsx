import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`topnav ${scrolled ? 'topnav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand"><span className="brand-mark">P</span><span className="brand-name">Portfolio</span></a>
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
        </div>
        <button
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
