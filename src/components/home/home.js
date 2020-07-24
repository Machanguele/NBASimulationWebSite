import React  from 'react';

import NewSlider from '../widgets/newsSlider/slider';
import NewsList from '../widgets/newsList/newsList'
import VideoList from '../widgets/videosList/videosList';
import TesteFirebase from '../home/testeFirebase';

const Home = ()=> {

        return (
            <div>
                <NewSlider
                    type= "featured"
                    start={0}
                    amount={3}
                /> 

                {/* <TesteFirebase/> */}

                 <NewsList
                    type="card"
                    loadmore={true}
                    start={3}
                    amount ={3}
                />

                <VideoList 
                    type = "card"
                    title = {true}
                    loadmore = {true}
                    start = {0}
                    amount = {3}

                />
           

               

            </div>
        )
    }
export default  Home;
