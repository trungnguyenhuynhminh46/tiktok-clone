import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = route.layout;
                        if (Layout === null) {
                            Layout = Fragment;
                        } else if (!Layout) {
                            Layout = DefaultLayout;
                        }
                        const Path = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Path />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
