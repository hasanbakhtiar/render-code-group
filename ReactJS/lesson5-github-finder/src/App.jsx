import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Users from './components/Users'
import SearchForm from './components/SearchForm'
import axios from 'axios'
import Swal from 'sweetalert2'

const App = () => {

  const [user, setUser] = useState([]);

  const searchUser = (keyword) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => setUser(res.data.items))
  }
  return (
    <div>
      <Header />
      <SearchForm sendKeyword={searchUser} />
      <Users comingUsers={user} />
      <button onClick={() => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "error"
        });
      }}>alert</button>
    </div>
  )
}

export default App