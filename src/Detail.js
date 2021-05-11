import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Detail extends Component {

    constructor(props) {
        super(props);

        const {params} = this.props.match;
        const directoryName = params.directoryName;
        this.state = {
            loading: false,
            directoryName: directoryName,
        };
    }

    componentWillMount() {
        if (this.state.loading) {
            return;
        }

        document.title = this.state.directoryName;

        let url = 'https://chemist.swiswiswift.com/resource/reactions/' + this.state.directoryName + '.json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    loading: true,
                    data: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
                alert(error.toString());
            });
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="App-header">
                    <p>Loading...</p>
                </div>
            );
        }

        return (
            <div className="App-header">
                <div>
                    <h2>{this.state.data['directoryName']}</h2>
                    <img
                        src={"https://chemist.swiswiswift.com/resource/images/" + this.state.data['directoryName'] + "/" + this.state.data['thmbnailName']}/>
                </div>
            </div>
        );

    }
}

export default Detail;
