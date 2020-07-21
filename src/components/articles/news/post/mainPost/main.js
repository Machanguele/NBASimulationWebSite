import React from 'react';
// import VideosList from '../../../widgets/videosList/videosList';
import NewSlider from '../../../../widgets/newsSlider/slider';
import NewsList from '../../../../widgets/newsList/newsList';


const NewsMain= () => (
    
    <div>
    

             <NewSlider
                    type= "featured"
                    start={0}
                    amount={3}
                />

                <NewsList
                    type="card"
                    loadmore={true}
                    start={3}
                    amount ={3}
                />
{/* 
        <VideosList
        type="card"
        title={false}
        loadmore={true}
        start={0}
        amount={10}
    /> */}

    </div>
    
)

export default NewsMain;