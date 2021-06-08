import React from 'react'
import Person from './Person'

class User extends React.Component {
    constructor() {
        super();

        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);

        this.state = {
            users: [],
            loading: true,

        }
    }

    fetchCharacters() {
        fetch('https://api.randomuser.me/')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data.results,
                    loading: false,

                })
            })
    }


    shouldComponentUpdate(_nextProps, nextState) {
        const idade = 50;
        if (nextState.users[0].dob.age > idade) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.fetchCharacters();
    };

    getUserInfo(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age,
            image: user.picture.large,
        };
    }

    render() {
        const { loading, users } = this.state
        if (loading) return <div>Carregando:</div>
    
    return(
        <div>
        <h1>Api Random User by React</h1>
        <div>
        {users.map((user, index) => (
        <Person key={ index } person={ this.getUserInfo(user) } />))}
        </div>
        </div>
        
        ); 

        }
        }
export default User;