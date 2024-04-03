import React,{useContext} from 'react'
import './ProductDisplay.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { ProductContext } from '../../../Context/ProductContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ProductContext);
  return (
    <div className='productDisplay'>
        <div className='productDisplay-left'>
            <div className='productDisplay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='productDisplay-img'>
                <img className='productDisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className='productDisplay-right'>
            <h1>{product.name}</h1>
            <div className='productDisplay-right-stars'>
                <StarIcon className='star'/>
                <StarIcon className='star'/>
                <StarIcon className='star'/>
                <StarIcon className='star'/>
                <StarBorderOutlinedIcon className='star'/>
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className='productDisplay-right-prices-old'>Rs.{product.old_price}</div>
                <div className='productDisplay-right-prices-new'>Rs.{product.new_price}</div>
            </div>
            <div className='productDisplay-right-description'>{product.description}</div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productDispay-right-category'><span>Category :</span>{product.category}</p>
            <p className='productDispay-right-brand'><span>Brand :</span>{product.brand}</p>
        </div>
    </div>
  )
}

export default ProductDisplay