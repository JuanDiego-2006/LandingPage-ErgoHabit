const habitos = [
  {
    emoji: '💧',
    nombre: 'Agua',
    meta: 'Meta: 8 vasos',
    pct: 75,
    color: '#29B6F6',
    bg: '#E3F2FD',
  },
  {
    emoji: '🌙',
    nombre: 'Sueño',
    meta: 'Meta: 8 horas',
    pct: 88,
    color: '#7C6FF7',
    bg: '#EEF0FF',
  },
  {
    emoji: '🏃',
    nombre: 'Ejercicio',
    meta: 'Meta: 8 km',
    pct: 67,
    color: '#34C97A',
    bg: '#E8F5EC',
  },
  {
    emoji: '🍎',
    nombre: 'Nutrición',
    meta: 'Meta: 3 comidas',
    pct: 67,
    color: '#F5A623',
    bg: '#FFF4E0',
  },
]

export default function Habits() {
  return (
    <section id="habitos" style={{
      padding: '100px 24px',
      backgroundColor: '#F0F5F0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
        gap: '60px',
        alignItems: 'center',
      }}>

        {/* Texto */}
        <div>
          <span style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#2E7D52',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>Micro-hábitos</span>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 900,
            color: '#1A3A2A',
            letterSpacing: '-1.5px',
            marginTop: '12px',
            marginBottom: '20px',
            lineHeight: 1.15,
          }}>
            4 hábitos.<br />
            <span style={{ color: '#34C97A' }}>Resultados reales.</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6B8F71',
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '420px',
          }}>
            Cada micro-hábito está diseñado para ser simple pero poderoso. 
            Pequeños cambios diarios que se acumulan en grandes resultados académicos.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Sin complicaciones — solo toca y registra', 'Recordatorios inteligentes a tu horario', 'Estadísticas semanales de tu progreso'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5EC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  flexShrink: 0,
                }}>✓</div>
                <span style={{ fontSize: '14px', color: '#6B8F71' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards de hábitos estilo app */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '28px',
          padding: '24px',
          boxShadow: '0 8px 48px rgba(0,0,0,0.06)',
        }}>
          {/* Header app */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '11px', color: '#9AB0A0', fontWeight: 600, letterSpacing: '0.06em' }}>
              MICRO-HÁBITOS · 1 DE 4 COMPLETADOS
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {habitos.map((h) => (
              <div
                key={h.nombre}
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  backgroundColor: '#FAFAFA',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: h.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}>
                  {h.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#1A3A2A' }}>{h.nombre}</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: h.color }}>{h.pct}%</span>
                  </div>
                  <div style={{
                    height: '6px',
                    backgroundColor: '#EEEEEE',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${h.pct}%`,
                      backgroundColor: h.color,
                      borderRadius: '3px',
                      transition: 'width 0.8s ease',
                    }} />
                  </div>
                  <span style={{ fontSize: '11px', color: '#9AB0A0', marginTop: '4px', display: 'block' }}>{h.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}