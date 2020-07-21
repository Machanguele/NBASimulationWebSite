import React  from 'react';
import {Link} from 'react-router-dom';

import Slick from 'react-slick';

import './slider.css'

const SliderTemplate =(props)=> {
    // console.log(props);

    let template = null;

    const settings = {
        dots:true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    switch(props.type){
        case('featured'):
            template =props.data.map((item, i) =>{
                return(
                    <div key={i}>
                        {/* {i} */}
                        <div className = "featured_item">
                            <div className="featured_image"
                                style={{background: `url(../images/articles/${item.image})` 

                                 }}
                            >

                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured_caption">
                                    {item.title}

                                </div>
                            </Link>

                        </div>
                    </div>
                )
            })
        break;
        

        
        default: template = null;

    }

        return (
            <div>
               <Slick {...settings}>
                   {/* <div>1</div>
                   <div>2</div>
                   <div>3</div> */}

                   {template}
               </Slick>
            </div>
        );
    }


export default SliderTemplate;