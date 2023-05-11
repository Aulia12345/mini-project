import { useState, useEffect } from 'react';
import { Space, Typography, Form, Button, Table, Select, Popconfirm, } from 'antd';
import { useDeleteInventaris, useGetInventaris, usePostInventaris, useUpdateInventaris } from './Hook/useInv';
import './InventarisAdmin.css';
import '@ant-design/colors';
import logo from '../../assets/EDSA logo baru putih.png'

const Inventaris = () => {

    const { Title } = Typography;

    // select form
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [isLoadingInventaris, inventaris, getInventaris] = useGetInventaris();
    const [isLoadingCreateInventaris, createInventaris] = usePostInventaris();
    const [isLoadingDeleteInventaris, deleteInventaris] = useDeleteInventaris();
    const [isLoadingUpdateInventaris, updateInventaris] = useUpdateInventaris();

    // Activate Custom Hook
    useEffect(() => {
        getInventaris()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) =>

                <Space>
                    <a
                        style={{
                            color: 'blue'
                        }} onClick={() => handleEdit(record)}>Edit</a>
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
                </Space >

        },
    ]

    // edit
    const handleEdit = (row_data) => {
        setRowData(row_data);
        setIsEdit(true);
    };

    // cancel edit
    const handleCancel = () => {
        setRowData();
        setIsEdit(false);
        formInv.resetFields();
    };

    // add data to table
    const onAdd = (values) => {
        createInventaris(values, () => {
            getInventaris()
            formInv.resetFields();
        })
        console.log({ values })
    };

    // delete data from table
    const onDelete = (row_id) => {
        deleteInventaris(row_id, () => {
            getInventaris();
        })
    };

    // edit data in the table
    const onEdit = (values) => {
        const id = rowData.id;
        updateInventaris(id, values, () => {
            getInventaris();
            handleCancel();
        })
    }

    const [formInv] = Form.useForm();


    const [rowData, setRowData] = useState(inventaris);
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className='inventaris' style={{
            marginTop: 10
        }}>
            <Title className='title' style={{
                color: 'white'
            }}>List Inventaris HMJ EDSA</Title>

            <Form
                name='formInv'
                form={formInv}
                layout='horizontal'
                onFinish={isEdit ? onEdit : onAdd}
                className='form'
                labelAlign='left'
                labelCol={{
                    span: 7,
                }}
                wrapperCol={{
                    span: 14,
                }}
                style={{
                    width: 700
                }}
                fields={[
                    {
                        name: ['namaBarang'],
                        value: rowData?.namaBarang,
                    },
                    {
                        name: ['jumlahBarang'],
                        value: rowData?.jumlahBarang,
                    },
                    {
                        name: ['kondisiBarang'],
                        value: rowData?.kondisiBarang,
                    },
                    {
                        name: ['jumlahBarangTersedia'],
                        value: rowData?.jumlahBarangTersedia,
                    },
                ]}>
                <Form.Item
                    name='namaBarang'
                    label='Nama Barang'
                    rules={[
                        {
                            required: true,
                            message: 'please input the form'
                        }
                    ]}
                >
                    <input />
                </Form.Item>
                <Form.Item
                    name='jumlahBarang'
                    label='Jumlah Barang'
                    rules={[
                        {
                            required: true,
                            message: 'please input the form'
                        }
                    ]}
                >
                    <input type='number' />
                </Form.Item>
                <Form.Item
                    name='kondisiBarang'
                    label='Kondisi Barang'
                    rules={[{
                        required: true,
                        message: 'please choose the select'
                    }]}>
                    <Select
                        placeholder='click here'
                        style={{ width: 400 }}
                        onChange={handleChange}
                        options={[
                            { value: '' },
                            { value: 'baik', label: 'Baik' },
                            { value: 'kurang baik', label: 'Kurang Baik' },
                            { value: 'rusak', label: 'Rusak' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name='jumlahBarangTersedia'
                    label='Jumlah Barang Tersedia'
                    rules={[
                        {
                            required: true,
                            message: 'please input the form'
                        }
                    ]}
                >
                    <input type='number' />
                </Form.Item>

                {isEdit ? (
                    <Space>
                        <Button type='primary' htmlType='submit' loading={isLoadingUpdateInventaris}>
                            Save
                        </Button>
                        <Button type='primary' onClick={handleCancel} danger>
                            Cancel
                        </Button>
                    </Space>
                ) : (
                    <Button

                        style={{ background: 'white', color: 'black', margin: "0px 10px" }}

                        type='primary' htmlType='submit' loading={isLoadingCreateInventaris}>
                        Submit
                    </Button>
                )}
            </Form>

            <img className='logoputih' src={logo} alt="" />

            <Table
                style={{
                    boxShadow: '0px 0px 20px 0px #000'
                }}
                rowKey="id"
                columns={TABLE_COLUMNS}
                dataSource={inventaris}
                loading={isLoadingInventaris || isLoadingDeleteInventaris} />

        </div>
    );
}

export default Inventaris;
