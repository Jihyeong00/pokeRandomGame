import { styled } from "styled-components"
import { usePokeInfoToKeyWord } from "../../../hooks/queries/getPokeQuery"
import typeColors from "../../../style/type"

const PokeCard = ({poke}) => {


    const res = usePokeInfoToKeyWord(poke.name)

    if(res.isSuccess){
        const {front_default} = res.data.data.sprites
        const {name} = res.data.data
        
        
        return (
        <li className="flex justify-center items-center flex-col relative">
            
            <S.Container className="flex justify-center items-center flex-col">
            <div >
                <img src={front_default}/>
            </div>
            <div className="flex gap-1">
                {res.data.data.types.map((type)=> <S.TypeBox {...type}>{type.type.name}</S.TypeBox>)}
            </div>
            <div className="">
                {name}
            </div>
            </S.Container>
            
            <S.BackWhite>
            </S.BackWhite>
        </li>)
    }
        
}

export default PokeCard

const Number= styled.div`
    
`

const BackWhite = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.7);
    z-index: 10;
`
const Container = styled.div`
    position: relative;
    z-index: 20;
`

const TypeBox = styled.div`
    color: ${(type) => typeColors[type.type.name].color };
    background: ${(type) => typeColors[type.type.name].background };
    border-radius: 4px;
    padding: 4px;
    font-size: 12px;
    margin   : 0px 4px ;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-transform: capitalize;
    
`
const S = {
    TypeBox, Container, BackWhite, Number
}