/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>UI Primitives support</>,
        imageUrl: 'img/socket3.svg',
        description: (
            <>
                Compatible with react-native, react-native-web, react-sketchapp API:
                View, Text, StyleSheet, etc. are supported.
            </>
        ),
    },
    {
        title: <>Yoga Layout</>,
        imageUrl: 'img/edit-grid.svg',
        description: (
            <>
                It's possible to describe layouts with flexboxes instead of absolute positioning.
                Flexboxes implemented through the Yoga Layout library and supports all available features like justify-content or flex.
            </>
        ),
    },
    {
        title: <>React</>,
        imageUrl: 'img/react-logo.svg',
        description: (
            <>
                The renderer supports a hydration (applying changes without re-creating existing nodes) and
                other React features like a state, Hooks, Context, etc.
            </>
        ),
    },
];

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="React Figma"
            description={"Render React components to Figma"}
        >
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={'https://github.com/react-figma/react-figma'}
                        >
                            GitHub
                        </Link>
                        <Link
                            className={classnames(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={'/docs/API'}
                        >
                            Docs
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map(({ imageUrl, title, description }, idx) => (
                                    <div
                                        key={idx}
                                        className={classnames('col col--4', styles.feature)}
                                    >
                                        {imageUrl && (
                                            <div className="text--center margin-bottom--lg">
                                                <img
                                                    className={styles.featureImage}
                                                    src={useBaseUrl(imageUrl)}
                                                    alt={title}
                                                />
                                            </div>
                                        )}
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
