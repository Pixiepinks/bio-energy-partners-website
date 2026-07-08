import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Factory,
  Gauge,
  Globe,
  Leaf,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { contactDetails } from '../data/navigation';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const quickContacts = [
  { title: 'Call Us', detail: '+94 112 754914', href: 'tel:+94112754914', icon: Phone },
  { title: 'Email Us', detail: contactDetails.email, href: `mailto:${contactDetails.email}`, icon: Mail },
  { title: 'Corporate Office', detail: 'Colombo, Sri Lanka', href: '#location', icon: Building2 },
];

const contactCards = [
  { title: 'Corporate Office', icon: MapPin, lines: contactDetails.address },
  { title: 'Telephone', icon: Phone, lines: contactDetails.phones },
  { title: 'Email', icon: Mail, lines: [contactDetails.email], href: `mailto:${contactDetails.email}` },
  { title: 'Website', icon: Globe, lines: [contactDetails.website], href: `https://${contactDetails.website}` },
  { title: 'Business Hours', icon: Clock, lines: ['Monday – Friday', '8.30 AM – 5.30 PM'] },
];

const whyContactItems = [
  { title: 'Free Initial Consultation', description: 'Discuss boiler operating pressure, fuel usage, and site priorities with our specialists.', icon: MessageSquareText },
  { title: 'Professional Boiler Assessment', description: 'Receive practical guidance on operation gaps, reliability risks, and performance improvements.', icon: Gauge },
  { title: 'Sustainable Fuel Solutions', description: 'Explore dependable biomass fuel planning aligned with continuous industrial steam demand.', icon: Leaf },
  { title: 'Complete Boiler Operation Management', description: 'Reduce internal management burden with one accountable boiler operation partner.', icon: ShieldCheck },
];

const enquiryCards = [
  { title: 'Boiler Operation Outsourcing', icon: Factory },
  { title: 'Biomass Fuel Supply', icon: Leaf },
  { title: 'Steam Reliability Improvement', icon: Gauge },
  { title: 'Boiler Performance Consultation', icon: CalendarCheck },
];

const formFields = [
  { label: 'Name', type: 'text', autoComplete: 'name', required: true, icon: UserRound },
  { label: 'Company', type: 'text', autoComplete: 'organization', required: true, icon: Building2 },
  { label: 'Phone Number', type: 'tel', autoComplete: 'tel', required: true, icon: Phone },
  { label: 'Email', type: 'email', autoComplete: 'email', required: true, icon: Mail },
  { label: 'Factory Location', type: 'text', autoComplete: 'street-address', required: true, icon: MapPin },
  { label: 'Boiler Capacity (Optional)', type: 'text', required: false, icon: Gauge },
];

function MotionSection({ children, className = '', ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function IconCard({ item, className = '' }) {
  const Icon = item.icon;
  return (
    <motion.article variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }} className={`group rounded-[1.75rem] border border-dark/10 bg-white p-6 shadow-[0_22px_80px_rgba(12,35,24,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_90px_rgba(109,190,69,0.14)] ${className}`}>
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={26} strokeWidth={2.3} />
      </div>
      <h3 className="text-xl font-extrabold text-dark">{item.title}</h3>
      {item.description && <p className="mt-3 text-sm leading-7 text-dark/65">{item.description}</p>}
    </motion.article>
  );
}

export function Contact() {
  const reduceMotion = useReducedMotion();
  usePageMeta({
    title: 'Contact Bio Energy Partners',
    description: 'Contact Bio Energy Partners for industrial boiler operation outsourcing, biomass fuel management, and steam reliability consultation in Sri Lanka.',
  });

  return (
    <>
      <section className="relative overflow-hidden bg-[#07110f] pt-32 text-white md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(109,190,69,0.22),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(43,164,102,0.22),transparent_34%),linear-gradient(135deg,#07110f_0%,#111827_52%,#081210_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
        <Container className="relative py-20 md:py-28">
          <motion.div initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="mx-auto max-w-4xl text-center">
            <motion.p variants={fadeUp} className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">Industrial Boiler Consultation</motion.p>
            <motion.h1 variants={fadeUp} className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">Contact Bio Energy Partners</motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">Let's discuss your boiler operation, biomass fuel management, and steam reliability requirements.</motion.p>
          </motion.div>
          <motion.div initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }} className="mt-12 grid gap-5 md:grid-cols-3">
            {quickContacts.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a key={card.title} href={card.href} variants={fadeUp} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 text-left shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.1]">
                  <Icon className="text-primary" size={28} />
                  <h2 className="mt-5 text-xl font-extrabold text-white">{card.title}</h2>
                  <p className="mt-2 text-sm font-semibold text-white/68">{card.detail}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <MotionSection className="relative overflow-hidden bg-white py-24 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(109,190,69,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fcf5_100%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">Contact Information</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-dark md:text-6xl">Get In Touch</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-dark/70">Factories can contact Bio Energy Partners to evaluate outsourced boiler operation, sustainable biomass fuel management, and practical ways to improve steam reliability.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = <><Icon className="mt-1 shrink-0 text-primary" size={22} /><div><h3 className="font-extrabold text-dark">{card.title}</h3>{card.lines.map((line) => <p key={line} className="mt-1 text-sm leading-6 text-dark/65">{line}</p>)}</div></>;
                return card.href ? <a key={card.title} href={card.href} className="flex gap-4 rounded-3xl border border-dark/10 bg-white p-5 shadow-[0_16px_55px_rgba(12,35,24,0.06)] transition hover:border-primary/30">{content}</a> : <article key={card.title} className="flex gap-4 rounded-3xl border border-dark/10 bg-white p-5 shadow-[0_16px_55px_rgba(12,35,24,0.06)]">{content}</article>;
              })}
            </div>
          </motion.div>

          <motion.form variants={fadeUp} className="rounded-[2rem] border border-primary/20 bg-white p-6 shadow-[0_28px_100px_rgba(12,35,24,0.12)] md:p-8" aria-label="Contact consultation request form">
            <div className="grid gap-5 md:grid-cols-2">
              {formFields.map((field) => {
                const Icon = field.icon;
                const id = field.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <label key={field.label} htmlFor={id} className="group block text-sm font-bold text-dark/75">
                    {field.label}
                    <span className="mt-2 flex items-center gap-3 rounded-2xl border border-dark/10 bg-lightGray px-4 py-3 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/15">
                      <Icon className="text-dark/35 group-focus-within:text-primary" size={18} />
                      <input id={id} name={id} type={field.type} autoComplete={field.autoComplete} required={field.required} className="w-full bg-transparent text-base font-medium text-dark outline-none placeholder:text-dark/35 invalid:[&:not(:placeholder-shown)]:text-red-600" placeholder=" " />
                    </span>
                  </label>
                );
              })}
            </div>
            <label htmlFor="message" className="mt-5 block text-sm font-bold text-dark/75">
              Message
              <textarea id="message" name="message" required rows="5" className="mt-2 w-full rounded-2xl border border-dark/10 bg-lightGray px-4 py-3 text-base font-medium text-dark outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15" />
            </label>
            <PrimaryButton type="submit" className="mt-7 w-full py-4 text-base normal-case tracking-normal md:w-auto md:px-10">Request Consultation <ArrowRight className="ml-2" size={19} /></PrimaryButton>
          </motion.form>
        </Container>
      </MotionSection>

      <MotionSection className="bg-lightGray py-24 md:py-28">
        <Container>
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">Why Contact BEP</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Start With a Clear Boiler Operation Plan</h2></motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{whyContactItems.map((item) => <IconCard key={item.title} item={item} />)}</div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-white py-24 md:py-28">
        <Container>
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">Service Enquiries</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">How Can We Support Your Facility?</h2></motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{enquiryCards.map((item) => <IconCard key={item.title} item={item} />)}</div>
        </Container>
      </MotionSection>

      <MotionSection id="location" className="bg-lightGray py-24 md:py-28">
        <Container className="flex justify-center">
          <div className="w-full max-w-5xl">
            <motion.div variants={fadeUp} className="text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">Location</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Corporate Office</h2>
            </motion.div>

            <div className="mt-10 grid gap-10">
              <motion.div
                variants={fadeUp}
                className="rounded-[2rem] border border-dark/10 bg-white p-8 shadow-[0_28px_100px_rgba(12,35,24,0.1)] md:p-10 lg:p-12"
              >
                <MapPin className="text-primary" size={36} />
                <p className="mt-6 text-xl font-bold leading-9 text-dark md:text-2xl md:leading-10">
                  #17-3, Echelon Square,<br />
                  Colombo,<br />
                  Sri Lanka
                </p>
                <p className="mt-6 max-w-3xl text-base leading-8 text-dark/65 md:text-lg">Bio Energy Partners is positioned to support industrial facilities seeking dependable boiler operation and biomass energy management.</p>
              </motion.div>

              {/* Future Google Maps embed can be added here as another full-width grid item. */}
            </div>
          </div>
        </Container>
      </MotionSection>

      <section className="relative overflow-hidden bg-[#07110f] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(109,190,69,0.22),transparent_30%),linear-gradient(135deg,#07110f,#111827)]" />
        <Container className="relative text-center">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">Let's Improve Your Boiler Operation</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">Talk to our specialists and discover how Bio Energy Partners can reduce operational burden while improving steam reliability.</p>
            <PrimaryButton to="/contact" className="mt-9 px-9 py-4 text-base normal-case tracking-normal">Schedule a Site Visit <ArrowRight className="ml-2" size={19} /></PrimaryButton>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
