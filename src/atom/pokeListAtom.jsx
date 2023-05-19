import { atom, selector } from 'recoil';

export const PokeListAtom = atom({
  key: 'PokeListAtom',
  default: [],
});

export const TotalListLength = selector({
  key: 'TotalListLength',
  get: ({ get }) => {
    const PokeList = get(PokeListAtom);
    return PokeList.length;
  },
});
