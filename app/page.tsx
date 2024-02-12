import Image from 'next/image'
import NewUsers from './users/new/NewUsers'
import UsersPage from './users/page'

export default function Home() {
  return (
  <main>
  <h1>Hello World</h1>
  <link href='/users'>Users</link>
  <NewUsers/>
  <UsersPage/>
  <NewUsers/>
  </main>
    
  )
}
