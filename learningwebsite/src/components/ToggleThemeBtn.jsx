import React from 'react'
import {Button} from 'antd'
import {HiOutlineSun,HiOutlineMoon} from 'react-icons/hi';

function ToggleThemeBtn({darkTheme,ToggleTheme}) {
  return (
    <div className='toggle-theme'>
        <Button onClick={ToggleTheme}>{darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}</Button>
    </div>
  )
}

export default ToggleThemeBtn