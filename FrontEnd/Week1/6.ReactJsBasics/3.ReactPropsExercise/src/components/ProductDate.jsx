import React from 'react'

function ProductDate(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{month:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="bg-blue-900 rounded-2xl text-center text-amber-300 w-24"> Mfg.Date
            <div className="text-lg font-bold mt-1" >{day}</div>
            <div className="text-sm">{month}</div>
            <div className="text-sm text-amber-600 mb-2">{year}</div>
        </div>
    );
};

export default ProductDate;
