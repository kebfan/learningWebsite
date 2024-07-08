import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button, theme } from "antd";
import { SidebarStore } from "../../stores/sidebar";
import { UserStore } from "../../stores/user";
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined, LogoutOutlined, } from "@ant-design/icons";
import _ from 'lodash'
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = UserStore()
    const { extend, setExtend } = SidebarStore()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (<>
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="nav-1-admin">
                <Button
                    type="text"
                    className="toggle"
                    onClick={() => setExtend(!extend)}
                    icon={!extend ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                ></Button>
            </div>
            <div className="nav-2-admin">
                <Button
                    type="text"
                    icon={
                        _.isEmpty(!user) ? (
                            <LoginOutlined
                                onClick={logout}
                                style={{ color: "green", fontSize: "20px" }}
                            />
                        ) : (
                            <LogoutOutlined
                                onClick={logout}
                                style={{ color: "red", fontSize: "20px" }}
                            />
                        )
                    }
                ></Button>
            </div>
        </Header>
    </>)
}
export default Navbar