import Head from 'next/head'
import styles from '../styles/Home.module.css'

import hero from '../public/hero.jpg'
import { FaSearch, FaCompass, FaClock, FaThumbsUp, FaNewspaper, FaStar } from 'react-icons/fa'

import Hero from '../components/Hero'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Section from '../components/Section'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Kind of Cruise</title>
        <meta name="description" content="The My Kind of Cruise app helps you find, compare and even book a cruise, all in one easy place." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero src={hero}>
          <div className={styles.heroContent}>
            <h1>My Kind of Cruise</h1>
            <p>The My Kind of Cruise app helps you find, compare and even book a cruise, all in one easy place.<br /><br />You are 100% financially protected, as we are part of The Travel Trust Association.</p><br />
            <Button onClick={() => console.log("Open Modal")}><FaSearch style={{ verticalAlign: 'text-bottom' }}/> Find your Cruise</Button>
          </div>
        </Hero>
        <Section icon={<FaCompass style={{ verticalAlign: 'text-bottom' }} />} title="Adventures to Have">
        </Section>
        <Section icon={<FaClock style={{ verticalAlign: 'text-bottom' }} />} title="Recently Viewed">
        </Section>
        <Section icon={<FaThumbsUp style={{ verticalAlign: 'text-bottom' }} />} title="Recommendations">
        </Section>
        <Section icon={<FaNewspaper style={{ verticalAlign: 'text-bottom' }} />} title="Helpful Blogs &amp; FAQs">
        </Section>
        <Section icon={<FaStar style={{ verticalAlign: 'text-bottom' }} />} title="Popular Cruises">
        </Section>
      </main>
      <Footer />
    </div>
  )
}
