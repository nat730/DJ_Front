import React from 'react';

interface MusiqueItemProps {
  titre: string;
  lien: string;
  fav: boolean;
}

const MusiqueItem: React.FC<MusiqueItemProps> = ({ titre, lien, fav }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(lien);
    alert('Lien copié dans le presse-papiers !');
  };

  return (
    <div>
      <h3>{titre}</h3>
      <p>Lien: {lien}</p>
      <span onClick={handleCopyLink} style={{ cursor: 'pointer' }}>
        Favori: {fav ? '★' : '☆'}
      </span>
    </div>
  );
};

export default MusiqueItem;