import React from 'react'
import { Layout, Button, theme } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import _ from 'lodash'
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import useLogout from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
export default function AdminNav() {
    const navigate = useNavigate()
    const collapsed = useStoreState((state) => state.sideBarStore.collapsed)
    const toggleCollapse = useStoreActions((action) => action.sideBarStore.toggleCollapse)
    const { logout } = useLogout()
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <div className="nav-1-admin">
                    <Button
                        type="text"
                        className="toggle"
                        onClick={() => toggleCollapse()}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    ></Button>
                </div>
                <div className="nav-2-admin">
                    <Button
                        type="text"
                        icon={
                            _.isEmpty(sessionStorage.getItem('userId')) ? (
                                <LoginOutlined
                                    onClick={logout}
                                    style={{ color: "green", fontSize: "20px" }}
                                />
                            ) : (
                                <LogoutOutlined
                                    onClick={() => { navigate('/login') }}
                                    style={{ color: "red", fontSize: "20px" }}
                                />
                            )
                        }
                    ></Button>
                </div>
            </Header>
        </>
    )
}
