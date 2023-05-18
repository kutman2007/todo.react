import { Link } from "react-router-dom"
export const Home =()=>{
    return(
        <div style={styles.main} >
           <h1 className="f">hello world</h1>
           <Link to="/login">
            <button className="login">login</button>
           </Link>
           <Link to="/click">
            <button className="click">click</button>
           </Link>
        </div>
    )
}

const styles ={
    main:{
        width:'1000px',
        margin:'0 auto',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
    }
}