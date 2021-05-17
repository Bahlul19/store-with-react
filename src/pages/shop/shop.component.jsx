import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview-component';

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
    return (
        <div className="shop-page">
            {
                this.state.collections.map( ({ id , name, imageUrl, price, title, items }) => (
                    <CollectionPreview key={id} name={name} imageUrl={imageUrl} price={price} title={title} items={items} />
                ))
            }
        </div>
    );
    }
}

export default ShopPage;