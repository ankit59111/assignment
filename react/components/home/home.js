import React, {useEffect, useState} from 'react';
import {getAllData, getUrl} from "../../../controller/apiList";
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import ProductList from "../productList/productList";
import Footer from "../footer/footer";

import "./home.css";

export default function Home(props) {
    const [data, loadData] = useState(props.staticContext);
    const [isLoaded, isLoadedAction] = useState(false)

    useEffect(() => {
        const url = getUrl(props.match.path);
        getAllData(url).then(res => {
            loadData(res);
            isLoadedAction(true);
        })
    }, [data, isLoaded]);

    return (
        isLoaded || data ?
            <div className='container'>
                <Header logo={data[0]['data']['logo']}/>
                <Carousel imageList={data[0]['data']['carousel']}/>
                <ProductList list={data[1]['data']}/>
                <Footer/>
            </div> :
            <div></div>
    )
}