import React from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

/*import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
*/
import { MenuScreen } from '../components/menu/MenuScreen';
import { PublicRoute } from './PublicRoute';
/*
import { login } from '../actions/auth';*/

export const AppRouter = () => {

/*    const dispatch = useDispatch();
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
*/
/*    useEffect(() => {

        if (currentUser == null) {
            onAuthStateChanged( auth, (user) => {
                if ( user?.uid ) {
                    dispatch( login( user.uid, user.displayName ) );
                    setIsLoggedIn( true );
                } else {
                    setIsLoggedIn( false );
                }
            });
        }
        
        setChecking(false);
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }*/

    return (
        <Router>            
            <Switch>

                <PublicRoute
                    exact
                    path="/" 
                    component={ MenuScreen } 
                />
                
            </Switch>
        </Router>
    )
}
