import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">User's documentation</h1>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/consumers/apis">
            📖 Cognitive APIs
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/consumers/conversation-manager">
            📖 Conversation manager
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation portal for LinTO">
      <main>
        <HomepageHeader />
        {/* <h1 className="hero__subtitle text--center">For developpers</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
