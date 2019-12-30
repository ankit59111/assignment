import React,{useEffect,useRef} from 'react';
import './carousel.css';

export default function Carousel(props) {
    let imageIndex = useRef(1);

    function carouselSlider(){
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        let next = (imageIndex.current+1) % slides.length;
        next = next == 0 ? 1:next;
        slides[next].style.display = "block";
        imageIndex.current = next;
    }

    useEffect(()=>{
        carouselSlider();
        const intervalId = setInterval(()=>{
           carouselSlider()
        },2000);
        return () => clearTimeout(intervalId);
        /*let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        let next = (slideIndex+1) % slides.length;
        next = next == 0 ? 1:next;
        const id = setTimeout(() => setSlideIndex(next), 2000);
        slides[slideIndex-1].style.display = "block";
        return () => clearTimeout(id);

         */
    },[]);

    return(
        <div id='carousel'>
            <ul>
                {props.imageList && props.imageList.map((item,index)=>
                    <li key={index} className={'mySlides'}>
                        <img src={item['url']} alt={item['title']}/>
                    </li>
                )}
            </ul>
        </div>
    )

}