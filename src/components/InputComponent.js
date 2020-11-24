import React, {Component} from 'react';

class InputComponent extends Component {

    state = {
        renderView: 0,
        default: "a"
    };

    close = e => {
        this.setState({
            renderView: +e.target.value
        });
    };


    render() {
        return (
            <div className={"input-element"}>
                <label>ECTS<input class="ects-in" value={this.props.val_ects} type="text"></input></label>
                <label> <input class="grades-in" value={this.props.val_grade} type="text"></input> Grade</label>
            </div>
        )
            ;
    }
}


export default InputComponent;