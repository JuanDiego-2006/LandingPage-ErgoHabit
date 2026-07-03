'use client';
import React from 'react';

export default function Problem() {
  return (
    <section id="problema" style={{ 
      padding: '100px 24px', 
      backgroundColor: '#FFFFFF' // Fondo blanco para contrastar con el Hero
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Título de la sección */}
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: 900, 
          color: '#1A3A2A', 
          marginBottom: '20px',
          letterSpacing: '-1px'
        }}>
          El problema de estudiar <span style={{ color: '#E53935' }}>sin pausas</span>
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B8F71', 
          maxWidth: '600px', 
          margin: '0 auto 60px', 
          lineHeight: 1.6 
        }}>
          Pasamos más de 8 horas al día frente a una pantalla. Esto está destruyendo nuestra salud y rendimiento sin que nos demos cuenta.
        </p>

        {/* Tarjetas de problemas */}
        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          {[
            { icon: '💥', title: 'Dolor Lumbar', desc: 'El 70% de los estudiantes sufre de dolores de espalda por mantener una mala postura prolongada.' },
            { icon: '🥱', title: 'Fatiga Mental', desc: 'La falta de pausas activas y mala hidratación reduce drásticamente la concentración.' },
            { icon: '📉', title: 'Bajo Rendimiento', desc: 'Los malos hábitos de sueño y nutrición afectan directamente las calificaciones y la energía.' }
          ].map((item) => (
            <div key={item.title} style={{ 
              backgroundColor: '#F0F5F0', 
              padding: '40px 32px', 
              borderRadius: '24px', 
              flex: '1 1 300px', 
              maxWidth: '340px', 
              textAlign: 'left',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1A3A2A', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', color: '#6B8F71', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}