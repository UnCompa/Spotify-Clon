import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume) => set((state) => ({ volume })),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  playSong: (song, songs) => {
    set((state) => {
      if (state.currentMusic.song === song && state.isPlaying) {
        // Si la canción que se está reproduciendo es la misma que la nueva canción y ya está reproduciéndose,
        // pausar la reproducción.
        return { isPlaying: false };
      } else {
        // Si la nueva canción es diferente o la reproducción está en pausa, reproducir la nueva canción.
        const { playlist } = state.currentMusic
        const albumId = song?.albumId || null;
        const updatedPlaylist = { ...playlist, id: albumId }; // Actualizar el id de la playlist con albumId
        return { currentMusic: { ...state.currentMusic, song, songs, playlist: updatedPlaylist }, isPlaying: true };
      }
    });
  },
}));
