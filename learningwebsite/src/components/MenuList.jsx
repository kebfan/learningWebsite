import { Menu } from 'antd';
import {HomeOutlined,
    ContactsOutlined,
    FormOutlined,
    PieChartOutlined,
    BarChartOutlined
} from '@ant-design/icons';
import React from 'react'


function MenuList({darkTheme}) {
  return (
    <Menu  defaultSelectedKeys={['home']} mode="inline" theme={darkTheme ? 'dark' : 'light'} className='menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>หน้าแรก</Menu.Item>
        <Menu.Item key="info" icon={<ContactsOutlined />}>ข้อมูลนักเรียน</Menu.Item>
        <Menu.Item key="homework" icon={<FormOutlined />}>คะแนนการบ้าน</Menu.Item>
        <Menu.Item key="exam" icon={<PieChartOutlined />}>คะแนนแบบทดสอบ</Menu.Item>
        <Menu.Item key="progress" icon={<BarChartOutlined />}>ความคืบหน้า</Menu.Item>


    </Menu>
  )
}

export default MenuList
