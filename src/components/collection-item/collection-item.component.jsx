import React from 'react';

import './collection-item.scss';

const CollectionItem = ( {id, name, title, items, price, imageUrl}) => (

    <div className='collection-item'>
        <div 
        className = 'image'
        style={{ background: `url(${imageUrl})` }}>

        </div>

        <div className=''collection-footer>
            <span className='name'>Name: {name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='price'>Price: {price}</span>
        </div>
    </div>

);

export default CollectionItem;