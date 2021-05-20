import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Index from './pages/index.js';

import Admin from './pages/admin';
import Member from './pages/member';
import TermsConditions from './pages/terms_conditions';
import CookiePolicy from './pages/cookie_policy';
import PrivacyPolicy from './pages/privacy_policy';

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <Header />

                <div className='App'>

                    <Route exact path="/" component={Index} />

                    <Route exact path="/member" component={Member} />

                    <Route exact path="/admin" component={Admin} />

                    <Route exact path="/termsconditions" component={TermsConditions} />

                    <Route exact path="/cookiepolicy" component={CookiePolicy} />

                    <Route exact path="/privacypolicy" component={PrivacyPolicy} />

                </div>

                <Footer />

            </BrowserRouter>
        );
    }
}

export default App;