import Search from "../components/Search";

import { UserProps } from "../types/User";

import {useState} from 'react';

const Home = () => {
  const [user,setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName:string) : Promise<void> =>{
    const res = await fetch(`https://api.github/users/${userName}`);

    const data = await res.json();

    console.log(data);
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
    </div>
  )
}

export default Home