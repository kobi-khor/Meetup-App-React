
import { Route, Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetUp';
import MainNavigation from './components/layout/MainNavigation'


function App() {
  return (
    <div>
      <MainNavigation/>
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
    </div>
  );
}

export default App;
