import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { ApiContextProvider } from './context';
import { Home } from './pages/Home';
import { Api } from './services';

function App() {
  const api = Api()

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <ApiContextProvider api={api}>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/heroes/:heroId">
                hero
              </Route>
            </Switch>
          </ApiContextProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
