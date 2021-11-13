import styled from 'styled-components';
import Axios from './sections/Axios';
import ReactQuery from './sections/ReactQuery';
import TypeInheritance from './sections/TypeInheritance';
import Class from './sections/Class';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <SubTitle>타입 상속</SubTitle>
        <TypeInheritance
          title="타입스크립트"
          description="타입스크립트는 재미있다."
        />

        <SubTitle>Axios</SubTitle>
        <Axios />

        <SubTitle>React Query</SubTitle>
        <ReactQuery />

        <SubTitle>Class</SubTitle>
        <Class />
      </Container>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  padding: 20px;

  & > * {
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h2``;

export default App;
