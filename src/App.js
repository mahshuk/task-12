
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLeft from './Components/includes/NavLeft';
import { styled } from 'styled-components';
import Tea from './Components/screens/Tea';
import Wallet from './Components/screens/Wallet';
import Graph from './Components/screens/Graph';
import Settings from './Components/screens/Settings';
import NavTop from './Components/includes/NavTop';
import Coffee from './Components/screens/Coffee';


function App() {
  return (
    <>
      <Container>
        <Router>
          <NavLeft />
          <SecContainer>
            <NavTop />
          <Routes>
            <Route  path="/" element={[<Coffee />]}/>
            <Route  path="/tea" element={[<Tea />]}/>
            <Route  path="/wallet" element={[<Wallet />]}/>
            <Route  path="/graph" element={[<Graph />]}/>
            <Route  path="/settings" element={[<Settings />]}/>
          </Routes>
          </SecContainer>
        </Router>
      </Container>
    </>
    
  );
}

const Container = styled.div`
display: flex;

`
const SecContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
`

export default App;

