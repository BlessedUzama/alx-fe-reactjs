import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to={`${url}/ProfileDetails`}>ProfileDetails</Link>
        </li>
        <li>
          <Link to={`${url}/ProfileSettings`}>ProfileSettings</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an option.</h3>
        </Route>
        <Route path={`${path}/ProfileDetails`}>
          <ProfileDetails />
              </Route>
              <Route path={`${path}/ProfileSettings`}>
                  <ProfileSettings />
              </Route>
      </Switch>
    </div>
  );
}

export default Profile
