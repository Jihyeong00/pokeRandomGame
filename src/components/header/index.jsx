import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (<header>
        <nav>
            <div>
                <div>
                <button className="bg-slate-400 m-2" onClick={()=> navigate('/document')}>목록</button>
                <button className="bg-slate-400 m-2">게임</button>
                </div>
                <form >
                <input type="text" id="searchPoke"/>
                <button>포켓몬 검색
                </button>

                </form>
            </div>
        </nav>

    </header>);
};

export default Header;
