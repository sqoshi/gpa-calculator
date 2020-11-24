import React, {Component} from 'react';
import './App.css';

import AppComponent from "./components/AppComponent"
import InfoComponent from "./components/InfoComponent";
import ImportData from "./components/ImportData";

function remove_el(element) {
    element.parentNode.removeChild(element);
}

function get_sum_arr(arr) {
    let res = 0;
    for (let x of arr) {
        res = res + x
    }
    return res
}

function scale_2gpa(grade) {
    let result;
    grade = grade.toString()
    if (grade === "A+" || grade === "5.5" || grade === "A" || grade === "5.0" || grade === "5" || grade === 5.5 || grade === 5.0) {
        result = 4.0
    } else if (grade === "B+" || grade === "4.5" || grade === 4.5) {
        result = 3.3
    } else if (grade === "B" || grade === "4.0" || grade === "4" || grade === 4.0) {
        result = 3.0
    } else if (grade === "C+" || grade === "3.5" || grade === 3.5) {
        result = 2.3
    } else if (grade === "C" || grade === "3.0" || grade === "3" || grade === 3.0) {
        result = 2.0
    } else if (grade === "F" || grade === "2.0" || grade === "2" || grade === 2.0) {
        result = 0.0
    }

    return result
}

function clear(element) {
    for (let x of element) {
        if (x.value === " " || x.value === "") {
            let inp_el = x.parentNode.parentNode
            inp_el.parentNode.removeChild(inp_el)
        }
    }
}

function get_child_inputs(element) {
    let arr = [];
    let empty = false;
    for (let x of element) {
        if (x.value === " " || x.value === "") {
            let inp_el = x.parentNode.parentNode
            inp_el.parentNode.removeChild(inp_el)
            empty = true
        } else {
            arr.push(parseInt(x.value))
        }
    }
    if (empty) {
        alert("You have left some empty inputs.")
        return
    }
    return arr
}

function get_gpa(ects, grades) {
    let ects_sum = get_sum_arr(ects)

    let cumulative_sum = 0;
    for (let i = 0; i < ects.length; i++) {
        cumulative_sum = cumulative_sum + (ects[i] * scale_2gpa(grades[i]))
    }
    return cumulative_sum / ects_sum
}

class App extends Component {

    compute = () => {
        let gpa = get_gpa(get_child_inputs(document.getElementsByClassName("ects-in")), get_child_inputs(document.getElementsByClassName("grades-in")))
        alert("Your gpa is equal to " + gpa.toString())
    };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple GPA Calculator</h1>
                    <InfoComponent/>
                    <ImportData/>
                    <AppComponent/>
                    <button onClick={this.compute}>Compute GPA</button>
                    <div id={'result-gpa'}></div>
                </div>

            </div>
        );
    }
}

export default App;

