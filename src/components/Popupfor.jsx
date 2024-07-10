import React from 'react';
import './Popupfor.css';

const Popupfor = ({ isOpen, content }) => {
    return (
        isOpen && (
            <div className="popup">
                {content}
            </div>
        )
    );
};

export default Popupfor;
