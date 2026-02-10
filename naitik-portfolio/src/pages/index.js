import Head from 'next/head';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Naitik Singh | Software Developer</title>
        <meta name="description" content="Portfolio of Naitik Singh - Results-driven Software Developer with expertise in Python, Django, and React.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Naitik Singh | Software Developer" />
        <meta property="og:description" content="Results-driven Software Developer with a strong foundation in Python, Django, and React.js" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naitik Singh | Software Developer" />
        <meta name="twitter:description" content="Results-driven Software Developer with a strong foundation in Python, Django, and React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

