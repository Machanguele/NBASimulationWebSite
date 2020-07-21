import React from 'react';


import { Link } from 'react-router-dom';
import CardInfo from '../cardIn/cardInfo';

const VideosListTemplate = (props) => {
    let vid = props.dados;
    console.log(vid);
     const lista =  vid.map( (item) => 
         <Link to={`/videos/${item.id}`} key={item.id}>
               <div className="videoList_wrapper">

                    <div className="left"
                        style={{
                        background:`URL(/images/videos/${item.image})`
                        }}
                    >

                
                        <div></div>
                
                    </div>

                    <div className="right" >
                         <CardInfo teams={props.teams} team={item.team} date={item.date}/> 
                        <h2>{item.title}</h2>
                    </div>
                </div>
         </Link>
    );
    return lista;
    



    // const lista = props.dados;
    // console.log(lista)
    
    // let valores = lista.map((n) =>
    // <li key={n.id}>
    //     {n.title}
    // </li>

    // );
    // return valores;
    


}

export default VideosListTemplate;