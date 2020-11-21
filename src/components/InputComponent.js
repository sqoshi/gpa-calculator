import React, {Component} from 'react';

class InputComponent extends Component {

    state = {
        renderView: 0
    };

    close = e => {
        this.setState({
            renderView: +e.target.value
        });
    };



    render() {
        return (
            <div className={"input-element"}>
                <label>ECTS<input class="ects-in" type="text"></input></label>
                <label> <input class="grades-in" type="text"></input> Grade</label>
                <button onClick={this.close}> remove row</button>
            </div>
        )
            ;
    }
}


export default InputComponent;