// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDelAspirasi, useGetAspirasi } from './Hook/useAsp';
import { Table, Popconfirm } from 'antd';
import './Aspirasi.css'

const AspirasiAdmin = () => {

    const [isLoadingAspirasi, aspirasi, getAspirasi] = useGetAspirasi();
    const [isLoadingDeleteAspirasi, deleteAspirasi] = useDelAspirasi();

    // Activate Custom Hook
    useEffect(() => {
        getAspirasi()
    }, []);


    // eslint-disable-next-line no-unused-vars
    const [rowData, setRowData] = useState(aspirasi);



    const TABLE_COLUMNS = [

        {
            title: 'Nama',
            dataIndex: 'nama',
            key: 'nama'
        },
        {
            title: 'NIM',
            dataIndex: 'nim',
            key: 'nim'
        },
        {
            title: 'Angkatan',
            dataIndex: 'angkatan',
            key: 'angkatan'
        },
        {
            title: 'Program Studi',
            dataIndex: 'prodi',
            key: 'prodi'
        },
        {
            title: 'Permasalahan',
            dataIndex: 'problem',
            key: 'problem'
        },
        {
            title: 'Kritik dan Saran',
            dataIndex: 'kritiksaran',
            key: 'kritiksaran'
        }, {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) =>
                <Popconfirm
                    title='sure to delete'
                    arrow={false}
                    onConfirm={() => onDelete(record.id)}
                >
                    <a
                        style={{
                            color: 'red'
                        }}>Delete</a>
                </Popconfirm>
        }
    ]

    // delete data from table
    const onDelete = (row_id) => {
        deleteAspirasi(row_id, () => {
            getAspirasi();
        })
    };

    return (
        <div className='edsacareadmin'>
            <div className='titleshape2'>
                <h2 className='titlecare'>Report EDSA Care</h2>
                <div className='shapecare2'></div>
            </div>
            <Table
                style={{
                    boxShadow: '0px 0px 20px 0px #000'
                }}
                rowKey="id"
                columns={TABLE_COLUMNS}
                dataSource={aspirasi}
                loading={isLoadingAspirasi || isLoadingDeleteAspirasi} />
        </div>
    );
}

export default AspirasiAdmin;
