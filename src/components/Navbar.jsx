import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Container } from './Container';
import { PrimaryButton } from './PrimaryButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hasScrolled = useScrollPosition();

  const navBase = hasScrolled ? 'bg-white/95 text-dark shadow-sm backdrop-blur' : 'bg-transparent text-white';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBase}`}>
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-poppins text-lg font-bold text-white">BEP</span>
          <span className="font-poppins text-base font-bold leading-tight">Bio Energy<br />Partners</span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-sm font-semibold transition hover:text-primary ${isActive ? 'text-primary' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <PrimaryButton to="/contact" className="hidden lg:inline-flex">Talk to BEP</PrimaryButton>

        <button type="button" className="rounded-full p-2 lg:hidden" aria-label="Toggle menu" onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-dark/10 bg-white text-dark lg:hidden">
          <Container className="py-5">
            <nav className="grid gap-4" aria-label="Mobile navigation">
              {navigationLinks.map((link) => (
                <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-lightGray'}`}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
