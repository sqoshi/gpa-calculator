import React, {Component} from 'react';
import InputComponent from "./InputComponent";

require('./AppComponent.css')

function isEmpty(str) {
    return !str.trim().length;
}

function clean_empties(element) {
    let to_del = []
    for (let x of element) {
        if (isEmpty(x.value)) {
            to_del.push(x)
        }
    }
    for (let x of to_del) {
        let inp_el = x.parentNode.parentNode
        inp_el.parentNode.removeChild(inp_el)
    }
}

function delete_retakes(element, val) {
    let to_del = []
    for (let x of element) {
        if (x.value.toString() === val.toString()) {
            to_del.push(x)
            let inp_el = x.parentNode.parentNode
            inp_el.parentNode.removeChild(inp_el)
        }

    }
    for (let x of to_del) {
        let inp_el = x.parentNode.parentNode
        inp_el.parentNode.removeChild(inp_el)
    }
}

class AppComponent extends Component {
    state = {
        numChildren: 0
    }
    exclude_retakes = () => {
        delete_retakes(document.getElementsByClassName("grades-in"), 2)
        delete_retakes(document.getElementsByClassName("grades-in"), 'F')
    };
    remove_empty = () => {
        clean_empties(document.getElementsByClassName('ects-in'), 'empty')
        clean_empties(document.getElementsByClassName('grades-in'), 'empty')
    };
    remove_all = () => {
        let le = document.getElementsByClassName('ects-in')
        let i = 0;
        while (le.length > 0) {
            console.log(le)
            let inp_el = le[i].parentNode.parentNode
            inp_el.parentNode.removeChild(inp_el)
        }
    };

    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent key={i} number={i}/>);
        }
        ;

        return (
            <ParentComponent addChild={this.onAddChild} exclude_retakes={this.exclude_retakes}
                             remove_empty={this.remove_empty}
                             remove_all={this.remove_all}>
                {children}
            </ParentComponent>
        );
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}

const ParentComponent = props => (
    <div className="input-content">
        <div className={'buttons'}>
            <button onClick={props.addChild}>Add row</button>
            <button onClick={props.exclude_retakes}>Exclude retakes</button>
            <button onClick={props.remove_empty}>Remove empty</button>
            <button onClick={props.remove_all}>Remove all</button>
        </div>
        <div id="inputs-list">
            {props.children}
        </div>
    </div>
);

const ChildComponent = props => <InputComponent/>

export default AppComponent;