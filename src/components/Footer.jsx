import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactDetails, navigationLinks } from '../data/navigation';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-poppins font-bold">BEP</span>
            <span className="font-poppins text-xl font-bold">Bio Energy Partners</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">We Manage Your Boiler Using Sustainable Bio Energy.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-primary">in</a>
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold transition hover:bg-primary">f</a>
            <a href={`mailto:${contactDetails.email}`} aria-label="Email" className="rounded-full bg-white/10 p-3 transition hover:bg-primary"><Mail size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {navigationLinks.map((link) => <li key={link.path}><Link className="transition hover:text-primary" to={link.path}>{link.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Contact</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-primary" size={18} />{contactDetails.address}</li>
            <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-primary" size={18} />{contactDetails.phone}</li>
            <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-primary" size={18} />{contactDetails.email}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© {new Date().getFullYear()} Bio Energy Partners (Pvt) Ltd. All rights reserved.</div>
    </footer>
  );
}
