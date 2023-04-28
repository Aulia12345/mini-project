import { Button, Card, Form, Input, Select, Modal, message, } from "antd";
import { ADD_ADMIN, GET_ADMIN } from './query/admin-query';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import './LoginRegister.css'

const LoginRegister = () => {

    // select form
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const navigate = useNavigate();
    const [form] = Form.useForm();

    // eslint-disable-next-line no-unused-vars
    const { data: adminData, loading: isAdminLoading, error: isAdminError } = useQuery(GET_ADMIN);
    console.log(adminData?.admin)

    const [register, { loading: isRegisterLoading }] = useMutation(ADD_ADMIN, {
        refetchQueries: [GET_ADMIN]
    })

    // register
    const onRegister = (values) => {

        // eslint-disable-next-line no-unsafe-optional-chaining
        const admin = [...adminData?.admin]

        // is user existed?
        const isExisted = admin?.some((item) => item.username === values.username);

        if (!isExisted) {
            register({
                variables: {
                    object: {
                        ...values
                    }
                },
                onError: (err) => {
                    message.open({
                        type: "error",
                        content: `${err.message}`
                    })
                },
                onCompleted: () => {
                    Modal.success({
                        title: "Register Success",
                        content: "Please login using your account",
                        centered: true,
                        onOk() {
                            form.resetFields()
                        }
                    })
                }
            })
        } else {
            Modal.warning({
                title: "Regiser Failed",
                content: "your username has been already used",
                centered: true
            })
        }
    }

    // login
    const onLogin = (values) => {
        const admin = [...adminData.admin]

        // mengecek apakah user exist
        const isUser = admin.find(
            (item) => item.username === values.username);

        // mengecek apakah user terverifikasi (mengecek data user yg ada)
        const isVerified = JSON.stringify(isUser) === JSON.stringify(values)

        if (isVerified) {
            localStorage.setItem("token", true);
            navigate("/home");
        } else {
            Modal.warning({
                title: "Login Failed!",
                content: "Username/password is not correct",
                centered: true,
                onOk() {

                },
            });
        };
    };

    return (
        <div className='container-center'>
            <div className="bodylogreg">
                <div className="titlelogreg">LOGIN <br /><span className="shapelogreg"></span></div>
                <Form
                    name="Login-form"
                    form={form}
                    onFinish={onLogin}
                    labelAlign='left'
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    style={{
                        padding: '20px 20px',
                    }}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "please input your username!"
                            }
                        ]}
                    ><Input
                            style={{
                                borderColor: 'black'
                            }}

                            placeholder="username" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "please input your password!"
                            }
                        ]}
                    ><Input.Password style={{
                        borderColor: 'black'
                    }}
                        placeholder="password" />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            backgroundColor: "black"
                        }}
                    >
                        Login
                    </Button>
                </Form>
            </div>
            <hr />
            <div className="bodylogreg">
                <div className="titlelogreg">REGISTER <br /><span className="shapelogreg"></span></div>
                <Form
                    name="Register-form"
                    form={form}
                    onFinish={onRegister}
                    labelAlign='left'
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    style={{
                        padding: '20px 20px',
                    }}>
                    <Form.Item
                        label="Nama"
                        name='nama'
                        rules={[{
                            required: true,
                            message: "please input your name!"
                        }]}>
                        <Input style={{
                            borderColor: 'black'
                        }} placeholder='nama' />
                    </Form.Item>
                    <Form.Item
                        label="Angkatan"
                        name='angkatan'
                        rules={[{
                            required: true,
                            message: 'please select the option!'
                        }]}>
                        <Select style={{
                            borderColor: 'black',
                            width: 250
                        }}
                            defaultValue=""
                            onChange={handleChange}
                            options={[
                                { value: 'angkatan 20', label: 'angkatan 20' },
                                { value: 'angkatan 21', label: 'angkatan 21' },
                                { value: 'angkatan 22', label: 'angkatan 22' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Prodi"
                        name='prodi'
                        rules={[{
                            required: true,
                            message: 'please select the option!'
                        }]}>
                        <Select className="input"
                            defaultValue=""
                            style={{
                                width: 250,
                                borderColor: "black"
                            }}
                            onChange={handleChange}
                            options={[
                                { value: 'pendidikan bahasa Inggris', label: 'Pendidikan Bahasa Inggris' },
                                { value: 'sastra inggris', label: 'Sastra Inggris' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                            },
                        ]}
                    >
                        <Input style={{
                            borderColor: 'black'
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "please input your username!"
                            }
                        ]}
                    ><Input
                            style={{
                                borderColor: 'black'
                            }}
                            placeholder="username" />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "please input your password!"
                            }
                        ]}
                    ><Input.Password
                            style={{
                                borderColor: 'black'
                            }}
                            placeholder="password" />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isRegisterLoading}
                        style={{
                            backgroundColor: "black"
                        }}
                    >
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default LoginRegister;
