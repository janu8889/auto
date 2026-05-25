/* eslint-disable @next/next/no-img-element */
import "./about.css";
import Hero from "../components/about/Hero";
import BeginningSection from "../components/about/BeginningSection";
import PhilosophySection from "../components/about/PhilosophySection";
import StatsBar from "../components/about/StatsBar";
import ContactSection from "../components/about/ContactSection";
import CtaSection from "../components/about/CtaSection";


function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}


function LocationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <main role="main">
        <Hero />
        <BeginningSection />
        <PhilosophySection />
        <StatsBar />
        <ContactSection LocationIcon={LocationIcon} ClockIcon={ClockIcon} PhoneIcon={PhoneIcon} ExternalIcon={ExternalIcon}/>
        <CtaSection />
      </main>
    </>
  );
}
