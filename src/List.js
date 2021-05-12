import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const style = {
    listItem: {
        flex: 1,
        width: '640px'
    },

    // xxx: {
    //     display: block,
    //     margin-left: auto,
    //     margin-right: auto,
    // }
};

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentWillMount() {
        if (this.state.loading) {
            return;
        }

        document.title = '反応一覧';

        let url = 'https://chemist.swiswiswift.com/resource/reactions.json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
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
                <div>
                    <p>Loading...</p>
                </div>
            );
        }

        return (
            <div>
                <ul style={{
                    alignItems: 'center',
                    // backgroundColor: 'red',
                }}>
                    {this.state.data.map(value => (
                        <a href={"/reaction/" + value['directoryName']}>
                            <h2>{value['directoryName']}</h2>
                            <img
                                alt={value['directoryName']}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: 800
                                }}
                                src={"https://chemist.swiswiswift.com/resource/images/" + value['directoryName'] + "/" + value['thmbnailName']}/>
                        </a>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
