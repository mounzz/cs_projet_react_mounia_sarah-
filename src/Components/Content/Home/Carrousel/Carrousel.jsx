import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./carrousel.css";
import carrousel1 from "../../../../images/carousel1.jpg"
import carrousel2 from "../../../../images/blog.jpg"
import carrousel3 from "../../../../images/carousel3.jpg"



export default function Carrousel() {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="img">
                        <img src={carrousel1} alt="" />
                    </div>
                    <div className="text">
                        <h1><u>LEATHER BAGS</u></h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img">
                        <img src={carrousel2} alt="" />
                    </div>
                    <div className="text">
                        <h1><u>LEATHER SHOES</u></h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img">
                        <img src={carrousel3} alt="" />
                    </div>
                    <div className="text">
                        <h1><u>KIDS BAGS</u></h1>
                        <p>New Collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
