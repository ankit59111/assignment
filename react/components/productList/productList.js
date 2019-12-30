import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './productList.css';
import {NavLink} from "react-router-dom";


export default function ProductList(props){
    const [productData,loadMoreAction] = useState(props.list|| []);

    function loadData(pageNumber) {
        axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${pageNumber}`).then(res=>{
            let newData = Object.assign({},productData,res['data'],{
                data:[...productData["data"],...res['data']['data']]
            });
           loadMoreAction(newData)
        });
    }

        return(
            <div id='productList'>
                <h3>PRODUCTS</h3>
                <ul>
                    {productData['data'] && productData['data'].map((item)=>{
                       return <li key={item['id']}>
                           <NavLink to={`/product/${item['id']}`}>
                            <img src={item['img']} alt='product image'/>
                            <p className='product_name'>{item['name']} </p>
                           <p className='product_price'>price : {item['price']}</p>
                           </NavLink>
                        </li>
                    })}
                </ul>
                <button onClick={()=>loadData(productData['nextPage'])}>Load More</button>
            </div>
        )


}