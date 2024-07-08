import React from 'react'
import Navbar from '../components/nav'
import { Layout, } from "antd";
import "./style.scss";
import { SidebarStore } from '../stores/sidebar';
import MenuList from '../components/MenuList';
import Logo from '../assets/images/Logoicon.png'
const MainLayout = ({ children }) => {
    const { extend } = SidebarStore()
    const { Sider, Content } = Layout;
    return (
        <>
            <Layout className="Adminpage">
                <Sider
                    collapsed={!extend}
                    collapsible
                    trigger={null}
                    theme={'light'}
                    className="siderbar"
                >
                    <div className="Logo">
                        <div className="background-logo">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <MenuList />
                </Sider>
                <Layout>
                    <Navbar />
                    <Content className="w-100 vh-100">
                        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4">
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default MainLayout
