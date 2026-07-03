const pasos = [
  {
    num: '01',
    titulo: 'Descarga la app',
    descripcion: 'Disponible para Android. Instalación en menos de 2 minutos.',
    icon: '📲',
  },
  {
    num: '02',
    titulo: 'Configura tus metas',
    descripcion: 'Establece tu horario de sueño, meta de hidratación y actividad física.',
    icon: '🎯',
  },
  {
    num: '03',
    titulo: 'Activa el centinela',
    descripcion: 'El sensor monitorea tu postura automáticamente mientras estudias.',
    icon: '📡',
  },
  {
    num: '04',
    titulo: 'Construye el hábito',
    descripcion: 'Registra tus hábitos diarios y mantén tu racha. La constancia es todo.',
    icon: '🔥',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{
      padding: '100px 24px',
      backgroundColor: '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#2E7D52',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>Cómo funciona</span>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            color: '#1A3A2A',
            letterSpacing: '-1.5px',
            marginTop: '12px',
          }}>Empieza en 4 pasos</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {pasos.map((paso, i) => (
            <div key={paso.num} style={{ position: 'relative' }}>
              {/* Línea conectora */}
              {i < pasos.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '28px',
                  right: '-12px',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#E8F5EC',
                  zIndex: 0,
                }} className="connector-line" />
              )}
              <div style={{
                padding: '28px 24px',
                borderRadius: '20px',
                backgroundColor: '#F0F5F0',
                height: '100%',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#2E7D52',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px',
                }}>
                  {paso.icon}
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#34C97A',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                }}>PASO {paso.num}</div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1A3A2A',
                  marginBottom: '8px',
                }}>{paso.titulo}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6B8F71',
                  lineHeight: 1.6,
                }}>{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  )
}