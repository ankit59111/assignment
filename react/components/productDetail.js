import React from 'react';
import Header from "./header/header";
import {getAllData, getUrl} from "../../controller/apiList";
import Footer from "./footer/footer";

import './productDetail.css';
import {NavLink} from "react-router-dom";
export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        const url = getUrl(this.props.match.path);
        getAllData(url).then(res => {
            console.log(res);
            this.setState({
                data: res,
                isLoaded: true
            })
        })
    }

    render() {
        const data = this.props.staticContext || this.state.data;
        const productDescription = this.props.staticContext || this.state.data ? data[1]['data'] : {}
        return (
            this.state.isLoaded || this.props.staticContext ?
                <div className='container'>
                    <Header logo={data[0]['data']['logo']}/>
                    <NavLink to={'/'}>Home</NavLink>
                    <div className='description'>
                        <div id='description_image'>
                            <img src={productDescription['img']} alt='product image'/>
                        </div>
                        <div className='product_description'>
                            <p><strong>Product Name : </strong><span>{productDescription['name']}</span>    </p>
                            <p><strong>price : </strong><span> {productDescription['price']}</span></p>
                            <p><strong>Description : </strong><span className='detail'>{productDescription['description']}</span></p>
                        </div>
                    </div>
                    <Footer/>
                </div>
                : <div></div>
        )
    }
}