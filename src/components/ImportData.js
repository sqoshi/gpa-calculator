import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import XLSX from 'xlsx';
import InputComponent from "./InputComponent";


function remove_exam_mark(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('(E)') !== -1) {
        str = str.replace(' (E)', '')
    }
    return parseFloat(str)
}

function remove_rows_without_grade(rows) {
    let arr = []
    for (let row of rows) {
        let grade = row['Ocena']
        if (grade !== '---') {
            row['Ocena'] = remove_exam_mark(row['Ocena'])
            arr.push(row)
        }
    }
    console.log(arr)
    return arr
}

function gouge_field(array, field) {
    let values = []
    for (let x of array) {
        values.push(x[field])
    }
    return values
}

function insert_inputs(data) {
    let parnt = document.getElementById('inputs-list')
    let arr = []
    for (const [index, el] of data.entries()) {
        arr.push(<InputComponent val_ects={el['ECTS']} val_grade={el['Ocena']}/>)
    }
    ReactDOM.render(arr, parnt);

}

export default class ImportData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excelData: {}
        }
    }

    excelToJson(reader) {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, {type: 'binary'});
        var data = {};
        wb.SheetNames.forEach(function (sheetName) {
            var rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
            let clear_data = remove_rows_without_grade(rowObj)
            console.log(gouge_field(clear_data, 'ECTS'))
            console.log(gouge_field(clear_data, 'Ocena'))
            insert_inputs(clear_data)

            data[sheetName] = JSON.stringify(rowObj);
        });
        this.setState({excelData: data});
    }

    loadFileXLSX(event) {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = this.excelToJson.bind(this, reader);
        reader.readAsBinaryString(input.files[0]);
    }

    render() {
        return (
            <input style={{display: 'inline'}} type="file" onChange={this.loadFileXLSX.bind(this)}/>
        );
    }
}