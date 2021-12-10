import React, { useEffect, useRef } from "react";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/scrollbar"

import SwiperCore, {
    FreeMode, Autoplay, Scrollbar
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Scrollbar, Autoplay]);

function Container(props){
    const fullConfig = resolveConfig(tailwindConfig)
    
    return(
        <React.Fragment>
            <Swiper 
                slidesPerView={1} 
                spaceBetween={10}
                centeredSlides={false}
                freeMode={{enabled: true}}
                grabCursor={true}
                scrollbar={{"hide": false}}
                breakpoints={{
                    468:{
                        "slidesPerView": 2,
                      "spaceBetween": 30,
                    },
                    [fullConfig.theme.screens.sm.replace("px", "")]: {
                      "slidesPerView": 2,
                      "spaceBetween": 40,
                      "centeredSlides": false
                    },
                    [fullConfig.theme.screens.md.replace("px", "")]: {
                      "slidesPerView": 3,
                      "spaceBetween": 40,
                      "centeredSlides": false
                    },
                    [fullConfig.theme.screens.lg.replace("px", "")]: {
                      "slidesPerView": 4,
                      "spaceBetween": 40,
                      "centeredSlides": false
                    }
                }}
                className="mySwiper"
            >
                <div className="">
                    {props.children.map(elem=><SwiperSlide key={elem.key}>{elem}</SwiperSlide>)}
                </div>

            </Swiper>
        </React.Fragment>
    );
}


export default Container