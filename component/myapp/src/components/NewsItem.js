import React , {Component} from 'react';
import PropTypes from 'prop-types';
import '../NewsItem.css'
//component
class NewsItem extends Component{

    constructor(props){
        super();
        console.log(props);
    }

    static propTypes = {
        newsData: PropTypes.shape({
           title: PropTypes.string.isRequired,
           description: PropTypes.string.isRequired
        }).isRequired
    };
    render(){
        console.log(this.props);
        const {title, description} = this.props.newsData;
        return (
            //tek div icerisinde olmali hersey
            <div>
                <h1 className="title">{ title }</h1>
                <p>
                    { description }
                </p>

                <label htmlFor=""></label>
            </div>
        )
    }
}
//export component
export default NewsItem;