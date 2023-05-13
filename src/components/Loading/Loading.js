import { Background, LoadingText } from '../../style/style';

const Loading = () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src="assets/loading/RoadingSpinner-1s-200px.gif" alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;
