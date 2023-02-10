import React,{useState} from 'react'
import './Home.css'
import todo from '../todo'
import{useNavigate} from 'react-router-dom'
import uuid from 'react-uuid'
import Todo from '../todo'

function Home() {

    
   const [data,setdata] = useState('')
   
   const handleSubmit =(event)=>{
    event.preventDefault()
    // console.log(data); 
    //generate uuid
    const ids = uuid()
    let uniqid = ids.slice(0,7)
    // console.log(uniqid);
    Todo.push(
        {
            id:uniqid,
            data
        }
    )
    console.log(Todo);

    
    navigate('/')





   }


const navigate = useNavigate();
    const handleDelete = (id)=>{

        let index = todo.map((item)=>item.id).indexOf(id)
        todo.splice(index,1)
        console.log(todo);
        navigate('/')



    }
    console.log(todo);

   
    
  return (
    <div className='todo-container'>

        <div className='input-section'>
        <h1>Todo App</h1>
             <form>
            <input  type="text" placeholder='Enter Items...'
            onChange={(event)=>setdata(event.target.value)}
            />
            <button onClick={(event)=>handleSubmit(event)} className='button'>ADD TASK</button>
            &nbsp;&nbsp;
            <button className='restbutton' type='reset'>RESET</button>
            </form>
             </div>

        <ul>
            {
                todo && todo.length >0 ?
                todo.map((item=>(
                    <li>
                        {item.data} 
                    <button type='submit' onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                    </li>

                )))
                :"PLEASE ADD SOME TASK"
                


            }
           



        </ul>
   </div>
  )
}

export default Home