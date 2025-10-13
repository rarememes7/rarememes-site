export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Comic Sans MS, Marker Felt, sans-serif',
      padding: '20px'
    }}>
      <img
        src="/rarememes-intro.png.jpg"
        alt="Rare Memes Intro"
        style={{
          maxWidth: '90%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 0 25px rgba(0, 255, 128, 0.4)',
        }}
      />

      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        Witness history at{' '}
        <a
          href="https://pump.fun/profile/rarememes"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#00FFB2',
            textDecoration: 'underline',
            fontWeight: 'bold'
          }}
        >
          RareMemes
        </a>
      </p>
    </div>
  );
}
