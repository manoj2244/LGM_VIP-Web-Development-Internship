import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar';

const Form = (props) => {
    
    let[name, setName] = useState("");
    let[email, setEmail] = useState("");
    let[website,setWebsite] = useState("");
    let[image,setImage] = useState(null);
    let[gender,setGender] = useState("");
    let[skill,setSkill] = useState([]);
    let[totalData,setTotalDate] = useState([]);
    

    function onsubmit(e){

        const formlist = {
            name:name,
            email:email,
            website:website,
            image:image,
            gender:gender,
            skill:skill
        }

        setTotalDate([...totalData, formlist])
       
    }

    function onChangeHandler(e){
        if(skill.includes(e.target.value)){
            let filterSkill = skill.filter((list)=>{
                if(list!=e.target.value){
                    return list;
                    
                }
            })
            setSkill([...filterSkill])

        }
        else{
            setSkill([...skill,e.target.value])
        }
    }
    function clear (){
     
    setName("")  
        setEmail("") 
    setWebsite("")
    setImage("")
    setGender("") 
    setSkill("")


    }

    // finally yaha bata call garepaxi updated totaldata value janxa
    //use effect kina use gareko vanda tyo funjction jaba totaldata set hunxa taba matra call garney natra call nagarney vanera ho.ati garena vane warning ani bar bar App.js file update hunxa tara hamlai jaba totaldata set hunxa taba yo function call garna xa so yeti [] yesto vako vaye yekpatak matra call hune thiyo useeffect vitra vako kura tara yeti [totaldata ] xa vane yekpatak suru ma execyte hunxa aarko patak  totalData set vayesi call hunxa .tara tettikai call hudaina.

    useEffect(() => {
        props.returns(totalData)
        
       
      }, [totalData]);
    
   
    
    return (
        <>
        <div>
            
                <div className="mb-3">
                    <label htmlFor="" className="form-label1">Name</label>
                    <input type="text" className="form-control" id="" value={name} onChange={(e)=>{
                        setName(e.target.value.toString());
                    }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" onChange={(e)=>{
                        setEmail(e.target.value.toString());
                    }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label1">Website</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={website} onChange={(e)=>{
                        setWebsite(e.target.value.toString());
                    }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label1">Image Link</label>
                    <input type="file" className="form-control" id="exampleInputPassword1"  onChange={(e)=>{
                        setImage(e.target.files[0]);
                    }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onChange={(e)=>{
                        setGender(e.target.value.toString());
                    }}></input>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onChange={(e)=>{
                        setGender(e.target.value.toString());
                    }}
                        
                        ></input>
                        <label className="form-check-label" htmlFor="inlineRadio1">female</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Skills</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Java" onChange={onChangeHandler}
                        ></input>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Java</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="HTML" onChange={onChangeHandler}></input>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">HTML</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="CSS" onChange={onChangeHandler}></input>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">CSS</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn" onClick={onsubmit}  style={{marginRight:"25px"}}  >Enroll Student</button>
                <button type="clear" className="btn btn-danger btn" onClick={clear}>Clear</button>
            
        </div>
       
        {/* sidebar yeta bata callkina gareko vanda yo form ko data yaha bata child ma pathauna sajilo hunxa tara App component bata pathauna paryoo vane  form bata app ma pathauna parxa ani App bata sidebar.Tara Form ma vako data haru App ma pathauna(child to parent) khojeyo vane xito change hudaina pathako value. */}

        {/* <Sidebar data={totalData}/> */}

        {/* Finaly paxi bata vayo milyo.... */}
        </>
    )
}

export default Form;