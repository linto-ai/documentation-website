import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import img1 from '../../../static/img/illustration_01.png'
import img2 from '../../../static/img/illustration_02.png'
import img3 from '../../../static/img/illustration_03.png'
import img4 from '../../../static/img/illustration_04.png'

const FeatureList = [
  {
    title: 'Cognitive APIs',
    png: img2,
    refLink: '/docs/developpers/apis/',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A collection of APIs and downloadable AI models conveniently packed as ready-made Docker images.
      </>
    ),
  },
  {
    title: 'Virtual Agents and Smart Assistants',
    png: img4,
    refLink: '/docs/developpers/agent/',
    description: (
      <>
        The Open Source platform for end-to-end solutions that uses text entries or voice as a natural user interface.
      </>
    ),
  },
  {
    title: 'Smart Conversations',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    png: img1,
    refLink: '/docs/developpers/meeting/',
    description: (
      <>
        Record your meetings and transcribe directly from streaming or from multimedia files.
        Use LinTO's <a href="https://convos.linto.ai">Conversation Manager</a> editor to edit, share and abstract your transcripts
      </>
    ),
  },
];

function Feature({ png, title, description, refLink }) {

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={png}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <div
            className="">
            <Link
              className="button button--primary"
              to={refLink}>
              {title}
            </Link>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className='hero__title text--center'>Developper's documentation</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
