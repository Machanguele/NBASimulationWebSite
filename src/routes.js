import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NewsArticle from './components/articles/news/post/index';

//Components
import Home from './components/home/home';
import Layout from './hoc/layout/layout';
import VideoArticle from './components/articles/videos/video/index';
import VideosMain from './components/articles/news/main/index.js';
import NewsMain from './components/articles/news/post/mainPost/main';

export default class Routes extends Component {
    render() {
        return (
            <Layout>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/videos/:id" exact component={VideoArticle} />
                     <Route path="/articles/:id" exact component={NewsArticle} />
                     <Route path="/videos" exact component={VideosMain}/>
                     <Route path="/news" exact component={NewsMain}/>
                     
                  </Switch>
            </Layout>

          
        )
    }
}
