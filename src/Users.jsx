import {useEffect, useState} from "react";
import {Button, Table} from "antd";
import {useNavigate} from "react-router-dom";


const Users = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await res.json();
            setData(users);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone No.',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: 'Website URL',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button
                    onClick={() => {
                        navigate(`/user/details/${record.id}`); // Navigate to the user page
                    }
                    }
                    type="primary">Go to User</Button>
            ),

        }
    ];


    return (
        <div>
            <h1>Users</h1>
            <p>Users will be listed here</p>
            {/*{JSON.stringify(data, null, 3)}*/}
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default Users;
