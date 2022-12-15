import React from 'react'

const Sidebar = (props) => {

    return (
        

        <div className='before'>
           
            <h4>Enrolled Students</h4>

            <div style={{ marginLeft: "50px" }}>
                {/* yesma tertinary opertor use garna parxa kina ki if condition return ko body ma lekhna mildaina */}
                {props.data.length !== 0 ?

                    <table className="table table-secondary table-striped">
                        <thead className="table-info">
                            <tr>

                                <th scope="col">Description</th>
                                <th scope="col">Image</th>

                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((d,index) => {
                                return (
                                    <tr  key={index}>

                                        <td>
                                            <h6>{d.name}</h6>
                                            <p>{d.gender}</p>
                                            <p>{d.email}</p>
                                            <a href="#">{d.website}</a><br />
                                            {d.skill.map((skills,index) => {

                                                return <span key={index}>{skills + ' '}</span>
                                            }
                                            )}

                                        </td>

                                        <td style={{ textAlign: "center", width: "25%" }}>

                                            {/* yo line image display garauna ko lagi ho */}

                                            {props.data[index].image && (
                                                <div>
                                                    <img alt="not fount" width={"120px"} height={"120px"} src={URL.createObjectURL(props.data[index].image)} />
                                                    <br />
                                                </div>
                                            )}

                                        </td>
                                    </tr>
                                )

                            })}


                        </tbody>
                    </table>
                    : <h5 style={{ textAlign: "center", color: "brown", marginTop: "25px" }}>No any student enrolled yet...</h5>
                }
            </div>

        </div>
    );

}

export default Sidebar;