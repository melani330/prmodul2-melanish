// import axios from "axios";
// import React from "react";
// class Followers extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         users: [],
//         follower: [],
//         following: [],
//         button: "Follow"
//       }
//     }
  
//     componentDidMount = () => {
//       this.getUsers()
//     }
  
//     getUsers = () => {
//       axios(`http://localhost:7001/api/users`)
//         .then(response => {
//           this.setState({ users: response.data})
//           console.log(response.data)
//         })
//         .catch(error => {
//           this.setState({ error: true })
//         })
//     }
  
//     followUser = (e) => {
//       e.preventDefault();
//       const userId = this.props.user[0].id
//       const followedId = e.target.value
      
//       axios.post(`http://localhost:7001/api/users/${userId}/follow/${followedId}`, {
//         userId,
//         followedId,
//         createdAt: new Date().toISOString().slice(0, 10),
//         updatedAt: new Date().toISOString().slice(0, 10)
//       })
//       .then(response => {
//         console.log(response.data)
//         this.setState(state => ({
//           button: "Unfollow",
//           loggedIn: !state.loggedIn
//         }))
//       })
//       .catch(error => {
//         console.log(error)
//       })
//     }
  
//     unfollowUser = (e) => {
//       e.preventDefault();
//       const userId = this.props.user[0].id
//       const followedId = e.target.value
  
//       axios.delete(`http://localhost:7001/api/users/${userId}/unfollow/${followedId}`)
//       .then(response => {
//         console.log(response)
//         this.setState({ button: "Follow" })
//       })
//       .catch(error => {
//         this.setState({ error: true })
//       })
//     }
  
  
//     render() {
//       const { users, button } = this.state
//       const userId = this.props.user[0].id
  
//       return (
          
//         <div>
//           <h2>Users in Unax</h2>
//           <ul>
//             {users.map((user, index) => {
//              if(user.id !== userId) {
//                return (
//                 <card className="users" key= {index}>
//                   <cardBody>
//                     <cardTitle>{user.user_name}</cardTitle>
//                     <button id="btn" value={user.id} onClick={this.followUser}>Follow</button>
//                     <button id="btn" value={user.id} onClick={this.unfollowUser}>Unfollow</button>
//                   </cardBody>
//                 </card>
//                )}  
//             })}
//           </ul>
//         </div>
//       )
//     }
//   }
//   export default Followers;
