/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Aspirasi.css';
import { Button, Form, Input, Select, Typography } from 'antd';
import logo from '../../assets/EDSA logo baru putih.png';
import { useGetAspirasi, usePostAspirasi } from './Hook/useAsp';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Aspirasi = () => {

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    function handleClick(e) {
        navigate('/aspirasi-admin');
    }


    // select form
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [formAsp] = Form.useForm();
    const { Title } = Typography;

    const [isLoadingCreateAspirasi, createAspirasi] = usePostAspirasi();
    const [aspirasi, getAspirasi] = useGetAspirasi();

    // eslint-disable-next-line no-unused-vars
    const [rowData, setRowData] = useState(aspirasi);


    // add data to table
    const onAdd = (values) => {
        createAspirasi(values, () => {
            getAspirasi()
            formAsp.resetFields();
        })
        console.log({ values })
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='edsacare'>
            <div className='title2'>
                <Title className='titlecare' style={{
                    color: 'white'
                }}>EDSA Care</Title>

                <img className='logoputih2' src={logo} alt="" />
            </div>
            <div className='shapecare'></div>
            <p className='textcare'>EDSA Care adalah pusat layanan pengaduan dan pendampingan bagi mahasiswa Jurusan Bahasa dan Sastra Inggris Universitas Negeri Surabaya. Kami menerima dan akan menindaklanjuti berbagai macam pengaduan, seperti akademik, kesejahteraan mahasiswa, dan lain-lain.</p>

            <Form
                name="formAsp"
                layout='horizontal'
                form={formAsp}
                className='formAsp'
                labelAlign='left'
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: 800
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onAdd}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                fields={[
                    {
                        name: ['nama'],
                        value: rowData?.nama,
                    },
                    {
                        name: ['nim'],
                        value: rowData?.nim,
                    },
                    {
                        name: ['angkatan'],
                        value: rowData?.angkatan,
                    },
                    {
                        name: ['prodi'],
                        value: rowData?.prodi,
                    },
                    {
                        name: ['problem'],
                        value: rowData?.problem,
                    },
                    {
                        name: ['kritiksaran'],
                        value: rowData?.kritiksaran,
                    },
                ]}
            >
                <Form.Item
                    label="Nama"
                    name="nama"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan Nama Kamu',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="NIM"
                    name="nim"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan NIM Kamu',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="angkatan"
                    label="Angkatan"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Pilih Angkatan Kamu',
                        },
                    ]}
                >
                    <Select className='input'
                        onChange={handleChange}>
                        <Option value="angkatan 20">Angkatan 20</Option>
                        <Option value="angkatan 21">Angkatan 21</Option>
                        <Option value="angkatan 22">Angkatan 22</Option>

                    </Select>
                </Form.Item>
                <Form.Item
                    name="prodi"
                    label="Program Studi"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Pilih Prodi Kamu',
                        },
                    ]}
                >
                    <Select className='input'
                        onChange={handleChange}>
                        <Option value="pending">Pendidikan Bahasa Inggris</Option>
                        <Option value="sasing">Sastra Inggris</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name='problem'
                    label="Permasalahan"
                    rules={[{
                        message: 'Tulis Permasalahan Kamu'
                    }]}>
                    <Input.TextArea className='input' />
                </Form.Item>
                <Form.Item
                    name='kritiksaran'
                    label="Kritik dan Saran untuk HMJ EDSA"
                    rules={[{
                        message: 'Tulis Kritik dan Saran untuk Kinerja HMJ EDSA'
                    }]}>
                    <Input.TextArea className='input' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" loading={isLoadingCreateAspirasi} block style={{ backgroundColor: 'black' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                <span style={{ color: 'red' }}>Khusus ADMIN</span>
                <Button onClick={handleClick} rel='noopener noreferrer' target='_blank' type="primary" style={{ backgroundColor: 'black' }}>
                    EDSA Care Report
                </Button>
            </div>


        </div>
    );
}

export default Aspirasi;
