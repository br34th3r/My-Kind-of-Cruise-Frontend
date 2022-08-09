import { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from '../public/logo.png'
import hero from '../public/hero.jpg'
import boatTest from '../public/boat-test.jpg'
import { FaSearch, FaCompass, FaClock, FaThumbsUp, FaNewspaper, FaStar } from 'react-icons/fa'

import SearchModal from '../components/SearchModal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Section from '../components/Section'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	  fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/cruises/allCruises/`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
		console.log(json);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Kind of Cruise</title>
        <meta name="description" content="The My Kind of Cruise app helps you find, compare and even book a cruise, all in one easy place." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        modalOpen && <SearchModal closeModal={() => setModalOpen(false)} />
      }

      <main className={styles.main}>
        <Hero src={hero}>
          <div className={styles.heroContent}>
            <div className={styles.logo}>
              <Image src={logo} alt="My Kind of Cruise" />
            </div>
            <p>The My Kind of Cruise app helps you find, compare and even book a cruise, all in one easy place.<br /><br />You are 100% financially protected, as we are part of The Travel Trust Association.</p><br />
            <Button onClick={() => setModalOpen(true)}><FaSearch style={{ verticalAlign: 'text-bottom' }}/> Find your Cruise</Button>
          </div>
        </Hero>
        <Section icon={<FaCompass style={{ verticalAlign: 'text-bottom' }} />} title="Adventures to Have">
          <CardContainer>
            {data &&
              data["adventures"].map(({ id, title, image, description, price }) => (
                <Card key={id} src={image} alt={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{price}</span>
                </Card>
              ))}
          </CardContainer>
        </Section>
        <Section icon={<FaClock style={{ verticalAlign: 'text-bottom' }} />} title="Recently Viewed">
          <CardContainer>
            {data &&
              data["recent"].map(({ id, title, image, description, price }) => (
                <Card key={id} src={image} alt={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{price}</span>
                </Card>
              ))}
          </CardContainer>
        </Section>
        <Section icon={<FaThumbsUp style={{ verticalAlign: 'text-bottom' }} />} title="Recommendations">
          <CardContainer>
            {data &&
              data["recommendations"].map(({ id, title, image, description, price }) => (
                <Card key={id} src={image} alt={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{price}</span>
                </Card>
              ))}
          </CardContainer>
        </Section>
        <Section icon={<FaNewspaper style={{ verticalAlign: 'text-bottom' }} />} title="Helpful Blogs &amp; FAQs">
          <CardContainer>
            {data &&
              data["blogs"].map(({ id, title, description, image }) => (
                <Card key={id} src={image} alt={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Card>
              ))}
          </CardContainer>
        </Section>
        <Section icon={<FaStar style={{ verticalAlign: 'text-bottom' }} />} title="Popular Cruises">
          <CardContainer>
            {data &&
              data["popular"].map(({ id, title, image, description, price }) => (
                <Card key={id} src={image} alt={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{price}</span>
                </Card>
              ))}
          </CardContainer>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
