'use client'
import useSWR from 'swr';

import Bars from './bars';

const PlayBack = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify/now-playing', fetcher);

  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 leading-tight ml-4 mt-2">
      {data?.image ? (
        <a href={data.url} target="_blank">
          <img src={data.image}  alt="Cover Art" className="w-14 h-14 rounded" />
        </a>
      ) : null}

      <div className="grid grid-rows-[auto_auto_auto] gap-y-1 font-mono">
        <span className="opacity-50 text-xs">
          {data?.isPlaying ? "CURRENTLY LISTENING TO" : " OFFLINE | LAST PLAYED SONG"}
        </span>
        
        <div className="flex items-center gap-2 w-full">
          {data?.isPlaying ? (
            <div className="shrink-0">
              <Bars />
            </div>
                
          ) : null}

          <span className="font-bold text-md flex-1 min-w-0 truncate">
            {data?.title ?? "loading..."}
          </span>
        </div>

        <span className="text-xs truncate">{data?.artist ?? "loading..."}</span>
      </div>
    </div>
  );
}

export default PlayBack;