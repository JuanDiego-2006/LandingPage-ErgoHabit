'use client';
import React from 'react';

export default function Team() {
  // Aquí puedes editar los nombres de tus compañeros de equipo
  const team = [
    { name: 'Juan Diego', role: 'Líder Técnico & Desarrollador Android', emoji: '👨‍💻' },
    { name: 'Ailyn Monserrat', role: 'Diseñador UI/UX', emoji: '🎨' },
    { name: 'Gisella Vianey', role: 'Desarrollador Backend', emoji: '⚙️' }
  ];

  return (
    <section id="equipo" style={{ 
      padding: '100px 24px', 
      backgroundColor: '#FFFFFF' // Fondo blanco
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Etiqueta */}
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
          marginBottom: '24px',
          letterSpacing: '0.02em'
        }}>
          👋 NUESTRO EQUIPO
        </div>

        {/* Título */}
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: 900, 
          color: '#1A3A2A', 
          marginBottom: '20px',
          letterSpacing: '-1px'
        }}>
          Los creadores de <span style={{ color: '#2E7D52' }}>ErgoHabit</span>
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B8F71', 
          maxWidth: '600px', 
          margin: '0 auto 60px', 
          lineHeight: 1.6 
        }}>
          Estudiantes universitarios aplicando la tecnología para desarrollar soluciones reales que mejoren la vida académica.
        </p>

        {/* Tarjetas del Equipo */}
        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          {team.map((member) => (
            <div key={member.name} style={{ 
              backgroundColor: '#F0F5F0', 
              padding: '40px 32px', 
              borderRadius: '24px', 
              flex: '1 1 280px', 
              maxWidth: '320px', 
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(46, 125, 82, 0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#E8F5EC', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '40px',
                margin: '0 auto 20px'
              }}>
                {member.emoji}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1A3A2A', marginBottom: '8px' }}>{member.name}</h3>
              <p style={{ fontSize: '15px', color: '#6B8F71', fontWeight: 500 }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}