export default function Download() {
  return (
    <section id="descargar" style={{
      padding: '100px 24px',
      backgroundColor: '#F0F5F0',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#2E7D52',
        borderRadius: '32px',
        padding: 'clamp(40px, 8vw, 72px) clamp(24px, 6vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Decoración fondo */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(52, 201, 122, 0.15)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-30px',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          backgroundColor: 'rgba(52, 201, 122, 0.1)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-1.5px',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}>
            Empieza hoy.<br />Tu bienestar no puede esperar.
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '36px',
            lineHeight: 1.6,
            maxWidth: '420px',
            margin: '0 auto 36px',
          }}>
            Únete a los estudiantes que ya cuidan su salud con ErgoHabit. 
            Gratis, sin anuncios, sin complicaciones.
          </p>

          {/* Botón descarga */}
          <div>
            <button
              disabled
              style={{
                padding: '18px 40px',
                backgroundColor: 'white',
                color: '#2E7D52',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                cursor: 'not-allowed',
                opacity: 0.9,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
              }}
            >
              📱 Descargar para Android
            </button>
            <p style={{
              marginTop: '12px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
            }}>
              Próximamente disponible — en desarrollo
            </p>
          </div>

          {/* Mini features */}
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap',
          }}>
            {['✓ Gratis', '✓ Sin anuncios', '✓ Funciona offline'].map((item) => (
              <span key={item} style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}