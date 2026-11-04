'use client';

import React, { useEffect, useState } from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { prefersReducedMotion } from '@/utils/animations';
import styles from './Preloader.module.scss';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setLoading(false);
      return;
    }

    // Safety fallback: ensure loader never blocks user past 1.2s under any network condition
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloader} ${fading ? styles.fading : ''}`} aria-hidden="true">
      <div className={styles.preloaderContent}>
        <div className={styles.nameTypo}>{PERSONAL_DATA.name}</div>
        <div className={styles.roleLabel}>{PERSONAL_DATA.roleTitle}</div>
        <div className={styles.loadingBarWrapper}>
          <div className={styles.loadingBarFill} />
        </div>
      </div>
    </div>
  );
}
