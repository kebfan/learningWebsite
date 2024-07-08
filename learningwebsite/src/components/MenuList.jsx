import { Menu } from 'antd';
import {
  HomeOutlined,
  ContactsOutlined,
  FormOutlined,
  PieChartOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom'
import React from 'react'


function MenuList() {
  return (
    <Menu className={'text-decoration-none menu-bar'} defaultSelectedKeys={['home']} mode="inline" theme={'light'}>
      <Menu.Item key="home" icon={<HomeOutlined />}><NavLink className={'text-decoration-none'} to={'/admin'}>หน้าแรก</NavLink></Menu.Item>
      <Menu.Item key="info" icon={<ContactsOutlined />}><NavLink className={'text-decoration-none'} to={'/admin/studentDetail'}>ข้อมูลนักเรียน</NavLink></Menu.Item>
      <Menu.Item key="homework" icon={<FormOutlined />}><NavLink className={'text-decoration-none'} to={'/admin/studentDetail'}>คะแนนการบ้าน</NavLink></Menu.Item>
      <Menu.Item key="lesson" icon={<FormOutlined />}><NavLink className={'text-decoration-none'} to={'/admin/lesson'}>lesson</NavLink></Menu.Item>
      <Menu.Item key="exam" icon={<PieChartOutlined />}><NavLink className={'text-decoration-none'} to={'/admin/exam'}>คะแนนแบบทดสอบ</NavLink></Menu.Item>
      <Menu.Item key="progress" icon={<BarChartOutlined />}><NavLink className={'text-decoration-none'} to={'/admin/progress'}>ความคืบหน้า</NavLink></Menu.Item>


    </Menu>
  )
}

export default MenuList
