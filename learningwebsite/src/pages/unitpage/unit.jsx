import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavbarComponent from "../../components/Navbarcomponent/navbar";
import ToggleThemeBtn from "../../components/ToggleThemeBtn";
import { FormOutlined } from '@ant-design/icons';
import "./unit.scss";
const { Header, Content, Sider } = Layout;

const Unit = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [Data, setData] = useState([]); // Initialize as an array

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const formData = new FormData();
  formData.append('LesID', 1);

  useEffect(() => {
    fetch('http://localhost:8080/backendelearning/service/unitApi', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log("API Response:", data); // Log the entire response
        if (data.status === 1) {
          console.log("Units data:", data.unit); // Log the 'unit' part of the response
          setData(data.unit); // Assuming data.unit is an array
        } else {
          console.error('Error fetching units:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run only once on mount

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // useEffect(() => {
  //   console.log("Data state after setting:", Data); // Log the state of Data
  //   console.log("Is Array:", Array.isArray(Data)); // Log if Data is an array
  //   console.log("Data Length:", Data.length); // Log the length of Data
  // }, [Data]);

  return (
    <>
      <NavbarComponent />
      <Layout className="main-unit">
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
            <Breadcrumb.Item>บทเรียน</Breadcrumb.Item>
            <Breadcrumb.Item>หน่วย</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                {Array.isArray(Data) && Data.length > 0 ? (
                  Data.map(unit => (
                    <Menu.Item key={unit.unitID}>
                      {unit.unitName}
                    </Menu.Item>
                  ))
                ) : (
                  <Menu.Item key="no-data">No units available</Menu.Item>
                )}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {/* Add your content here */}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default Unit;
