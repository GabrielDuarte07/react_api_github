import Search from "../components/Search";

import { UserProps } from "../types/User";

import {useState} from 'react';

import User from '../components/User';

import Error from "../components/Error";

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);

  const loadUser = async (userName:string) : Promise<void> =>{
    setUser(null);
    setError(false);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status >= 400){
      setError(true);
      return;
    }

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
      {user && <User {...user}/>}
      {error && <Error/>}
    </div>
  )
}

export default Home