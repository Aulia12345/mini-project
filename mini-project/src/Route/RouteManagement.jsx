import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Pages/Landing Page/LandingPage';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { Suspense } from 'react';

const RouteManagement = () => {
    return (
        <div>
            <Suspense>
                <LayoutComponent>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                    </Routes>
                </LayoutComponent>
            </Suspense>
        </div>
    );
}

export default RouteManagement;
