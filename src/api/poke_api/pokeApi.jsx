import { Axios } from './@core';
const PokePATH = '/pokemon';
const PokeAPI = {
    async getPokeInfo(keyword) {
        return Axios.get(PokePATH + keyword);
    },
};

export default PokeAPI;
