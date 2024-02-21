import React from 'react'

const UsersPage = async () => {
 interface User{
  id:number;
  name:string;
  email:string;
 }
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users: User[] = await res.json();



  return (
    <>
     <h1>This is User's Page</h1>
    <ul>
    
    {users.map(user => <li key={user.id}>{user.name}</li>)}
    {users.map(user => <li key={user.name}>{user.name}</li>)}
    {users.map(user => <li key={user.email}>{user.name}</li>)}



    </ul>
 
    </>
  )
}

export default UsersPage