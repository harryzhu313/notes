import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const FeatureList = [
  {
    title: '职业/工作',
    url: 'http://localhost:3000/docs/tutorial-basics/create-a-page'
    
  },

  {
    title: '学习/成长',
    url: 'http://localhost:3000/docs/tutorial-basics/create-a-document'
  },

  {
    title: '创造/兴趣',
    url: 'http://localhost:3000/docs/tutorial-basics/create-a-blog-post'
  },
];

function Feature({title,url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
      
      <Link className = {styles.link} to={url}>
        <div className = {styles.featureTitle}>{title}</div> 
      </Link> 
      
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className={clsx('col col--12')}>
            <div className="text--center padding-horiz--md">
              <p>这是一段描述文本</p>
            </div>
            <hr />
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
