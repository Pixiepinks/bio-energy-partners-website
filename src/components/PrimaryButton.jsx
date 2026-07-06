import { Link } from 'react-router-dom';

const baseClasses = 'inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#5ba83a] focus:outline-none focus:ring-4 focus:ring-primary/30';

export function PrimaryButton({ children, to, className = '', ...props }) {
  if (to) {
    return <Link to={to} className={`${baseClasses} ${className}`} {...props}>{children}</Link>;
  }

  return <button className={`${baseClasses} ${className}`} {...props}>{children}</button>;
}
