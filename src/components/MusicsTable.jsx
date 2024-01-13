import { usePlayerStore } from "../store/playerStore";
import React, { useCallback } from "react";
import { Pause, Play } from "./Player";

const MusicsTable = ({ songs }) => {
  const { playSong, isPlaying, currentMusic } = usePlayerStore();

  const handlePlayClick = useCallback(
    (song, songs) => {
      playSong(song, songs);
    },
    [playSong]
  );
  // const handlePlayClick = (song, songs) => {
  //   playSong(song, songs);
  // };

  return (
    <div className="grid grid-cols-spotify gap-y-2 text-left text-white h-full w-full">
      <div className="col-span-1 px-4 py-2 font-light w-1 lg:w-full">#</div>
      <div className="col-span-1 px-4 py-2 font-light w-full lg:w-1/1">
        Canciones
      </div>
      <div className="col-span-1 px-4 py-2 font-light w-16 lg:w-full">Album</div>
      <div className="col-span-1 px-4 py-2 font-light w-24 lg:w-full">Duracion</div>
      <div className="col-span-1 px-4 py-2 font-light w-24 lg:w-full">Acciones</div>
      {songs.map((song, index) => (
        <React.Fragment key={index}>
          <div className="text-gray-300 text-sm font-light transition duration-300">
            <div className="p-2">
              <div className="text-white font-normal">{index + 1}</div>
            </div>
          </div>
          <div className=" text-gray-300 text-sm font-light transition duration-300">
            <div className="p-2 flex w-32 sm:w-36 lg:w-full">
              <picture className="flex-none aspect-square h-12 w-12">
                <img
                  src={song.image}
                  alt={song.title}
                  loading="lazy"
                  className="w-10 h-10 object-cover"
                />
              </picture>
              <div className="flex flex-col w-full px-2">
                <h3 className="text-white text-sm font-normal truncate pr-8">
                  {song.title}
                </h3>
                <span>{song.artists.join(", ")}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center px-4 text-gray-300 text-sm font-light transition duration-300">
            <div className="text-white">{song.album}</div>
          </div>
          <div className=" text-gray-300 text-sm font-light transition duration-300">
            <div className="p-2">
              <div className="ml-4">{song.duration}</div>
            </div>
          </div>
          <div className="text-gray-300 text-sm font-light transition duration-300">
            <div className="p-2 flex items-center justify-center w-16">
              <button
                className={`text-black rounded-full h-8 w-8 ml-4 grid place-content-center transition-colors duration-200 hover:bg-green-500 hover:shadow-lg ${
                  isPlaying && song === currentMusic.song
                    ? "bg-green-500"
                    : "bg-white"
                }`}
                onClick={() => handlePlayClick(song, songs)}
              >
                {isPlaying && song === currentMusic.song ? <Pause /> : <Play />}
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MusicsTable;
