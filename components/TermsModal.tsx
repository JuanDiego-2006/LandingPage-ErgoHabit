'use client'
import React from 'react'
import { X } from 'lucide-react'

type TermsModalProps = {
  open: boolean
  onClose: () => void
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 800,
  color: '#2E7D52',
  marginTop: '28px',
  marginBottom: '12px',
}

const mainTitleStyle: React.CSSProperties = {
  fontSize: 'clamp(22px, 4vw, 28px)',
  fontWeight: 900,
  color: '#1A3A2A',
  marginBottom: '8px',
  letterSpacing: '-0.5px',
}

const bulletStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#1A3A2A',
  lineHeight: 1.7,
  marginBottom: '10px',
  paddingLeft: '8px',
}

const subsectionStyle: React.CSSProperties = {
  fontSize: '15px',
  fontWeight: 700,
  color: '#1A3A2A',
  marginTop: '20px',
  marginBottom: '10px',
}

export default function TermsModal({ open, onClose }: TermsModalProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(26, 58, 42, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#F0F5F0',
          borderRadius: '24px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
          border: '1px solid rgba(46, 125, 82, 0.15)',
        }}
      >
        {/* Encabezado */}
        <div style={{
          padding: '24px 28px 16px',
          borderBottom: '1px solid rgba(46, 125, 82, 0.12)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px 24px 0 0',
        }}>
          <div>
            <h2 id="terms-title" style={mainTitleStyle}>
              Términos y Condiciones de Uso
            </h2>
            <p style={{ fontSize: '13px', color: '#6B8F71' }}>
              ErgoHabit · Proyecto Integrador Académico
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#6B8F71',
              padding: '4px',
              borderRadius: '8px',
              flexShrink: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#2E7D52')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B8F71')}
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido scrollable */}
        <div style={{
          padding: '20px 28px 32px',
          overflowY: 'auto',
        }}>
          <p style={subsectionStyle}>1. Información General</p>
          <p style={bulletStyle}>● La aplicación móvil &quot;Ergohabit&quot; es un Proyecto Integrador de carácter estrictamente académico y de investigación.</p>
          <p style={bulletStyle}>● El equipo desarrollador se deslinda de cualquier responsabilidad derivada del uso de la aplicación.</p>
          <p style={bulletStyle}>● El objetivo principal de la aplicación es la gestión de hábitos saludables y el uso correcto de los dispositivos móviles.</p>

          <p style={subsectionStyle}>2. Requisitos y Elegibilidad del Usuario</p>
          <p style={bulletStyle}>● El uso de la aplicación está restringido a usuarios que cuenten con un dispositivo móvil con sistema operativo Android. 4</p>
          <p style={bulletStyle}>● Se excluyen dispositivos Android con versiones de software obsoletas, así como usuarios de sistemas operativos diferentes, como iOS.</p>
          <p style={bulletStyle}>● La aplicación está diseñada para una población con un rango de edad de entre 16 y 50 años.</p>
          <p style={bulletStyle}>● Las personas menores de 16 años o mayores de 50 años están excluidas del uso de la plataforma.</p>
          <p style={bulletStyle}>● Para utilizar la aplicación, el usuario debe presentar un uso cotidiano y prolongado del dispositivo móvil.</p>
          <p style={bulletStyle}>● Es un requisito indispensable que el usuario otorgue su consentimiento explícito para interactuar con la aplicación y evaluar sus funciones.</p>

          <p style={subsectionStyle}>3. Funciones y Estándares de Calidad</p>
          <p style={bulletStyle}>● Ergohabit proporciona alarmas de postura, registro de hábitos y notificaciones de pausas activas.</p>
          <p style={bulletStyle}>● Estas funciones están respaldadas por la Norma ISO 10075 para mitigar el agotamiento, prevenir la fatiga, la monotonía y el estrés mental tras periodos prolongados de trabajo continuo.</p>
          <p style={bulletStyle}>● El software opera bajo la Norma ISO 25010, la cual garantiza que las funciones descritas operen estrictamente según los requisitos planteados para el bienestar del usuario.</p>
          <p style={bulletStyle}>● La interfaz está diseñada bajo las normativas ISO 9241-11 e ISO 9241-210, enfocándose en la usabilidad, eficiencia de flujos, prevención de la fatiga cognitiva y el diseño centrado en el usuario.</p>

          <p style={subsectionStyle}>4. Control del Usuario</p>
          <p style={bulletStyle}>● El usuario mantiene el control sobre su experiencia y tiene el poder de pausar el rastreo de sus hábitos en cualquier momento.</p>

          <h3 style={{ ...mainTitleStyle, marginTop: '36px', fontSize: 'clamp(20px, 3.5vw, 24px)' }}>
            Aviso de Privacidad
          </h3>

          <p style={subsectionStyle}>1. Naturaleza del Proyecto</p>
          <p style={bulletStyle}>● Ergohabit es una aplicación sin fines comerciales.</p>
          <p style={bulletStyle}>● Toda la relación del usuario con la aplicación se rige mediante acuerdos claros de uso académico y escolar de investigación.</p>
          <p style={bulletStyle}>● Toda la información recabada se orienta estrictamente al autoaprendizaje del alumno y al análisis estadístico escolar sin lucros.</p>
          <p style={bulletStyle}>● La aplicación no realiza rastreo externo ni venta de datos.</p>

          <p style={subsectionStyle}>2. Datos Recopilados y Minimización (Norma ISO 29100)</p>
          <p style={bulletStyle}>● La aplicación recopila Información de Identificación Personal (PII), la cual incluye correo electrónico, foto de perfil y métricas de comportamiento diario.</p>
          <p style={bulletStyle}>● Siguiendo el principio de minimización de datos, ErgoHabit solo procesa los datos cervicales estrictamente necesarios para el análisis de postura y la mínima información de usuario.</p>
          <p style={bulletStyle}>● Para el cálculo de la postura, la aplicación requiere mantener encendida la cámara del dispositivo para su análisis en tiempo real sin embargo, no se captura, almacena ni guarda ninguna fotografía o imagen durante este proceso.</p>
          <p style={bulletStyle}>● La aplicación no accede en ningún momento a la geolocalización ni a los contactos del usuario.</p>

          <p style={subsectionStyle}>3. Seguridad y Protección de Datos (Normas ISO 27001 e ISO 27701)</p>
          <p style={bulletStyle}>● La información recopilada es tratada con la máxima confidencialidad técnica para proteger la Información de Identificación Personal (PII).</p>
          <p style={bulletStyle}>● El backend de la aplicación cuenta con una arquitectura segura definida por la Norma ISO/IEC 27001 la cual garantiza la confidencialidad, integridad y disponibilidad de las métricas físicas, hábitos y horarios de los usuarios.</p>
          <p style={bulletStyle}>● El tratamiento ético de los datos se controla mediante el establecimiento de un Sistema de Gestión de Información de Privacidad (PIMS), conforme a la Norma ISO 27701.</p>
          <p style={bulletStyle}>● Una vez concluido el periodo de prueba de 25 días del proyecto, toda la información recabada será eliminada de manera definitiva.</p>

          <p style={subsectionStyle}>4. Consentimiento y Elección</p>
          <p style={bulletStyle}>● La aplicación implementa un diálogo de consentimiento explícito al inicio de su ejecución.</p>
          <p style={bulletStyle}>● El usuario tiene derecho a elegir su nivel de participación, pudiendo retirar su consentimiento o pausar el rastreo de información en cualquier momento.</p>
        </div>

        {/* Pie del modal */}
        <div style={{
          padding: '16px 28px',
          borderTop: '1px solid rgba(46, 125, 82, 0.12)',
          backgroundColor: '#FFFFFF',
          borderRadius: '0 0 24px 24px',
          textAlign: 'center',
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '12px 32px',
              backgroundColor: '#2E7D52',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}
