'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Mail, Phone, Copy, Check, ArrowUpRight, Github, Linkedin, FileText, Send, Download } from 'lucide-react';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhoneDE, setCopiedPhoneDE] = useState(false);
  const [copiedPhoneIN, setCopiedPhoneIN] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phoneDE' | 'phoneIN') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else if (type === 'phoneDE') {
      setCopiedPhoneDE(true);
      setTimeout(() => setCopiedPhoneDE(false), 2500);
    } else {
      setCopiedPhoneIN(true);
      setTimeout(() => setCopiedPhoneIN(false), 2500);
    }
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact and Collaboration">
      <div className={styles.container}>
        
        {/* Editorial Heading */}
        <div className={styles.headerBlock}>
          <div className={styles.badge}>
            <Send size={14} />
            <span>Open to Opportunities</span>
          </div>
          <h2 className={styles.mainTitle}>
            Let&apos;s Build Something <br className={styles.hideMobile} />
            <span className={styles.accentText}>Intelligent &amp; Resilient</span>.
          </h2>
          <p className={styles.subtitle}>
            Currently exploring full-time and high-impact engineering roles in AI Engineering, Generative AI Systems, and Data Engineering across Germany, Europe, India, or Remote.
          </p>
        </div>

        {/* Contact Grid */}
        <div className={styles.contactGrid}>
          
          {/* Email Direct Contact Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Mail size={20} />
              </div>
              <span className={styles.cardLabel}>DIRECT EMAIL</span>
            </div>
            
            <a href={`mailto:${PERSONAL_DATA.email}`} className={styles.contactValue}>
              {PERSONAL_DATA.email}
            </a>

            <div className={styles.cardActions}>
              <a 
                href={`mailto:${PERSONAL_DATA.email}`} 
                className={styles.actionBtnPrimary}
              >
                <span>Email</span>
                <ArrowUpRight size={15} />
              </a>
              <button 
                type="button"
                className={styles.actionBtnSecondary}
                onClick={() => copyToClipboard(PERSONAL_DATA.email, 'email')}
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={15} className={styles.checkGreen} /> : <Copy size={15} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Germany Phone Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Phone size={20} />
              </div>
              <span className={styles.cardLabel}>GERMANY MOBILE / WHATSAPP</span>
            </div>
            
            <a href={`tel:${PERSONAL_DATA.phoneGermany.replace(/\s+/g, '')}`} className={styles.contactValue}>
              {PERSONAL_DATA.phoneGermany}
            </a>

            <div className={styles.cardActions}>
              <a 
                href={`tel:${PERSONAL_DATA.phoneGermany.replace(/\s+/g, '')}`}
                className={styles.actionBtnPrimary}
              >
                <span>Call DE</span>
                <ArrowUpRight size={15} />
              </a>
              <button 
                type="button"
                className={styles.actionBtnSecondary}
                onClick={() => copyToClipboard(PERSONAL_DATA.phoneGermany, 'phoneDE')}
                aria-label="Copy Germany phone number"
              >
                {copiedPhoneDE ? <Check size={15} className={styles.checkGreen} /> : <Copy size={15} />}
                <span>{copiedPhoneDE ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* India Phone Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Phone size={20} />
              </div>
              <span className={styles.cardLabel}>INDIA MOBILE / WHATSAPP</span>
            </div>
            
            <a href={`tel:${PERSONAL_DATA.phoneIndia.replace(/\s+/g, '')}`} className={styles.contactValue}>
              {PERSONAL_DATA.phoneIndia}
            </a>

            <div className={styles.cardActions}>
              <a 
                href={`tel:${PERSONAL_DATA.phoneIndia.replace(/\s+/g, '')}`}
                className={styles.actionBtnPrimary}
              >
                <span>Call IN</span>
                <ArrowUpRight size={15} />
              </a>
              <button 
                type="button"
                className={styles.actionBtnSecondary}
                onClick={() => copyToClipboard(PERSONAL_DATA.phoneIndia, 'phoneIN')}
                aria-label="Copy India phone number"
              >
                {copiedPhoneIN ? <Check size={15} className={styles.checkGreen} /> : <Copy size={15} />}
                <span>{copiedPhoneIN ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Verified Social & Technical Profiles Strip */}
        <div className={styles.profilesStrip}>
          <div className={styles.stripLabel}>Verified Technical Profiles:</div>
          
          <div className={styles.linksRow}>
            <a 
              href={PERSONAL_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>

            <a 
              href={PERSONAL_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <Github size={16} />
              <span>GitHub Repositories</span>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>

            <a 
              href="/Vishwa_Rajput_Resume.pdf"
              download="Vishwa_Rajput_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.profileLink} ${styles.cvLink}`}
              title="Download Vishwa Rajput's Full Resume (PDF)"
            >
              <Download size={16} />
              <span>Download Resume (PDF)</span>
              <ArrowUpRight size={14} className={styles.arrow} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
