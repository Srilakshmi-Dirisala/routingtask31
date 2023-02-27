import React,{useState} from 'react';
import users from '../../Utils/data.json'
const About=()=> {
    const [userData,setUserData] = useState(users)//hooks
    const[user,setUser]=useState({})    //state //function
    
     const handleSave=(index)=>{
     }
     const handleDelete=(index)=>{   //Delete function
        const test = [...userData]  //spread operator
        test.splice(index, 1)
      
        setUserData(test)
        
    
     }
         
    return (
        <div>
            
            <table className='table'>
                    <thead>
                   
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    
                    </thead>
                <tbody>
                    {userData && userData. slice (0,9).map((item, index) => {
                       
                       return        <tr >
                             
                              <td>{item.userId}</td>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                             
                              <td>
                               
                                <button className='btn btn-info'data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => setUser(() =>item)} >
                                    Edit
                                </button>
                                &nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                              </td>
                              </tr>
                               
            })}
             </tbody>
            </table>
           
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                      <div className='row'>
                        <div className='col-md-4'>
                        <div class="modal-body">
                            <div>
                            <div class="mb-3 mt-3">
                                    <label for="id" class="form-label">userId:</label>
                                    <input type="number" class="form-control" id="number" placeholder="Enter id"
                                        name="id" value={user?.userId} onChange={(e) => setUser((prev) => { return { ...prev, userId: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="username" class="form-label">id:</label>
                                    <input type="name" class="form-control" id="name" placeholder="usernId"
                                        name="name" value={user?.id} onChange={(e) => setUser((prev) => { return { ...prev, id: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="text" class="form-label">title:</label>
                                    <input type="text" class="form-control" id="title"
                                        placeholder="title" name="pswd" value={user?.title} onChange={(e) => setUser((prev) => { return { ...prev, title: e.target.value } })} />
                                </div>
                                


                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" onClick={handleSave}>update</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
    );
        }

export default About;