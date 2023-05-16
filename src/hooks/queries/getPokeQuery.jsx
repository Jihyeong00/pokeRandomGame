import { useInfiniteQuery, useQuery } from 'react-query';
import { QUERY_KEY } from '../../consts/querykey';
import { queryConfig } from './@config';
import PokeApi from '../../api/poke_api/pokeApi';
import axios from 'axios';

export const usePokeInfoInfinity = () => {
  const res = useInfiniteQuery(
    [QUERY_KEY.GET_POKE_INFO],
    ({ pageParam = 0 }) => PokeApi.getPokeInfo(pageParam),
    {
      ...queryConfig,
      getNextPageParam: (lastPage) => {
        console.log('Data Loading...');
        if (!lastPage.isLast) return parseInt(lastPage.config.params.offset) + 35;
        return undefined;
      },
    }
  );
  return res;
};

export const usePokeInfoToKeyWord = (keyword) => {
  const res = useQuery(
    [QUERY_KEY.GET_POKE_KEYWORD, keyword],
    () => PokeApi.getPokeSelectIDorName(keyword),
    queryConfig
  );
  return res;
};

export const useUrlSearchPokeInfo = (url) => {
  const res = useQuery([QUERY_KEY.GET_URL, url], () => axios.get(url), queryConfig);
  return res;
};

export const useKeyWordMorePokeInfo = (url) => {
  const res = useQuery(
    [QUERY_KEY.GTE_POKE_MORE, url],
    () => PokeApi.getPokeMoreInfo(url),
    queryConfig
  );
  return res;
};
