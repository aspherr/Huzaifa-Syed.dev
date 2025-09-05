import axios from 'axios';
import querystring from 'querystring';
import { NextResponse } from 'next/server';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;
 
const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

type SpotifyImage = { url: string };
type Artist = { name: string };
type Album = { name: string; artists: Artist[]; images: SpotifyImage[] };
type Track = {
  name: string;
  album: { name: string; albumn: Album, artists: Artist[]; images: SpotifyImage[] };
  external_urls?: { spotify?: string };
};

interface CurrentlyPlaying {
  is_playing: boolean;
  item: Track | null;
  currently_playing_type: 'track' | 'episode' | 'ad' | string;
}

interface RecentlyPlayed {
  items: Array<{ track: Track }>;
}

function toPayload(track: Track, isPlaying: boolean) {
  return {
    isPlaying,
    title: track?.name ?? null,
    album: track?.album?.name ?? null,
    artist: track?.album?.artists?.map(a => a.name).join(", ") ?? null,
    url: track?.external_urls?.spotify ?? null,
    image: track?.album?.images?.[0]?.url ?? null,
  };
}

const getAccessToken = async () => {
  const res = await axios.post<{access_token : string}>(
    TOKEN_ENDPOINT,
    querystring.stringify({
      grant_type: "refresh_token",
      refresh_token 
    }),

    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': "application/x-www-form-urlencoded",
      },
    }
  );

  return res.data.access_token;
};

const getActiveTrack = async () => {
  const access_token = await getAccessToken();
  
  return axios.get<CurrentlyPlaying>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentTrack = async () => {
  const access_token = await getAccessToken();
  
  return axios.get<RecentlyPlayed>(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET() {
  try {
    const response = await getActiveTrack();

    if (response.status === 204) {
      const recentRes = await getRecentTrack();
      
      if (recentRes.status === 200) {
        const track = recentRes.data?.items?.[0]?.track;
        return NextResponse.json(toPayload(track, false), { status: 200 });
      }
    }
    
    if (response.status === 200) {
      if (response.data?.currently_playing_type === 'track' && response.data.item) {
        return NextResponse.json(toPayload(response.data.item, response.data.is_playing), { status: 200 });
      }
  
      return null;
    }

  } catch (error) {
    console.error("Error with GET controller: ", error);
    return NextResponse.json({ message: "Internal server error", isPlaying: false }, { status: 500 });
  }
};