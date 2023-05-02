import { Button, Form, Input, Modal, message, Row, Radio } from "antd";
import { ADD_ADMIN, GET_ADMIN } from './query/admin-query';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import './LoginRegister.css'

const LoginRegister = () => {
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
                            form.resetFields(),
                                setSection("Login")
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
                    setSection("Login");
                },
            });
        }
    };

    const [section, setSection] = useState('Login');
    const onChange = ({ target: { value } }) => {
        setSection(value);
        form.resetFields();
    };

    return (
        <div className='container-center'>
            <div className="welcome">
                <Row justify="center" className="group">
                    <Radio.Group
                        defaulValue="login"
                        buttonStyle="solid"
                        onChange={onChange}
                        value={section}>
                        <Radio.Button className="login" style={{ zIndex: 0 }} value="Login">Login Here</Radio.Button>
                        <Radio.Button value="Register">Register Here</Radio.Button>
                    </Radio.Group>
                </Row>
                <div className="titlelogreg">WELCOME <br /><span className="shapelogreg"></span></div>
                <Form
                    name="Login-form"
                    form={form}
                    onFinish={section === "Login" ? onLogin : onRegister}
                    labelAlign='left'
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                >
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
                        loading={isRegisterLoading}
                    >
                        {section === 'Login' ? 'Login' : 'Register'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default LoginRegister;
