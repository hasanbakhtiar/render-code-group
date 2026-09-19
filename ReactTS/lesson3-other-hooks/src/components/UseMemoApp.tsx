import axios from "axios";
import { useEffect, useMemo, useState } from "react"

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};


const UseMemoApp = () => {

    const [count, setCount] = useState<number>(0);

    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])


    
    const counterClick = () => {
        setCount(count + 1);
        console.log("counter running");
    }
    
    const rowUserMemo = useMemo( () => {
        console.log('rowUser running');

        return users.map((item: User) => (
            <li key={item.id} onClick={() => { setEmail(item.email) }}>{item.name}</li>
        ))
    }, [users]);

    
    return (
        <div>
            <p>{email.length === 0 ? "" : `User email:${email}`}</p>
            <ul>
                {rowUserMemo}
            </ul>
            <hr />
            <span>{count}</span>
            <button onClick={counterClick}>+</button>
        </div>
    )
}

export default UseMemoApp