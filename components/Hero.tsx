'use client';
import React from 'react';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 24px 60px',
      background: 'linear-gradient(160deg, #F0F5F0 0%, #E8F5EC 50%, #F0F5F0 100%)',
    }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          backgroundColor: 'rgba(46, 125, 82, 0.1)',
          borderRadius: '100px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#2E7D52',
          marginBottom: '32px',
          letterSpacing: '0.02em',
        }}>
          🌿 Hábitos saludables para estudiantes
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontWeight: 900,
          color: '#1A3A2A',
          lineHeight: 1.1,
          letterSpacing: '-2px',
          marginBottom: '20px',
        }}>
          Tu bienestar,{' '}
          <span style={{
            color: '#34C97A',
            position: 'relative',
            display: 'inline-block',
          }}>
            en tus manos
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#6B8F71',
          lineHeight: 1.6,
          marginBottom: '40px',
          maxWidth: '560px',
          margin: '0 auto 40px',
        }}>
          ErgoHabit monitorea tu postura, hidratación, sueño, ejercicio y nutrición 
          para que rindas al máximo durante tus estudios.
        </p>

        {/* CTA */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          
          {/* AQUÍ FALTABA ABRIR LA ETIQUETA <a */}
          <a 
            href="#descargar"
            style={{
              padding: '16px 32px',
              backgroundColor: '#2E7D52',
              color: 'white',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 24px rgba(46, 125, 82, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(46, 125, 82, 0.4)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(46, 125, 82, 0.3)'
            }}
          >
            📱 Descargar gratis
          </a>
          
          <a 
            href="#funciones"
            style={{
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#2E7D52',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '2px solid #E8F5EC',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = '#2E7D52')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = '#E8F5EC')}
          >
            Ver funciones
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { valor: '4', label: 'Micro-hábitos' },
            { valor: '100%', label: 'Gratuita' },
            { valor: '24/7', label: 'Monitoreo' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 900,
                color: '#2E7D52',
                letterSpacing: '-1px',
              }}>{stat.valor}</div>
              <div style={{
                fontSize: '13px',
                color: '#9AB0A0',
                fontWeight: 500,
                marginTop: '2px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}