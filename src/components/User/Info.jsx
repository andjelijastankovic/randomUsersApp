import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { List } from "./List";
import { Form } from "../Form/Form";
import { Grid } from './Grid';
import { NoUser } from "../NoUser/NoUser";

import '../../styles/User.css';
export const User = ({ listView, users, setUsers, loading, setLoading, noUser, setNoUser }) => {
    const [male, setMale] = useState(0);
    const [female, setFemale] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [filterUsers, setFilterUsers] = useState([]);
    
    useEffect(() => {
        const newFiltered = users.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        setFilterUsers(newFiltered);
    }, [searchValue, users])

    useEffect(() => {
        setFemale(filterUsers.filter((user) => user.gender === "female").length)
        setMale(filterUsers.filter((user) => user.gender === "male").length)
    }, [filterUsers])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                        <Form male={male} female={female} searchValue={searchValue} setSearchValue={setSearchValue} setFilterUsers={setFilterUsers} />
                        {
                            listView ? (
                                <div className="result">
                                    {
                                        !filterUsers.length ? (
                                            <NoUser />
                                        ) : (
                                            filterUsers.map((user, i) => {
                                                return <List key={i} gender={user.gender} name={user.name.first} surname={user.name.last} img={user.picture.medium} email={user.email} date={user.dob.date} />
                                            })
                                        )
                                    }
                                </div>
                            ) : (
                                <div>
                                    {
                                        !filterUsers.length ? (
                                            <NoUser />
                                        ) : (
                                            <div className="grid">
                                                {
                                                    filterUsers.map((user, i) => {
                                                        return <Grid key={i} gender={user.gender} name={user.name.first} surname={user.name.last} img={user.picture.medium} email={user.email} date={user.dob.date} />
                                                    })
                                                }
                                            </div>


                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    );
}