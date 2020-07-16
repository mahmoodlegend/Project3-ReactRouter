import React from 'react'
import {useParams} from 'react-router-dom';

export const ProductDetails = () => {
    const shoes = {
        "air-jorden-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&"
        },
        "HardCourtTennis": {
            name: "Nike Air Zoom",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ab7d07a-ce93-4c05-af85-d74371472c82/air-zoom-pegasus-37-running-shoe-qVSCSr.jpg"
        },
        "NikeAirVapormax": {
            name: "NikeAirVapormax",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f460208-a89e-41e8-a93b-dd253b675911/react-miler-running-shoe-Rl20rZ.jpg"
        },
    };

    const {ProductID} = useParams();
    const product = shoes[ProductID];
    const {name, img} = product;
    console.log(ProductID)
    console.log(name)
    console.log(shoes)


    return (
        <div>
            This is Product Details
            <h4>{name}</h4>
            <img src={img} alt={name} />
        </div>
    )
}

export default ProductDetails;