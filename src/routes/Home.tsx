import Search from "../components/Search";

import { UserProps } from "../types/User";

import {useState} from 'react';

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName:string) : Promise<void> =>{
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    const {avatar_url, following, followers, location, login} = data;

    const objUser: UserProps = {
      avatar_url,
      followers,
      following,
      location,
      login
    }
    setUser(objUser);
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <p>{user.login}</p>}
    </div>
  )
}

export default Home