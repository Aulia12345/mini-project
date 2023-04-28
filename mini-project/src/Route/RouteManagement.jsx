import { Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from '../Pages/Landing Page/LandingPage';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { Suspense, useEffect } from 'react';
import InventarisAdmin from '../Pages/Inventaris/InventarisAdmin';
import Inventaris from '../Pages/Inventaris/Inventaris'
import LoginPage from '../Pages/Login Register/LoginRegister'
import LoginRegister from '../Pages/Login Register/LoginRegister';

const RouteManagement = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div>
            <Suspense>
                {!token ? (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/' element={<LoginPage />} />
                            <Route path='/home' element={<LandingPage />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/inventaris-admin' element={<InventarisAdmin />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                        </Routes>
                    </LayoutComponent>
                ) : (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/home' element={<LandingPage />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                        </Routes>
                    </LayoutComponent>
                )};
            </Suspense>
        </div >
    );
}

export default RouteManagement;
