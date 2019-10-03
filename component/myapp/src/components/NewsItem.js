import React , {Component} from 'react';
import '../NewsItem.css'
//component
class NewsItem extends Component{
    render(){
        return (
            //tek div icerisinde olmali hersey
            <div>
                <h1 className="title">Hello React</h1>
                <p>
                    Deneme yazısı
                </p>

                <label htmlFor=""></label>
            </div>
        )
    }
}
//export component
export default NewsItem;