import { useContext } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { Context } from './store/AuthContext';

function App() {
  const authCtx = useContext(Context)

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          {!authCtx.isLogin&&<AuthPage />}
          {authCtx.isLogin&&<Redirect to='/profile'/>}
        </Route>
        <Route path='/profile'>
          {authCtx.isLogin&&<UserProfile />}
          {!authCtx.isLogin&&<Redirect to='/auth'/>}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
