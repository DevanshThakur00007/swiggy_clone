import {useState ,useEffect} from 'react'

function Clock(){

    const [time,setTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{

    let idd=    setInterval(()=>{

              setTime(new Date().toLocaleTimeString());

        },1000)

        return ()=>clearInterval(idd)

    },[])

    return(
        <>

          <div><h1>Time :{time}</h1></div>

        </>
    )
}
export default Clock;