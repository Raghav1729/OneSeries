import { META } from 'consumet/providers';
import * as React from 'react';

import { errorLog } from 'utils/logger';

import { GetApi, useApiUrl } from '../api';

export const useGetDiscoverMovie = (movieID: number) => {
  const apiUrl = useApiUrl();

  const handleData = React.useCallback(
    async ({ callback, params }: Omit<GetApi, 'type'>) => {
      try {
        const tmdb = new META.TMDB();
        //const info = await tmdb.fetchMediaInfo(movieID.toString(), 'tv');
        //const servers = await tmdb.fetchEpisodeServers('2899', 'tv/watch-the-flash-39535');
        const sources = await tmdb.fetchEpisodeSources('2899', 'tv/watch-the-flash-39535');
        callback(sources);
      } catch (error) {
        errorLog(error);
      }
    },
    [apiUrl]
  );

  return handleData;
};
