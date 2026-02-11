import React from 'react';

function Button(props) {
    const { text, onPress } = props;
    return (
        <button
            type="button"
            className="btn shadow-none"
            style={{
                borderRadius: '25vh',
                backgroundColor: '#e47719',
                color: 'white',
                fontWeight: '600',
                // padding: '0 2vw',
                height: '40px',
                fontSize: '14px', 
                Width: '120px '
            }}
            onClick={onPress}
        >
            {text}
        </button>
    );
}

export default Button;
