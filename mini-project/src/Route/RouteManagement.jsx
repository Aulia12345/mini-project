import { Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from '../Pages/Landing Page/LandingPage';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { Suspense, useEffect } from 'react';
import InventarisAdmin from '../Pages/Inventaris/InventarisAdmin';
import Inventaris from '../Pages/Inventaris/Inventaris'
import LoginRegister from '../Pages/Login Register/LoginRegister';
import Aspirasi from '../Pages/Aspirasi/Aspirasi';
import AspirasiAdmin from '../Pages/Aspirasi/AspirasiAdmin';

const RouteManagement = () => {
    const token = localStorage.getItem('token');
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/home');
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [token]);

    return (
        <div>
            <Suspense>
                {!token ? (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/' element={<LandingPage />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                            <Route path='/aspirasi' element={<Aspirasi />} />
                            <Route path='/aspirasi-admin' element={<AspirasiAdmin />} />
                        </Routes>
                    </LayoutComponent>
                ) : (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/home' element={<LandingPage />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                            <Route path='/inventaris-admin' element={<InventarisAdmin />} />
                            <Route path='/aspirasi' element={<Aspirasi />} />
                        </Routes>
                    </LayoutComponent>
                )};
            </Suspense>
        </div >
    );
}

export default RouteManagement;
