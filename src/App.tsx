import styled from '@emotion/styled';
import { Layout } from './ui/Layout';

const RedTitle = styled.h1`
color: var(--error);
`;

function App() {

     return (
          <div className="App">
               <Layout >
                    <h1>MiniCodeLab</h1>
                    <h2>MiniCodeLab</h2>
                    <h3>MiniCodeLab</h3>
                    <h4>MiniCodeLab</h4>
                    <p>MiniCodeLab</p>
                    <span>MiniCodeLab</span>
                    <button>MiniCodeLab</button>
               </Layout>
          </div>
     );
}

export default App;

