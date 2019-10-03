import React, {Component} from 'react';
import NewsItem from './NewsItem';

class News extends Component {
   //js expression yazabilirsin. 
    render(){
        let nameElement = <div>demircan</div>
        return(
            <div>
                {2 + 2 === 4 ? "evet" : "hayır"} 
                {nameElement}
                   <NewsItem/>
                   <NewsItem/>
                   <NewsItem/>
            </div>
        )
    }
}

export default News;