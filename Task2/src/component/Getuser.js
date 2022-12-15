import React from 'react'
import { useState } from 'react';
import './Getuser.css'

const Getuser = () => {
    const [user, setUser] = useState([]);
    const [css, setCss] = useState("");
    const [css1, setCss1] = useState("d-none");


    const loadusers = () => {
         setTimeout(()=>{

        const loaduser = async () => {
            const response = await fetch("https://api.sampleapis.com/coffee/hot");
            const jsonresponse = await response.json();
            setUser(jsonresponse);
            setCss("spinner-border text-primary visually-hidden my-5")
            setCss1("d-none")


        }
        loaduser();

         },1000);


         setCss("spinner-border text-primary my-5")
         setCss1("")


        


    }

    return (
        <div>
            
 
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>Coffee Shop</a>
                    <button type="button" className="btn btn-outline-secondary" style={{ color: "white" }} onClick={loadusers}>Get coffee List</button>

                </div>
            </nav>
            <div  className= {css} role="status" style={{marginLeft:"660px"}}>
  <span className="visually-hidden">Loading...</span>
  
</div>
<span style={{marginLeft:"635px"}} className={css1}>please wait...</span>


            <div className="cards">
            <h5 style={{textAlign:"center"}}>Coffee Lists</h5>
                {user.map((list, index) => {
                    return (
                        <>
                        
                        <div key={index} className="card w-40 my-3">
                            
                            <div className="card-body">
                                <h6 className="card-title">Card Id: {list.id}</h6>
                                <p className="card-text"><span>Title: </span>{list.title}</p>
                                <p className="card-text">  <span>Description: </span>{list.description}</p>
                                <p className="card-text"><span>Ingredients: </span>
                                    {
                                        list.ingredients.map((p, ids) => {
                                            return (
                                                <>
                                                    {/* {console.log(list.ingredients.length)} */}
                                                    <span key={ids} style={{ fontWeight: "400", fontStyle: "italic" }}>{

                                                        ids === list.ingredients.length - 1 ? p + "." : p + ", "

                                                    }</span>
                                                </>
                                            )

                                        })
                                    }
                                </p>

                            </div>
                        </div>
                        </>
                    )

                })}


            </div>



        </div>
    );
}

export default Getuser;