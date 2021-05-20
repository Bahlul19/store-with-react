import React from 'react';

import './form.styles.scss';

const FormInput = ( {handleChange, label, ...otherProps} ) =>(

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} ></input>
    </div>

);

export default FormInput;