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
    
    



    </ul>
 
    </>
  )
}

export default UsersPage