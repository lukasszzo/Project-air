import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class StationInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }

        getData() {
            fetch('http://api.gios.gov.pl/pjp-api/rest/station/findAll').then(result => result.json()).then(car => this.setState({data: stationName})).catch(err => console.log('Error!' + err));
        }

        componentDidMount() {
            this.getData();
        }


        render() {
            if (this.state.data === []) {
                return (<div>
                    Loading data...
                </div>)
            } else {
                return (<div>
                    {
                        this.state.data.map(elem => {
                            return (<ul key={elem.id}>
                                <li>{elem.stationName}</li>
                            </ul>)
                        })
                    })
                </div>)
            }

        }
    }

    class App extends React.Component {
        render() {
            return (<StationInfo/>)
        }
    }

    ReactDOM.render(<App/>, document.getElementById('app'));
});
