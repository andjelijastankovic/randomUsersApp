import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { User } from './components/User/Info';
import { Footer } from './components/Footer/Footer';

function App() {
  const [listView, setListView] = useState(true);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noUser, setNoUser] = useState(false);
  const [fetchLastTime, setFetchLastTime] = useState(0);

  const reload = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=15')
      .then((response) => response.json())
      .then(response => {
        setUsers(response.results);
        localStorage.setItem('storedUsers', JSON.stringify(response.results));
        setFetchLastTime(Date.now());
        localStorage.setItem('fetchLastTime', Date.now());
        setNoUser(false);
        setLoading(false);
      })
  }

  useEffect(() => {
    const storedUsers = localStorage.getItem('storedUsers');
    const fetchTime = localStorage.getItem('fetchLastTime');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      setFetchLastTime(fetchTime);
      setLoading(false);
    } else {
      setLoading(true);
      fetch('https://randomuser.me/api/?results=15')
        .then((response) => response.json())
        .then(response => {
          setUsers(response.results);
          localStorage.setItem('storedUsers', JSON.stringify(response.results));
          setFetchLastTime(fetchTime);
          setFetchLastTime(Date.now());
          localStorage.setItem('fetchLastTime', Date.now());
          setNoUser(false);
          setLoading(false);
        })
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={
          <>
            <Header listView={listView} setListView={setListView} reload={reload} />
            <User listView={listView} users={users} setUsers={setUsers}
              loading={loading} setLoading={setLoading} noUser={noUser} setNoUser={setNoUser} />
            <Footer fetchLastTime={fetchLastTime} />
          </>
        }></Route>
      </Routes>
    </>
  );
}

export default App;