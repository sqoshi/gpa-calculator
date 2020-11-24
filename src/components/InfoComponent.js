import React, {Component} from 'react';

class InfoComponent extends Component {
    render() {
        return (
            <div className={"info-div"}>
                <p> Polish grade system is based on interval 2.0, 5.5 </p>
                <table>
                    <tr>
                        <td>U.S Grade</td>
                        <td>Polish Scale</td>
                        <td>GPA Scale</td>
                    </tr>
                    <tr>
                        <td>A+</td>
                        <td>5.5</td>
                        <td>4.0</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>5.0</td>
                        <td>4.0</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>--</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>4.5</td>
                        <td>3.3</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>4.0</td>
                        <td>3.0</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>--</td>
                        <td>2.7</td>
                    </tr>
                    <tr>
                        <td>C+</td>
                        <td>3.5</td>
                        <td>2.3</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>3.0</td>
                        <td>2.0</td>
                    </tr>
                    <tr>
                        <td>C-</td>
                        <td>--</td>
                        <td>1.7</td>
                    </tr>
                    <tr>
                        <td>D+</td>
                        <td>--</td>
                        <td>1.3</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>--</td>
                        <td>1.0</td>
                    </tr>
                    <tr>
                        <td>D-</td>
                        <td>--</td>
                        <td>0.7</td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td>2.0</td>
                        <td>0.0</td>
                    </tr>


                </table>
                <p> You are supposed to input polish scale grades</p>

            </div>
        )
            ;

    }
}


export default InfoComponent;