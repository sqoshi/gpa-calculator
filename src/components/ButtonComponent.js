import React, {Component} from 'react';


class ResultComponent extends React.Component {
    render() {
        return (
            <p> Your GPA is {this.props.gpa}</p>
        );
    }
}

export default ResultComponent;