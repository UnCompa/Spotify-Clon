import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [0] },
  volume: 1,
  loading: false, // Agregamos la propiedad loading
  setVolume: (volume) => set((state) => ({ volume })),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setLoading: (loading) => set({ loading }), // Función para actualizar el estado de loading
  playSong: (song, songs) => {
    set((state) => {
      if (state.currentMusic.song === song && state.isPlaying) {
        return { isPlaying: false };
      } else {
        const { playlist } = state.currentMusic;
        const albumId = song?.albumId || null;
        const updatedPlaylist = { ...playlist, id: albumId };
        return {
          currentMusic: {
            ...state.currentMusic,
            song,
            songs,
            playlist: updatedPlaylist,
          },
          isPlaying: true,
          loading: false, // Aseguramos que loading sea false cuando se reproduce una canción
        };
      }
    });
  },
}));
