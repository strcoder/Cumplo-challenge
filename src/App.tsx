import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import NotFound from './pages/NotFound';
import Layout from './containers/Layout';
import { useStateValue } from './context';
import { getCandidates, getCountdown } from './context/actions';
import Vote from './pages/Vote';
import RegisteredVote from './pages/RegisteredVote';

const App = () => {
  const { dispatch } = useStateValue();

  useEffect(() => {
    getCountdown({ dispatch });
    getCandidates({ dispatch });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/candidate/vote/:id' component={Vote} />
          <Route exact path='/vote/registered' component={RegisteredVote} />
          <Route exact path='/result' component={Result} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
