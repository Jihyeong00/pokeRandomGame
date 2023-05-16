import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../components/layout';
import PokeList from '../page/PokeList/PokeList';
import SearchPoke from '../page/SearchPoke/SearchPoke';
import ErrorPage from '../page/Error/ErrorPage';

/**
 * 목표 1
 *
 * 도감
 * 포켓몬 리스트
 * 각각의 포켓몬의 사진과 이름, 상세정보 등을 보여준다.
 * 포켓몬은 스크롤을 할 경우 계속해서 보여준다. (인피니티 스크롤)
 * 포켓몬 이름과 번호를 통해서 검색이 가능하다.
 *
 * 목표 2
 *
 * 룰렛 게임
 * 돈 5000원 마다 뽑기를 할 수 있다. => 해당 돈보다 보유한 돈이 적을시 버튼 비활성화
 * 포켓몬을 랜덤으로 얻을시 이름을 작명할 수 있고 얻은 날짜를 저장해 보관한다.
 *
 * 목표 3
 *
 * 가방
 * 해당 플레이어가 가지고 있는 포켓몬들을 보여준다.
 * 상세정보 누를시 도감으로 이동이 된다.
 * 방출 버튼을 누를시 돈이 2000원이 추가가 된다.
 *
 * 커뮤니티 기능
 * 다른 트레이너들과 얘기를 할 수 있다. 본인이 올린 게시물일시 삭제버튼 활성화
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut />,
        children: [
            { path: '/document', element: <PokeList /> },
            { path: '/keyword', element: <SearchPoke /> },
            { path: '/sign', element: <SignPage /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

export default router;
