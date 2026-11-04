'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { useSmoothScroll } from '@/components/common/SmoothScroll';
import { scrollToAnchor } from '@/utils/animations';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['research', 'projects', 'experience', 'capabilities', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToAnchor(targetId, lenis);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        {/* Typographic Name (NOT A LOGO) */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className={styles.nameBrand}
          aria-label="Vishwa Rajput Portfolio Home"
        >
          <span className={styles.fullName}>{PERSONAL_DATA.name}</span>
          <span className={styles.roleSubtext}>AI &amp; Data Engineer</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            <li>
              <a 
                href="#research" 
                onClick={(e) => handleNavClick(e, '#research')}
                className={`${styles.navLink} ${activeSection === 'research' ? styles.active : ''}`}
              >
                <span className={styles.indexNum}>01</span> Research
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
              >
                <span className={styles.indexNum}>02</span> Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => handleNavClick(e, '#experience')}
                className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
              >
                <span className={styles.indexNum}>03</span> Experience
              </a>
            </li>
            <li>
              <a 
                href="#capabilities" 
                onClick={(e) => handleNavClick(e, '#capabilities')}
                className={`${styles.navLink} ${activeSection === 'capabilities' ? styles.active : ''}`}
              >
                <span className={styles.indexNum}>04</span> Stack
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              >
                <span className={styles.indexNum}>05</span> Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Status Beacon & Direct CTA */}
        <div className={styles.actions}>
          <div className={styles.statusBadge} title="Available for AI & Data Engineering opportunities">
            <span className={styles.beaconDot} />
            <span className={styles.statusText}>Open to Work</span>
          </div>

          <a 
            href="/Vishwa_Rajput_Resume.pdf"
            download="Vishwa_Rajput_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
            title="Download Vishwa Rajput's verified Resume (PDF)"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={styles.ctaButton}
          >
            <span>Get in touch</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Mobile Navigation">
            <ul className={styles.mobileNavList}>
              <li>
                <a href="#research" onClick={(e) => handleNavClick(e, '#research')}>
                  <span className={styles.indexNum}>01</span> Research &amp; Thesis
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
                  <span className={styles.indexNum}>02</span> Production Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>
                  <span className={styles.indexNum}>03</span> Experience
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')}>
                  <span className={styles.indexNum}>04</span> Engineering Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  <span className={styles.indexNum}>05</span> Contact &amp; Connect
                </a>
              </li>
              <li className={styles.mobileResumeItem}>
                <a 
                  href="/Vishwa_Rajput_Resume.pdf"
                  download="Vishwa_Rajput_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileResumeBtn}
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
