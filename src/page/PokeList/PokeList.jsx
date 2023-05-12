import { uuid } from "uuidv4";
import { usePokeInfoInfinity } from "../../hooks/queries/getPokeQuery";
import PokeCard from "./components/Pokecard";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);

  const res = usePokeInfoInfinity();
    const {ref, inView} = useInView()
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

  useEffect(()=>{
    if(!inView){
        return
    }
    res.fetchNextPage()
  },[inView])

  return (
    <>
      <div>:)</div>
      <div className="p-2">
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-2' >
        {pokeList.map((poke,i) => (
            <PokeCard key={i}  poke={poke} />
            ))}
        </ul>
      </div>
      <div ref={ref}></div>
    </>
  );
};

export default PokeList;