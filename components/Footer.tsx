'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import TermsModal from '@/components/TermsModal'

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const menuItems = ['Problema', 'Propósito', 'Funciones', 'Hábitos', 'Cómo funciona', 'Equipo', 'Descargar']
  
  return (
    <>
      <footer style={{
        backgroundColor: '#1A3A2A',
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
              color: '#FFFFFF',
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

          {/* ── COPYRIGHT Y TÉRMINOS ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
            fontSize: '14px',
          }}>
            <button
              onClick={() => setTermsOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#34C97A',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                padding: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#34C97A')}
            >
              Términos y Condiciones
            </button>
            <span>© 2026 ErgoHabit · Hecho con 💚 para estudiantes</span>
          </div>
        </div>
      </footer>

      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
