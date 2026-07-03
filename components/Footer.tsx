import React from 'react'
import Image from 'next/image' // <-- 1. Importa Image

export default function Footer() {
  const menuItems = ['Problema', 'Propósito', 'Funciones', 'Hábitos', 'Cómo funciona', 'Equipo', 'Descargar']
  
  return (
    <footer style={{
      backgroundColor: '#1A3A2A', // Color verde oscuro del footer
      padding: '40px 24px',
      color: '#6B8F71',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* ── LOGO Y NOMBRE ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* 2. AQUÍ ESTÁ EL CAMBIO: Usamos tu logo oficial */}
          <Image 
            src="/logo-oficial.png" 
            alt="Logo de ErgoHabit" 
            width={36} 
            height={36} 
            style={{ 
              borderRadius: '10px',
              objectFit: 'contain' 
            }} 
          />

          <span style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#FFFFFF', // Blanco para que resalte sobre el fondo oscuro
          }}>ErgoHabit</span>
        </div>

        {/* ── MENÚ DE ENLACES ── */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-').replace('ó', 'o').replace('é', 'e').replace('á', 'a')}`}
              style={{ color: '#6B8F71', textDecoration: 'none', fontSize: '14px' }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* ── COPYRIGHT ── */}
        <div style={{ fontSize: '14px' }}>
          © 2026 ErgoHabit · Hecho con 💚 para estudiantes
        </div>
      </div>
    </footer>
  )
}