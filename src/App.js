import Navbar from './Views/navbar/navbar';
import styled from 'styled-components';

const AppStyle = styled.div`
  height: 100vh;
  background-color: #f0ecec;
`

function App() {
  return (
    <AppStyle>
      <Navbar />
    </AppStyle>
  );
}

export default App;
