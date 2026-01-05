import React, { useState } from 'react'
import './Product.css'
import { products } from "../../Data/data";
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import { addToCart } from './utils/cart';

function Product() {
    const navigate = useNavigate();
    const [fly, setFly] = useState(null); // go to cart animation

    const handleOrderNow = (product, e) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });

        const imgEl = e.currentTarget.closest(".product-card")
            .querySelector("img");
        const rect = imgEl.getBoundingClientRect();

        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        const targetX = window.innerWidth - 40;
        const targetY = 30;

        setFly({
            src: product.image,
            x: startX,
            y: startY,
            tx: targetX,
            ty: targetY,
        });

        setTimeout(() => {
            setFly(null);
            navigate("/cart");
        }, 700);
    };

    return (
        <>
            <Nav />
            {/* Fly cart image*/}
            {fly && (
                <img
                    src={fly.src}
                    alt=""
                    className='fly-img'
                    style={{
                        left: fly.x,
                        top: fly.y,
                        "--tx": `${fly.tx}px`,
                        "--ty": `${fly.ty}px`
                    }}
                />
            )}

            <div className='product-container'>
                {products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <div className='product-image'>
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className='product-info'>
                            <h3 className='product-name'>
                                {product.name}
                            </h3>
                            <p className='product-price'>
                                {product.price.toLocaleString()} Ks
                            </p>

                            <button className='add-to-cart' onClick={(e) => handleOrderNow(product, e)}>Order Now</button>
                        </div>

                    </div>
                ))}


            </div>
        </>
    );
}

export default Product;