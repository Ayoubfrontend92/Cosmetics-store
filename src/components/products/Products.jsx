import React,{useState} from 'react'
import css from './Products.module.css'
import plane from '../../assets/plane.png'
import {ProductsData} from '../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [menuProducts,setMenuProducts]=useState(ProductsData);

    const [animationParent] = useAutoAnimate()

    const filter = (type)=>{
        setMenuProducts(ProductsData.filter((item)=>item.type === type))
    }


  return (
    <div className={css.container}>
        <img src={plane} alt="plane-img" />
        <h1>Our Feutured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list} ref={animationParent}>
                {menuProducts.map((product,i) =>(
                    <div className={css.product} key={product.img}>
                        <div className="left-s">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <span>{product.price}</span>
                            <div>Show Now</div>
                        </div>

                        <img src={product.img} alt="img-products" className='img-p' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products