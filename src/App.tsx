import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './ui/Layout';

const RedTitle = styled.h1`
color: var(--error);
`;

function App() {

     return (
          <div className="App">
               <Layout >
                    {/* TODO Insert Header Here */}

                    <BrowserRouter>
                         <Routes>
                              <Route index element={<h1>Authenticated</h1>} />
                              <Route path='edit'>

                                   <Route path='snippet' element={<h1>Edit Snippet</h1>} />
                                   <Route path='profile' element={<h1>Edit Profile</h1>} />

                              </Route>

                              <Route path='snippets' element={<h1>Snippets</h1>} />
                              
                              <Route path='*' element={<h1>404</h1>} />

                         </Routes>
                    </BrowserRouter>
               </Layout>
          </div>
     );
}

export default App;

