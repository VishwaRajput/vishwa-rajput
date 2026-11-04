import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Terminal size={14} />
          <span>HTTP 404 • PATH NOT LOCATED</span>
        </div>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Vector Coordinate Out of Bounds</h2>
        <p className={styles.desc}>
          The requested route does not exist in this embedding space. Return to the primary portfolio graph.
        </p>
        <Link href="/" className={styles.returnBtn}>
          <ArrowLeft size={16} />
          <span>Return to Origin</span>
        </Link>
      </div>
    </div>
  );
}
