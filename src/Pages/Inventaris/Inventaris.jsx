import { useEffect } from 'react';
import { Typography, Table, Button } from 'antd';
import './InventarisAdmin.css';
import '@ant-design/colors';
import logo from '../../assets/EDSA logo baru putih.png';
import { useGetInventaris } from './Hook/useInv';
import { useNavigate } from 'react-router-dom';

const Inventaris = () => {

    const { Title } = Typography;

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    function handleClick(e) {
        navigate('/inventaris-admin');
    }

    // Activate Custom Hook
    useEffect(() => {
        getInventaris()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isLoadingInventaris, inventaris, getInventaris] = useGetInventaris();

    const TABLE_COLUMNS = [
        {
            title: 'Nama Barang',
            dataIndex: 'namaBarang',
            key: 'namaBarang'
        },
        {
            title: 'Jumlah Barang',
            dataIndex: 'jumlahBarang',
            key: 'jumlahBarang'
        },
        {
            title: 'Kondisi Barang',
            dataIndex: 'kondisiBarang',
            key: 'kondisiBarang'
        },
        {
            title: 'Jumlah Barang Tersedia',
            dataIndex: 'jumlahBarangTersedia',
            key: 'jumlahBarangTersedia'
        },
    ];

    return (
        <div className='inventaris'>
            <div className='title2'>
                <Title className='title2' style={{
                    color: 'white'
                }}>List Inventaris HMJ EDSA</Title>

                <img className='logoputih2' src={logo} alt="" />
            </div>
            <Table
                style={{
                    boxShadow: '0px 0px 20px 0px #000',
                }}
                rowKey="id"
                columns={TABLE_COLUMNS}
                dataSource={inventaris}
                loading={isLoadingInventaris} />

            <div className='penyewaan'>
                <p className='judulsewa'>Penyewaan Inventaris HMJ EDSA</p>
                <span className='shape'></span>
                <p className='infosewa'>Sebelum melakukan penyewaan, harap diperhatikan inventaris yang tersedia pada list inventaris.</p>
                <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSf43jp4LvVtE7pr-iPsVrjVZcfwudzI7Jjqpb2E1nUwjxx_JQ/viewform?embedded=true" width="800" height="620" border="none">Memuat…</iframe>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'red' }}>Khusus ADMIN</span>
                <Button onClick={handleClick} rel='noopener noreferrer' target='_blank' type="primary" style={{ backgroundColor: 'black', width: 200 }}>
                    Inventaris Admin
                </Button>
            </div>
        </div>
    );
}

export default Inventaris;
