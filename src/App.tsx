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
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/heroes/:heroId">
                hero kakalal
              </Route>
            </Switch>
          </ApiContextProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
