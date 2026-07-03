'use client';
import React from 'react';

export default function Purpose() {
  return (
    <section id="proposito" style={{ 
      padding: '80px 24px', 
      backgroundColor: '#F0F5F0' // Fondo verde clarito
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        textAlign: 'center', 
        backgroundColor: '#2E7D52', // Verde primario de tu app
        borderRadius: '32px', 
        padding: '64px 32px', 
        boxShadow: '0 20px 40px rgba(46, 125, 82, 0.2)' 
      }}>
        
        {/* Etiqueta */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '8px 16px', 
          backgroundColor: 'rgba(255, 255, 255, 0.15)', 
          borderRadius: '100px', 
          fontSize: '13px', 
          fontWeight: 700, 
          color: '#FFFFFF', 
          marginBottom: '32px',
          letterSpacing: '0.05em'
        }}>
          🎯 NUESTRO PROPÓSITO
        </div>
        
        {/* Mensaje principal */}
        <h2 style={{ 
          fontSize: 'clamp(28px, 4vw, 40px)', 
          fontWeight: 900, 
          color: '#FFFFFF', 
          marginBottom: '24px', 
          lineHeight: 1.3,
          letterSpacing: '-1px'
        }}>
          Usar la tecnología para cuidar de ti, <br/>no para distraerte.
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          color: 'rgba(255, 255, 255, 0.85)', 
          maxWidth: '650px', 
          margin: '0 auto', 
          lineHeight: 1.7 
        }}>
          ErgoHabit nace como un Proyecto Integrador con una misión clara: brindar a los estudiantes universitarios una herramienta invisible pero poderosa que corrija su postura en tiempo real y fomente hábitos saludables. Queremos que llegues a tu meta académica con salud y energía.
        </p>
      </div>
    </section>
  )
}