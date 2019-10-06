import React from 'react';

class NewsForm extends React.Component{

    constructor(props) {
        super(props);
       // this.addButton = this.addButton.bind(this); bind sekli.1
    }
    //bind sekli.2
    addButton = () => {
        console.log(this);
        this.props.addNews();
    }

    // 3. yontem jsx ile
    //  <button onClick={ () => this.addButton()}>Add</button>
    render(){
        return (
            <div>
                <button onClick={this.addButton}>Add</button>
            </div>
        )
    }
}

export default NewsForm;
