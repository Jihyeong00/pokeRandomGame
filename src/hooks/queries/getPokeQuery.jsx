import { useQuery } from 'react-query';
import { QUERY_KEY } from '../../consts/querykey';
import PokeAPI from '../../api/poke_api/pokeAPI';
import { queryConfig } from './@config';

export const getPokeInfo = (keyword) => {
    const res = useQuery([QUERY_KEY.GET_POKE_INFO, key], () => PokeAPI.getPokeInfo(keyword), queryConfig);
    return res;
};
