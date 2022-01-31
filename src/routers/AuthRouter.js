import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/admin/LoginScreen';
import { AdminScreen } from '../components/admin/AdminScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />

                    <Route 
                        exact
                        path="/auth/admin"
                        component={ AdminScreen }
                    />

                    

                </Switch>
            </div>

        </div>
    )
}
