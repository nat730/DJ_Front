import React from 'react';

interface MusiqueCardProps {
  titre: string;
  prenom: string;
  nom: string;
  fav: boolean;
  couleur: string;
}

const MusiqueCard: React.FC<MusiqueCardProps> = ({ titre, prenom, nom, fav, couleur }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: couleur,
    color: 'white',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const starStyle: React.CSSProperties = {
    color: fav ? 'yellow' : 'gray',
  };

  return (
    <div style={cardStyle}>
      <div>
        <h3>{titre}</h3>
        <p>{prenom} {nom}</p>
      </div>
      <div>
        <span style={starStyle}>★</span>
      </div>
    </div>
  );
};

export default MusiqueCard;
