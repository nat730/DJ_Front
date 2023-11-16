import React from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface SongListProps {
  songs: Song[];
  onSelectSong: (id: number) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onSelectSong }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id} onClick={() => onSelectSong(song.id)}>
        {song.title} - {song.artist}
      </li>
    ))}
  </ul>
);

export default SongList;
