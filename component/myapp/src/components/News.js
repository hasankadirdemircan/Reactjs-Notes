import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends Component {
    static propTypes = {
        news: PropTypes.array.isRequired,
        name: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired
    };
    //component'de name gelmezse default hasan verilecek.
    static defaultProps = {
        name : "hasan"
    };
   //js expression yazabilirsin. 
    render(){
        const title = "react js";
        const description = "react description"
        let nameElement = <div>demircan</div>

       const elements =  this.props.news.map(news => 
        <NewsItem
        key = {news.id}
        newsData = {news}
        />
        )
        return(
            <div>
               { elements }
                {this.props.name}
            </div>
        )
    }
}

export default News;

/* 1. uzun yol.
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
                   title = {news[2].title}
                   description = {news[2].description}/>
                   */