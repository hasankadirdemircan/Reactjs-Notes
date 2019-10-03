import React, {Component} from 'react';
import NewsItem from './NewsItem';

class News extends Component {
   //js expression yazabilirsin. 
    render(){
            const title = "react js";
            const description = "react description"
        let nameElement = <div>demircan</div>
        return(
            <div>
                {2 + 2 === 4 ? "evet" : "hayır"} 
                {nameElement}
                   <NewsItem
                   //diger component'lere veri taşımak için
                    title = {title}
                    description = {description}
                    />
                   <NewsItem
                   title = {title}
                   description = {description}/>
                   <NewsItem
                   title = {title}
                   description = {description}/>
            </div>
        )
    }
}

export default News;