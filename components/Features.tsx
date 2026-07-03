const features = [
  {
    icon: '📱',
    titulo: 'Centinela Ergonómico',
    descripcion: 'Monitoreo en tiempo real de tu postura con el sensor del teléfono. Recibe alertas antes de que el daño ocurra.',
    color: '#E8F5EC',
    iconColor: '#2E7D52',
  },
  {
    icon: '💧',
    titulo: 'Hidratación Diaria',
    descripcion: 'Registra tu consumo de agua con un tap. Alcanza tu meta diaria de 2,450 ml y mantén tu cerebro activo.',
    color: '#E3F2FD',
    iconColor: '#29B6F6',
  },
  {
    icon: '🌙',
    titulo: 'Gestión de Sueño',
    descripcion: 'Configura tu horario de sueño ideal. Nota: 8 horas de descanso mejoran tu memoria',
    color: '#EEF0FF',
    iconColor: '#7C6FF7',
  },
  {
    icon: '🏃',
    titulo: 'Actividad Física',
    descripcion: 'Sigue tu progreso diario en kilómetros y calorías. Pequeñas caminatas hacen grandes diferencias.',
    color: '#E8F5EC',
    iconColor: '#34C97A',
  },
  {
    icon: '🍎',
    titulo: 'Nutrición Inteligente',
    descripcion: 'Configura horarios de comida y recibe recordatorios. Come a tiempo para rendir al máximo en tus estudios.',
    color: '#FFF4E0',
    iconColor: '#F5A623',
  },
  {
    icon: '🏆',
    titulo: 'Racha de Hábitos',
    descripcion: 'Mantén tu racha diaria y acumula puntos. La constancia es el secreto del estudiante exitoso.',
    color: '#FFF8F0',
    iconColor: '#F5A623',
  },
]

export default function Features() {
  return (
    <section id="funciones" style={{
      padding: '100px 24px',
      backgroundColor: '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#2E7D52',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>Funciones</span>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            color: '#1A3A2A',
            letterSpacing: '-1.5px',
            marginTop: '12px',
            marginBottom: '16px',
          }}>Todo lo que necesitas,<br />en una sola app</h2>
          <p style={{
            fontSize: '17px',
            color: '#6B8F71',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Diseñada específicamente para estudiantes que quieren cuidar su salud sin complicaciones.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {features.map((f) => (
            <div
              key={f.titulo}
              style={{
                padding: '28px',
                borderRadius: '20px',
                backgroundColor: f.color,
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                marginBottom: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontSize: '17px',
                fontWeight: 700,
                color: '#1A3A2A',
                marginBottom: '8px',
              }}>{f.titulo}</h3>
              <p style={{
                fontSize: '14px',
                color: '#6B8F71',
                lineHeight: 1.6,
              }}>{f.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}