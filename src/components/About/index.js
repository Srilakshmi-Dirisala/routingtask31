import React,{useState} from 'react';
import users from '../../Utils/index.json'
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
                   
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Actions</th>
                    </thead>
                <tbody>
                    {userData && userData.map((item, index) => {
                       
                       return        <tr >
                             
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                              <td>{item.address.street}</td>
                              <td>{item.phone}</td>
                              <td>{item.company.name}</td>
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
                                    <label for="name" class="form-label">id:</label>
                                    <input type="name" class="form-control" id="number" placeholder="Enter Name"
                                        name="id" value={user?.id} onChange={(e) => setUser((prev) => { return { ...prev, id: e.target.value } })} />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="name" class="form-label">Name:</label>
                                    <input type="name" class="form-control" id="name" placeholder="Name"
                                        name="name" value={user?.name} onChange={(e) => setUser((prev) => { return { ...prev, name: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="pwd" class="form-label">username:</label>
                                    <input type="password" class="form-control" id="username"
                                        placeholder="username" name="pswd" value={user?.username} onChange={(e) => setUser((prev) => { return { ...prev, username: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">email:</label>
                                    <input type="password" class="form-control" id="pwd"
                                        placeholder="Email" name="pswd" value={user?.email} onChange={(e) => setUser((prev) => { return { ...prev, email: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">address:</label>
                                    <input type="text" class="form-control" id="address"
                                        placeholder="address" name="pswd" value={user?.address} onChange={(e) => setUser((prev) => { return { ...prev, address: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="pwd" class="form-label">phone:</label>
                                    <input type="text" class="form-control" id="number"
                                        placeholder="number" name="pswd" value={user?.phone} onChange={(e) => setUser((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">company:</label>
                                    <input type="text" class="form-control" id="company"
                                        placeholder="company" name="pswd" value={user?.company} onChange={(e) =>setUser((prev) => { return { ...prev, company: e.target.value } })} />
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