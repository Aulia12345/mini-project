import React from 'react';
import { Carousel } from 'antd';
import './News.css';
import gambar from '../../assets/lekempret.jpg'

const News = () => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div>
            <h2 className='judul2'>HMJ EVENTS</h2>
            <Carousel afterChange={onChange}>
                <div className='carouseldiv'>
                    <h2 className='carouseltext'>LKMM pra-TD dan EpilionFest 2022</h2>
                    <p>01-02 Oktober 2022</p>
                </div>
                <div className='carouseldiv2'>
                    <h2 className='carouseltext'>LKMM TD 2022</h2>
                    <p>22-23 Oktober 2022</p>
                </div>
                <div className='carouseldiv3'>
                    <h2 className='carouseltext'>English Week XXVII 2022</h2>
                    <p>04 November 2022</p>
                </div>
                <div className='carouseldiv4'>
                    <h2 className='carouseltext'>Evaluasi HMJ EDSA periode 2021/2022</h2>
                    <p>10-12 Januari 2023</p>
                </div>

            </Carousel>
        </div>
    );
}

export default News;
