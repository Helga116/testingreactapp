import React, {useEffect, useState} from "react";
import "./app.scss"
import List from "../components/list";
import Search from "../components/search";

const data = [
    'HTML',
    'CSS',
    'JAVA SCRIPT',
    'TYPE SCRIPT',
    'REACT',
    'NODE JS',
    'JEST',
    'GRAPH QL'
]
function App() {
    const [search, setSearch] = useState('')
    const [items, setItems] = useState(data)

    useEffect(() => {
        setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
    }, [search])

  return (
    <div className="App">
        {/*<div>*/}
        {/*    <Header/>*/}
        {/*</div>*/}
        <div>
            <Search value={search} onChange={(e) => setSearch(e.target.value)}>
                Search course
            </Search>
        </div>
        <div>
            <List items={items}/>
        </div>

    </div>
  );
}

export default App;
