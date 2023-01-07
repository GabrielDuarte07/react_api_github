type SearchProps = {
  loadUser: (userName:string) => Promise<void>
}

import {BsSearch} from 'react-icons/bs';
import {useState, KeyboardEvent} from 'react';
import styles from './Search.module.css';

const Search = ({loadUser}:SearchProps) => {
  const [userName, setUserName] = useState<string>("");
  const handleKeyDown = (e:KeyboardEvent):void =>{
    if (e.key === "Enter")
      loadUser(userName);

  }
  return (
    <div className={styles.search}>
      <h2>Busque por um usuario:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.searchContainer}>
        <input type="text" placeholder='Digite o nome do usuario' onChange={e=>setUserName(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={()=>loadUser(userName)}>
          <BsSearch/> 
        </button>
      </div>
    </div>
  )
}

export default Search