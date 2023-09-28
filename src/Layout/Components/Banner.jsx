import React from 'react';

// React Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Banner() {
    return (
        <>
            <div className="h-auto w-full ">
                <Carousel autoPlay infiniteLoop labels={false} showStatus={false} showThumbs={false} swipeable={true} useKeyboardArrows={true}> 
                    <div className='h-[400px] w-full' style={{ background: `url('https://images.pexels.com/photos/6214129/pexels-photo-6214129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                   
                </Carousel>
            </div>
        </>
    )
}
