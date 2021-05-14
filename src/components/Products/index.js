import React from 'react'
import {
    ProductContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductBtn
} from './ProductItems';

const Products = () => {
    return (
        <ProductContainer>
            <ProductHeading>Heading</ProductHeading>
            <ProductWrapper>
                {data.map((product,index) => {
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>
                                {product.name}
                            </ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductBtn>{product.button}</ProductBtn>
                        </ProductInfo>
                    </ProductCard>
                })}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
