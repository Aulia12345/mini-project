/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Pages/Landing Page/LandingPage';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { Suspense } from 'react';
import InventarisAdmin from '../Pages/Inventaris/InventarisAdmin';
import Inventaris from '../Pages/Inventaris/Inventaris'
import LoginRegister from '../Pages/Login Register/LoginRegister';
import Aspirasi from '../Pages/Aspirasi/Aspirasi';
import AspirasiAdmin from '../Pages/Aspirasi/AspirasiAdmin';
import Divisions from '../Pages/Divisions/Divisions';
import News from '../Pages/News/News';
import { useLoginToken } from '../hooks/use-login-token';

const RouteManagement = () => {
    const token = useLoginToken();

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
                            <Route path='/news' element={<News />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                            <Route path='/aspirasi' element={<Aspirasi />} />
                            <Route path='/divisions' element={<Divisions />} />
                        </Routes>
                    </LayoutComponent>
                ) : (
                    <LayoutComponent>
                        <Routes>
                            <Route path='/' element={<LandingPage />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/inventaris' element={<Inventaris />} />
                            <Route path='/login-register' element={<LoginRegister />} />
                            <Route path='/inventaris-admin' element={<InventarisAdmin />} />
                            <Route path='/aspirasi' element={<Aspirasi />} />
                            <Route path='/aspirasi-admin' element={<AspirasiAdmin />} />
                            <Route path='/divisions' element={<Divisions />} />
                        </Routes>
                    </LayoutComponent>
                )};
            </Suspense>
        </div >
    );
}

export default RouteManagement;
