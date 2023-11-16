import React, { useEffect, useState } from 'react';
import MusiqueCard from './MusiqueCard';

interface Musique {
  id: number;
  attributes: {
    titre: string;
    chanteur: {
      data: {
        attributes: {
          nom: string;
          prenom: string;
          date_de_naissance: string;
        };
      };
    };
    fav: boolean;
    link: string;
    date_de_sortie: string;
    couleur: string;
  };
}

const Acceuil = () => {
  const [chanteurs, setChanteurs] = useState<string[]>([]);
  const [musiques, setMusiques] = useState<Musique[]>([]);
  const [newMusique, setNewMusique] = useState({
    titre: '',
    link: '',
    chanteur: '',
    fav: false,
    date_de_sortie: '',
    color: '#000000',
  });

  const [isAddingMusique, setIsAddingMusique] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/api/musiques?populate=*');
      const { data } = await response.json();
      console.log(data);
      setMusiques(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchChanteurs = async () => {
      const response = await fetch('http://localhost:1337/api/chanteurs');
      const data = await response.json();
      console.log("chanteurs request", data);

      setChanteurs(data.data);
    };

    fetchChanteurs();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const checked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined;
    setNewMusique((prevMusique) => ({
      ...prevMusique,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://localhost:1337/api/musiques', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: newMusique,
      }),
    });

    if (response.ok) {
      const fetchData = async () => {
        const response = await fetch('http://localhost:1337/api/musiques?populate=*');
        const data = await response.json();
        console.log(data.data);
        setMusiques(data.data);
      };
      fetchData();

      setIsAddingMusique(false);
      setNewMusique({
        titre: '',
        link: '',
        chanteur: '',
        fav: false,
        date_de_sortie: '',
        color: '#000000',
      });
    }
  };

  const handleCancelAddMusique = () => {
    setIsAddingMusique(false);
  };

  const handleToggleFav = async (id: number) => {
    const response = await fetch(`http://localhost:1337/api/musiques/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          fav: !musiques.find((musique) => musique.id === id)?.attributes.fav,
        },
      }),
    });

    if (response.ok) {
      setMusiques((prevMusiques) =>
        prevMusiques.map((musique) =>
          musique.id === id
            ? {
                ...musique,
                attributes: {
                  ...musique.attributes,
                  fav: !musique.attributes.fav,
                },
              }
            : musique
        )
      );
    }
  };

  return (
    <div>
      <h2>Musiques</h2>
      <button onClick={() => setIsAddingMusique(true)}>+</button>

      {isAddingMusique && (
        <div>
          <h2>Ajouter une nouvelle musique</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Titre:
              <input type="text" name="titre" value={newMusique.titre} onChange={handleInputChange} />
            </label>
            <label>
              Lien:
              <input type="text" name="link" value={newMusique.link} onChange={handleInputChange} />
            </label>

            <label>
              Chanteur:
              <select name="chanteur" id="chanteur_value" onChange={handleInputChange} value={newMusique.chanteur}>
                <option value="">-- Veuillez choisir un chanteur --</option>
                {chanteurs.map((chanteur: any) => (
                  <option key={chanteur.id} value={chanteur.id}>
                    {chanteur.attributes.prenom} {chanteur.attributes.nom}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Favori:
              <input type="checkbox" name="fav" checked={newMusique.fav} onChange={handleInputChange} />
            </label>
            <label>
              Date de sortie:
              <input type="date" name="date_de_sortie" value={newMusique.date_de_sortie} onChange={handleInputChange} />
            </label>
            <label>
              Couleur:
              <input type="color" name="color" value={newMusique.color} onChange={handleInputChange} />
            </label>
            <button type="submit">Ajouter</button>
            <button type="button" onClick={handleCancelAddMusique}>
              Annuler
            </button>
          </form>
        </div>
      )}

      <div>
        <h3>Favoris</h3>
        <ul>
          {musiques
            .filter((musique) => musique.attributes.fav)
            .map((musique) => (
              <MusiqueCard
                key={musique.id}
                titre={musique.attributes.titre}
                prenom={musique.attributes.chanteur.data.attributes.prenom}
                nom={musique.attributes.chanteur.data.attributes.nom}
                fav={musique.attributes.fav}
                couleur={musique.attributes.couleur || '#000000'}
                onToggleFav={() => handleToggleFav(musique.id)}
                link={musique.attributes.link}
              />
            ))}
        </ul>
      </div>

      <div>
        <h3>Autres Musiques</h3>
        <ul>
          {musiques
            .map((musique) => (
              <MusiqueCard
                key={musique.id}
                titre={musique.attributes.titre}
                prenom={musique.attributes.chanteur.data.attributes.prenom}
                nom={musique.attributes.chanteur.data.attributes.nom}
                fav={musique.attributes.fav}
                couleur={musique.attributes.couleur || '#000000'}
                onToggleFav={() => handleToggleFav(musique.id)}
                link={musique.attributes.link}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Acceuil;
