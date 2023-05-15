import { usePokeInfoInfinity } from '../../hooks/queries/getPokeQuery';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import OnePokeCard from './components/one-poke-card';

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const res = usePokeInfoInfinity();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (res.data) {
      // 기존 데이터와 중복되지 않는 데이터만 추가
      const addedData = res.data.pages
        .map((page) => page.data.results)
        .flat()
        .filter((result) => !pokeList.find((poke) => poke.name === result.name));
      setPokeList((prevList) => [...prevList, ...addedData]);
    }
  }, [res.data]);

  useEffect(() => {
    if (!inView) {
      return;
    }
    res.fetchNextPage();
  }, [inView]);

  return (
    <>
      <div className="p-2 pt-10 ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-3">
          {pokeList.map((poke) => (
            <OnePokeCard
              parentsSuccess={res.isLoading}
              key={Math.floor(Math.random() * 1000000)}
              poke={poke}
            />
          ))}
          <div ref={ref}></div>
        </ul>
      </div>
    </>
  );
};

export default PokeList;
