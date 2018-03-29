import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class BrowserDetection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialArray: [],
            callRender: false
        }

    }

    componentDidMount() {
        //on browser load call the removeDuplicateFrArray function to show the details
        this.getFilteredArray();
    }
    //function to remove duplicate from the array
    getFilteredArray = () => {


        var items = [
            { name: 'Edward', value: 21 },
            { name: 'Sharpe', value: 37 },
            { name: 'And', value: 45 },
            { name: 'The', value: 12 },
            { name: 'Magnetic', value: 13 },
            { name: 'Zeros', value: 37 }
        ];

        this.setState({ initialArray: items })

    }
    //to sort the object integer key 
    sortByValue = () => {
        var sortByValue = this.state.initialArray.sort(function (a, b) {
            return a.value - b.value;
        });
        this.setState({ callRender: !this.state.callRender })
    }
    //to sort the object string

    sortByName = () => {
        // sort by name
        var sortByName = this.state.initialArray.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        this.setState({ callRender: !this.state.callRender })
    }

    render() {


        return (
            <MuiThemeProvider>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px' }}>Initial Array :</div>
                    <div >
                        {this.state.initialArray.length != 0 && this.state.initialArray.map((details, index) =>
                            <div key={index}>
                                <div style={{ fontWeight: 'bold', fontSize: '17px' }}> {JSON.stringify(details)}</div>
                            </div>
                        )}
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px' }}>Sorted Array :</div>
                    <div>
                        <RaisedButton style={{ margin: '11px' }} label="sortByValue" primary={true} onClick={() => this.sortByValue()} />
                        <RaisedButton label="sortByName" primary={true} onClick={() => this.sortByName()} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


