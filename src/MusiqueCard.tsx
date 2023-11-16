  interface MusiqueCardProps {
    titre: string;
    prenom: string;
    nom: string;
    fav: boolean;
    couleur: string;
    onToggleFav: () => void;
    link: string;
  }

  const MusiqueCard: React.FC<MusiqueCardProps> = ({ titre, prenom, nom, fav, couleur, onToggleFav, link }) => {
    const isDarkColor = (color: string): boolean => {
      const hex = color.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    };

    const cardStyle: React.CSSProperties = {
      backgroundColor: couleur,
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: isDarkColor(couleur) ? 'white' : 'black',
      width: 'fit-content',
      cursor: 'pointer',
    };

    const starStyle: React.CSSProperties = {
      color: fav ? 'yellow' : 'gray',
      cursor: 'pointer',
    };

    const handleCopyLink = (event: React.MouseEvent) => {
      event.stopPropagation();
      navigator.clipboard.writeText(link);
    };

    return (
      <div style={cardStyle} onClick={onToggleFav}>
        <div>
          <h3>{titre}</h3>
          <p>{prenom} {nom}</p>
          <p>{link}</p>
        </div>
        <div>
          <span style={starStyle} onClick={handleCopyLink}>★</span>
        </div>
      </div>
    );
  };

  export default MusiqueCard;
