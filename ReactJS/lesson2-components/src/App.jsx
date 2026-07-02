import React, { Component } from 'react'
import { List, ListFif } from './components/List'
import flowserImg from './assets/img/images.jpeg'



// class App extends Component {
//     render() {
//         return (
//             <ol className='list-group'>
//                 <h1 className='text-center my-5 my-color'>All lists</h1>
//                 <p style={{ "color": "red", "fontSize": "20px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro, tempore vero debitis vel officiis. Vel nesciunt deleniti eos ducimus est, necessitatibus eveniet, omnis, fugit enim tempore aut odio minima!</p>
//                 <img width={100} src={flowserImg} alt="" />
//                 <ListFif />
//                 <List />
//             </ol>
//         )
//     }
// }



const App = () => {
    return (
        <ol className='list-group'>
            <h1 className='text-center my-5 my-color'>All lists</h1>
            <p style={{"color":"red","fontSize":"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro, tempore vero debitis vel officiis. Vel nesciunt deleniti eos ducimus est, necessitatibus eveniet, omnis, fugit enim tempore aut odio minima!</p>
            <img width={100} src={flowserImg} alt="" />
            <ListFif />
            <List/>
        </ol>
    )
}

export default App