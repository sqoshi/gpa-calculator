import React, {Component} from 'react';
import InputComponent from "./InputComponent";

class AppComponent extends Component {
    state = {
        numChildren: 0
    }

    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent key={i} number={i}/>);
        };

        return (
            <ParentComponent addChild={this.onAddChild}>
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
        <p>
            <button onClick={props.addChild}> shot!</button>
        </p>
        <div id="inputs-list">
            {props.children}
        </div>
    </div>
);

const ChildComponent = props => <InputComponent />//<div>{"I am child " + props.number}</div>;

export default AppComponent;