function Card({ title, children }) {
  const cardStyle = {
    width: 'fit-content',
    margin: '20px',
    padding: '20px',
    border: '1px solid #aaa',
    borderRadius: '20px',
    background: '#fff'
  };

  const cardContentStyle = {
    textAlign: 'center'
  };

  const avatarStyle = {
    margin: '10px',
    borderRadius: '50%',
    width: '70px',
    height: '70px'
  };

  const titleStyle = {
    margin: '5px',
    padding: '0',
    fontSize: '24px'
  };

  return (
    <div style={cardStyle}>
      <div style={cardContentStyle}>
        <h1 style={titleStyle}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          style={{
            margin: '10px',
            borderRadius: '50%',
            width: '70px',
            height: '70px'
          }}
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
        />
      </Card>
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
