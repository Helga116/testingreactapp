import React, {useEffect, useState} from "react";
import "../app.scss"
import Users from "../../components/users/users";

// const data = [
//     'HTML',
//     'CSS',
//     'JAVA SCRIPT',
//     'TYPE SCRIPT',
//     'REACT',
//     'NODE JS',
//     'JEST',
//     'GRAPH QL'
// ]

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prevState => !prevState)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 1000)
    }, [])
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <Header/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <List items={data}/>*/}
            {/*</div>*/}
            <h1 data-testid="value-elem">{value}</h1>
            {toggle === true && <div data-testid="toggle-elem">toggle</div>}
            {data && <div style={{color: "red"}}>somedata</div>}
            <h1>Hello world!</h1>
            <button data-testid="toggle-btn" onClick={onClick}>Click</button>
            <input type="text" placeholder="placeholder" onChange={onChange}/>
            <div><Users/></div>
        </div>
    );
}

export default App;