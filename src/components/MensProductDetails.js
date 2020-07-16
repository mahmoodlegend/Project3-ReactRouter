import React from 'react'
import {useParams} from 'react-router-dom';

export const MensProductDetails = () => {
    const shoes = {
        "TennisShoes": {
            name: "Nike Court Air Zoom",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg"
        },
        "MensShoes": {
            name: "Nike Air Max",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7059d927-f94d-43a1-8e84-5016c98d07f0/air-max-plus-iii-shoe-pcRszz.jpg"
        },
        "MensRunningShoes": {
            name: "Nike Zoom Fly",
            img:
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02f027b3-cef8-4414-9160-c8f3ac544cd8/zoom-fly-3-running-shoe-9SdJdh.jpg"
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

export default MensProductDetails;