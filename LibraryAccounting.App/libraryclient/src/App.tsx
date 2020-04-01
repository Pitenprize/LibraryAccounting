import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import BookDetails from './pages/BookDetails';

const App = () => {
    return (
        <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/details/:bookId' component={BookDetails} />
        </Layout>
    )
}

export default App;