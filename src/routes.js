import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NewsArticle from './components/articles/news/post/index';

//Components
import Home from './components/home/home';
import Layout from './hoc/layout/layout';
import VideoArticle from './components/articles/videos/video/index';
import VideosMain from './components/articles/news/main/index.js';
import NewsMain from './components/articles/news/post/mainPost/main';
import SignIn from './components/sign/signIn';
import Dashboard from './components/dashboard';

 
   const Routes = (props)=>{




        return (
            <Layout user={props.user}>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/videos/:id" exact component={VideoArticle} />
                     <Route path="/articles/:id" exact component={NewsArticle} />
                     <Route path="/videos" exact component={VideosMain}/>
                     <Route path="/news" exact component={NewsMain}/>
                     <Route path="/SignIn" exact component={SignIn}/>
                     <Route path="/dash"  exact component={Dashboard}/>
                  </Switch>
            </Layout>

          
        )
    }
    export default  Routes;

