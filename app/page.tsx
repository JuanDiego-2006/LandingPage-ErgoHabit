'use client';

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Purpose from '@/components/Purpose'
import Features from '@/components/Features'
import Habits from '@/components/Habits'
import HowItWorks from '@/components/HowItworks'
import Team from '@/components/Team'            // <-- Importamos el equipo
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Purpose />
      <Features />
      <Habits />
      <HowItWorks />       
      <Download />
      <Team />    {/* <-- Lo agregamos aquí */}
      <Footer />
    </main>
  )
}