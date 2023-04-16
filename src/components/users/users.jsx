import React, {useEffect, useState} from 'react';

function Users(props) {
    const axios = require('axios')
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = response.data.map(user => user)
            setUsers(users)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        loadUsers()
    }, [])


    return (
        <div>
            {users.map(user => <div key={user.id} data-testid='user-item'>{user.name}</div>)}
        </div>
    );
}

export default Users;