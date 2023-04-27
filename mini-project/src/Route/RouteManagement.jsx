import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Pages/Landing Page/LandingPage';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { Suspense } from 'react';
import InventarisAdmin from '../Pages/Inventaris/InventarisAdmin';
import Inventaris from '../Pages/Inventaris/Inventaris'

const RouteManagement = () => {
    return (
        <div>
            <Suspense>
                <LayoutComponent>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/inventaris' element={<Inventaris />} />
                        <Route path='/inventaris-admin' element={<InventarisAdmin />} />
                    </Routes>
                </LayoutComponent>
            </Suspense>
        </div >
    );
}

export default RouteManagement;
