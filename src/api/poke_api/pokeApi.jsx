import axios from 'axios';
const BACK_URL = process.env.REACT_APP_BACK_END_URL;
const PokeAPI = {

    async getPokeInfo(page) {
        
        return await axios.get(BACK_URL,{params:{
            offset : page
           
        }});
    }, 
    // 도감을 계속해서 받아와주는 함수 (인피니티 쿼리 사)
    
    async getPokeSelectIDorName(NameOrId) {
        const url = BACK_URL+`/${NameOrId}`
        return await axios.get(url);
    },
    
    // 지정된 아이디로 또는 아이디로 검색
};

export default PokeAPI;
