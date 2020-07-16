import React from 'react'
import {useParams} from 'react-router-dom';

export const KidsProductDetails = () => {
    
    const shoes = {
        "Baby": {
            name: "Nike Air Max",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-c03d93cd-907a-4db4-9016-d027e39e9018/air-max-90-and-shoe-DRlXBP.jpg"
        },
        "BabyandTaddle": {
            name: "Nike Air Max 2090",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/929386b6-13e8-441e-b390-0ff736200212/air-max-2090-and-shoe-VGwJnn.jpg"
        },
        "BabyandToddieSlide": {
            name: "Nike Kawa",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2432279-f957-4401-abab-715714e9bb9a/kawa-and-slide-pSbMfL.jpg"
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

export default KidsProductDetails;