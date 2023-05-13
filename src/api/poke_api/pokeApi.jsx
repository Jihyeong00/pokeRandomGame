import { Axios } from '../core';
const POKE = '/pokemon';
const SPECIES = '/pokemon-species';
const PokeAPI = {
  async getPokeInfo(page) {
    return await Axios.get(POKE, {
      params: {
        offset: page,
        limit: 35,
      },
    });
  },

  async getPokeMoreInfo(keyWord) {
    return await Axios.get(SPECIES + `/${keyWord}`);
  },
  // 도감을 계속해서 받아와주는 함수 (인피니티 쿼리 사)

  async getPokeSelectIDorName(NameOrId) {
    const url = POKE + `/${NameOrId}`;
    return await Axios.get(url);
  },

  // 지정된 아이디로 또는 아이디로 검색
};

export default PokeAPI;
