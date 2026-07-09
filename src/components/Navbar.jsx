import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Container } from './Container';
import { LogoRotator } from './LogoRotator';
import { PrimaryButton } from './PrimaryButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hasScrolled = useScrollPosition(80);
  const shouldReduceMotion = useReducedMotion();

  const navBase = hasScrolled
    ? 'border-dark/10 bg-white/95 text-dark shadow-[0_18px_55px_rgba(17,24,39,0.08)] backdrop-blur-xl'
    : 'border-white/10 bg-transparent text-white';

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${navBase}`}>
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <NavLink to="/" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Bio Energy Partners home">
          <LogoRotator className="h-12 w-12 rounded-2xl shadow-[0_18px_40px_rgba(109,190,69,0.3)]" />
          <span className="font-poppins text-base font-bold leading-tight tracking-tight">Bio Energy<br />Partners</span>
        </NavLink>

        <nav className="hidden items-center gap-2 rounded-full border border-current/10 bg-current/[0.03] p-1 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-primary/10 hover:text-primary ${isActive ? 'bg-primary/15 text-primary' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <PrimaryButton to="/contact" className="hidden px-5 py-3 normal-case tracking-normal lg:inline-flex">Discuss Your Boiler</PrimaryButton>

        <button type="button" className="rounded-full border border-current/15 p-3 transition hover:border-primary hover:text-primary lg:hidden" aria-label="Toggle menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-dark/10 bg-white text-dark shadow-soft lg:hidden"
          >
            <Container className="py-5">
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {navigationLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} onClick={closeMenu} className={({ isActive }) => `rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-lightGray'}`}>
                    {link.label}
                  </NavLink>
                ))}
                <PrimaryButton to="/contact" onClick={closeMenu} className="mt-2 w-full normal-case tracking-normal">Discuss Your Boiler</PrimaryButton>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
