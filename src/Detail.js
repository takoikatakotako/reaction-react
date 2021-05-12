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
            <div>
                <Link to="/">Top</Link>
                <div>
                    <h2>{this.state.data['english']}</h2>

                    <h2>GeneralFormula</h2>
                    {this.state.data['generalFormulas'].map(value => (
                        <img
                            alt={this.state.data['directoryName']}
                            style={{
                                width: 800
                            }}
                            src={"https://chemist.swiswiswift.com/resource/images/" + this.state.data['directoryName'] + "/" + value['imageName']}/>
                    ))}

                    <h2>Mechanism</h2>
                    {this.state.data['mechanisms'].map(value => (
                        <img
                            alt={this.state.data['directoryName']}
                            style={{
                                width: 800
                            }}
                            src={"https://chemist.swiswiswift.com/resource/images/" + this.state.data['directoryName'] + "/" + value['imageName']}/>
                    ))}

                    <h2>Example</h2>
                    {this.state.data['examples'].map(value => (
                        <img
                            alt={this.state.data['directoryName']}
                            style={{
                                width: 800
                            }}
                            src={"https://chemist.swiswiswift.com/resource/images/" + this.state.data['directoryName'] + "/" + value['imageName']}/>
                    ))}


                    <h2>Supplement</h2>
                    {this.state.data['supplements'].map(value => (
                        <img
                            alt={this.state.data['directoryName']}
                            style={{
                                width: 800
                            }}
                            src={"https://chemist.swiswiswift.com/resource/images/" + this.state.data['directoryName'] + "/" + value['imageName']}/>
                    ))}
                </div>
            </div>
        );

    }
}

export default Detail;
