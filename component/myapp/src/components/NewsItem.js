import React , {Component} from 'react';
import '../NewsItem.css'
//component
class NewsItem extends Component{
    render(){
        console.log(this.props);
        const {title, description} = this.props;
        return (
            //tek div icerisinde olmali hersey
            <div>
                <h1 className="title">{ this.props.title }</h1>
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