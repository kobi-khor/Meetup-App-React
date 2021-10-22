
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetUp';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
           <AllMeetUpsPage/>
         </Route>
         <Route path='/favorites'>
           <FavoritesPage/>
         </Route>
         <Route path='/new-meetup'>
           <NewMeetupPage/>
         </Route>
       </Switch>
    </Layout>
  );
}

export default App;
