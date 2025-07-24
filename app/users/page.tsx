import React from 'react'

const UsersPage = async () => {
	 const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
	 const usersData = await users.json();
	 console.log(usersData);
  return (
	 <>
	 <ul>
	 {usersData.map((user: any) => (
		<li key={user.id}>{user.name}</li>
	 ))}
	 </ul>
	 </>
  )
}

export default UsersPage