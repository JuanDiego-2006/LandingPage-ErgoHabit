'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image' // <-- 1. Importamos el componente Image de Next.js

export default function Navbar() {
  // Estado para saber si el menú de celular está abierto o cerrado
  const [open, setOpen] = useState(false)

  const menuItems = ['Problema', 'Propósito', 'Funciones', 'Hábitos', 'Cómo funciona', 'Equipo']
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(240, 245, 240, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(46, 125, 82, 0.08)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* ── LOGO ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* 2. AQUÍ ESTÁ EL CAMBIO: Quitamos el div verde y usamos <Image /> */}
          <Image 
            src="/logo-oficial.png" 
            alt="Logo de ErgoHabit" 
            width={36} 
            height={36} 
            style={{ 
              borderRadius: '10px',
              objectFit: 'contain' 
            }} 
            priority={true}
          />

          <span style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#1A3A2A',
            letterSpacing: '-0.5px',
          }}>ErgoHabit</span>
        </div>

        {/* ── ENLACES DE ESCRITORIO (Se ocultan en celular) ── */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="nav-links-desktop">
          
          {menuItems.map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-').replace('ó', 'o').replace('é', 'e').replace('á', 'a');
            return (
              <a 
                key={item}
                href={`#${sectionId}`}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#6B8F71',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#2E7D52')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#6B8F71')}
              >
                {item}
              </a>
            );
          })}
          
          <a 
            href="/ergohabit.apk"
            download="ErgoHabit.apk"
            style={{
              padding: '10px 20px',
              backgroundColor: '#2E7D52',
              color: 'white',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
          >
            Descargar
          </a>
        </div>

        {/* ── BOTÓN HAMBURGUESA PARA CELULARES (Se oculta en escritorio) ── */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            color: '#1A3A2A',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── MENÚ DESPLEGABLE PARA CELULARES ── */}
      {open && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          backgroundColor: '#F0F5F0',
          borderBottom: '1px solid rgba(46, 125, 82, 0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        }} className="mobile-dropdown">
          {menuItems.map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-').replace('ó', 'o').replace('é', 'e').replace('á', 'a');
            return (
              <a 
                key={item}
                href={`#${sectionId}`}
                onClick={() => setOpen(false)} // Cierra el menú al tocar un link
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1A3A2A',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {item}
              </a>
            );
          })}
          <a 
            href="/ergohabit.apk"
            download="ErgoHabit.apk"
            onClick={() => setOpen(false)}
            style={{
              padding: '14px 20px',
              backgroundColor: '#2E7D52',
              color: 'white',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '8px'
            }}
          >
            Descargar
          </a>
        </div>
      )}

      {/* ── LÓGICA DE MEDIA QUERIES ── */}
      <style>{`
        /* Por defecto en pantallas grandes, ocultamos el botón hamburguesa y el menú desplegable */
        .mobile-menu-btn, .mobile-dropdown { 
          display: none !important; 
        }

        /* Cuando la pantalla es pequeña (celulares), ocultamos los links normales y mostramos el botón hamburguesa */
        @media (max-width: 768px) {
          .nav-links-desktop { 
            display: none !important; 
          }
          .mobile-menu-btn { 
            display: flex !important; 
          }
          .mobile-dropdown {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  )
}