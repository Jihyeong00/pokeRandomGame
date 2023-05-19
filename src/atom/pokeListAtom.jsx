import { atom, selector } from 'recoil';
import data from '../model/dummyData';

export const PokeListAtom = atom({
  key: 'PokeListAtom',
  default: [...data],
});

export const TotalListLength = selector({
  key: 'TotalListLength',
  get: ({ get }) => {
    const PokeList = get(PokeListAtom);
    return PokeList.length;
  },
});
