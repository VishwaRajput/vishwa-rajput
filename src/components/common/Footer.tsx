'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { useSmoothScroll } from '@/components/common/SmoothScroll';
import { scrollToAnchor } from '@/utils/animations';
import { ArrowUp, Globe, FileCode } from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>('');
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const updateTime = () => {
      // Germany Central European Time
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToAnchor('#hero', lenis);
  };

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.container}>
        
        {/* Top Footer Section */}
        <div className={styles.footerTop}>
          <div className={styles.identityBlock}>
            <span className={styles.name}>{PERSONAL_DATA.name}</span>
            <span className={styles.role}>{PERSONAL_DATA.roleTitle}</span>
            <p className={styles.ethos}>
              Designing grounded generative AI systems and distributed data pipelines with mathematical rigor and software engineering discipline.
            </p>
          </div>

          <div className={styles.metaBlock}>
            <div className={styles.timeTag}>
              <Globe size={14} />
              <span>Würzburg, DE: {localTime ? `${localTime} CET` : 'Loading...'}</span>
            </div>

            <button 
              type="button" 
              onClick={handleBackToTop}
              className={styles.backToTopBtn}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Footer Separator & Legal / Machine-Readable Metadata */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} {PERSONAL_DATA.name}. All verified career details, metrics, and academic research reserved.
          </div>

          <div className={styles.footerLinks}>
            <a 
              href="/llms.txt" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.llmsLink}
              title="Machine-readable LLM overview for AI systems and crawlers"
            >
              <FileCode size={13} />
              <span>llms.txt</span>
            </a>
            <span className={styles.dot}>•</span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.sitemapLink}
            >
              <span>sitemap</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
