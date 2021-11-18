import Axios from './pages/Axios';
import ReactQuery from './pages/ReactQuery';
import TypeInheritance from './pages/TypeInheritance';
import Class from './pages/Class';
import Declaration from './pages/Declaration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UtilityTypes from './pages/UtilityTypes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainNav>
          <MainNavItem to="/type-inheritance">TypeInheritance</MainNavItem>
          <MainNavItem to="/axios">Axios</MainNavItem>
          <MainNavItem to="/react-query">ReactQuery</MainNavItem>
          <MainNavItem to="/class">Class</MainNavItem>
          <MainNavItem to="/utility-types">UtilityTypes</MainNavItem>
          <MainNavItem to="/declaration">Declaration</MainNavItem>
        </MainNav>
        <Routes>
          <Route
            path="/type-inheritance"
            element={
              <TypeInheritance
                title="타입스크립트"
                description="타입스크립트는 재미있다."
              />
            }
          />
          <Route path="/axios" element={<Axios />} />
          <Route path="/react-query" element={<ReactQuery />} />
          <Route path="/class" element={<Class />} />
          <Route path="/utility-types" element={<UtilityTypes />} />
          <Route path="/declaration" element={<Declaration />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
