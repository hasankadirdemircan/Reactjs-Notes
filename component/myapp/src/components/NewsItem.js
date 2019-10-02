import React , {Component} from 'react';

//component
class NewsItem extends Component{
    render(){
        return (
            //tek div icerisinde olmali hersey
            <div>
                <h1>Hello React</h1>
                <p>
                    Deneme yazısı
                </p>
            </div>
        )
    }
}
//export component
export default NewsItem;