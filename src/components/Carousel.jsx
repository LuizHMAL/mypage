import {Swiper, SwiperSlide} from 'swiper/react';

import styles from './Carousel.module.css';

export function Carousel(){
  
    const data = [
    { id: '1', image: 'https://placehold.it/'},
    { id: '2', image: 'src/assets/images/luizhmal.jpg'},
    { id: '3', image: 'src/assets/images/luizhmal.jpg'},
    ]
    return (

    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination = {{clickable: true}}
      navigation
      
    >
        {data.map( (item) => (
            <SwiperSlide>
                <img src={item.image}
                 className = {styles.SwiperSlide}
                  />
               
            </SwiperSlide>
        ))}
    </Swiper>
  );
};