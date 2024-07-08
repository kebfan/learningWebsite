import _ from 'lodash'
import React from 'react';
const Handler = ({ Component, componentProps, FallbackComponent, admin }) => {
    const userId = sessionStorage.getItem('userId')
    console.log(userId)
    const role = sessionStorage.getItem('role')
    if (admin) {
        return role === '1' ? <Component {...componentProps} /> : <FallbackComponent />;
    }
    return !_.isEmpty(userId) ? <Component {...componentProps} /> : <FallbackComponent />;
};

export default Handler;
