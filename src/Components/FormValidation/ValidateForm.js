import React, { Component } from "react";
import { Hello } from "../Hello";

class ValidateForm extends Component{
    constructor(){
        super()
        this.state= {
                name:'',
                email:'',
                password:'',
                rating:'',
                studData:[],
                error:{},
                toast:false,
                border:'',
                borderStatus:false,
                warnStatus:false,
                warn:'',
                status:false,
                isForm:false
        }
    }

   handleChange =(event)=>{
    const {name,value}= event.target
    this.setState({[name]:value})

    }

    validate = ()=>{
        if(!this.state.name){
            this.state.error.name = "Please Fill your Name"
           
        }
         if(!this.state.email){
            this.state.error.email = "Please Fill your Email"
           
        }
        if(this.state.password.length<6 || this.state.password.length>15){
            this.state.error.password = "password should be greater than 6"
           
        }

        if(!this.state.rating || parseInt(this.state.rating)<1 || parseInt(this.state.rating)>5){
            this.state.error.rating = "Rating should be 1 to 5"
           
        }
       
         

    }

    handleSubmit =(e)=>{
        e.preventDefault()
       
        this.validate()
        
            if(!this.state.name){
                this.setState({toast:true,border:'orange',warn:'⚠️',borderStatus:true,warnStatus:true})
                setTimeout(() => {
                this.setState({toast:false})
                    
                }, 2000);
            }
            else if(!this.state.email){
                this.setState({toast:true,border:'orange',warn:'⚠️',borderStatus:true,warnStatus:true})
                setTimeout(() => {
                    this.setState({toast:false})
                        
                    }, 2000);
            }
            else if(this.state.password.length<6 || this.state.password.length>15){
                this.setState({toast:true,border:'orange',warn:'⚠️',borderStatus:true,warnStatus:true})
                setTimeout(() => {
                    this.setState({toast:false})
                        
                    }, 2000);
            }
            else if(!this.state.rating || parseInt(this.state.rating)<1 || parseInt(this.state.rating)>5){
                this.setState({toast:true,border:'orange',warn:'⚠️',borderStatus:true,warnStatus:true})
                setTimeout(() => {
                    this.setState({toast:false})
                        
                    }, 2000);
            }else{
                const tempobj={
                    name:this.state.name,
                    email:this.state.email,
                    rating:this.state.rating,
                    password:this.state.password

                }
                this.state.studData.push(tempobj)
                this.setState({studData:this.state.studData})
                this.setState({status:true,toast:true,borderStatus:false,warnStatus:false ,isForm:false})
                this.setState({name:'',email:'',rating:'',password:''})

                setTimeout(() => {
                this.setState({status:false,toast:false})
                    
                }, 2000);
                
            }
           

    

           

            
    }


    goback = ()=>{

        this.setState({isForm:true})

    }

    render(){

        return(
            <>
           


              {
                    (!this.state.rating || parseInt(this.state.rating)<1 || parseInt(this.state.rating)>5)? this.state.toast?<Toast data="Rating is Required and should be 1-5"/>:'' :''
             }
               {
                    this.state.password.length<6 || this.state.password.length>15 ? this.state.toast?<Toast data="Password should be greater than 6 char"/>:'' :''
            }

         {
                    this.state.email.length<1? this.state.toast?<Toast data="Email is Required"/>:'' :''
            }
             {
                    this.state.name.length<1? this.state.toast?<Toast data="Name is Required"/>:'' :''
            }
             {
                    this.state.status? this.state.toast?<Toast data="Creted Successfully" color="green"/>:'' :''
            }


  
<Hello data={this.state.isForm ? 'Student Form' :'Student FeedBack Data'}/>
            <div className='container'>

                {
                    this.state.isForm ?
               
    <form action="" className='formClass' onSubmit={this.handleSubmit}>
        <div className="form-valid">
        <div className="labels">
       <label htmlFor="">Name</label>
        <label htmlFor="">Email</label>
        <label htmlFor="">Password</label>

        <label htmlFor="">Ratings</label>
       </div>


       <div className="inputs">
        <div className="inp">
        <input type="text" placeholder='Enter your name' style={{border:`${this.state.name<1? this.state.borderStatus?`1px solid ${this.state.border}`:'':`1px solid rgb(10, 5, 104)`}`}} value={this.state.name} name="name" onChange={this.handleChange}/>
            
            {
                    this.state.name.length<1 ?this.state.warnStatus? this.state.warn:'':''
             }
        </div>
        <div className="inp">
       <input type="text" placeholder='Enter your email' style={{border:`${this.state.email<1? this.state.borderStatus?`1px solid ${this.state.border}`:'':`1px solid rgb(10, 5, 104)`}`}} value={this.state.email} name="email" onChange={this.handleChange}/>
       {
                    this.state.email.length<1 ? this.state.warnStatus? this.state.warn:'':''
             }
</div>

<div className="inp">
       <input type="text" placeholder='Enter your password' style={{border:`${( this.state.password.length<6 || this.state.password.length>15)? this.state.borderStatus?`1px solid ${this.state.border}`:'':`1px solid rgb(10, 5, 104)`}`}} value={this.state.password} name="password" onChange={this.handleChange}/>
       {
                  ( this.state.password.length<6 || this.state.password.length>15) ? this.state.warnStatus? this.state.warn:'':''
             }
</div>
<div className="inp">
<input type="number" placeholder='Enter your ratings' style={{border:`${(!this.state.rating || parseInt(this.state.rating)<1 || parseInt(this.state.rating)>5)?this.state.borderStatus?`1px solid ${this.state.border}`:'':`1px solid rgb(10, 5, 104)`}`}}value={this.state.rating} name="rating" onChange={this.handleChange}/>
{
                   (!this.state.rating || parseInt(this.state.rating)<1 || parseInt(this.state.rating)>5)?this.state.warnStatus? this.state.warn:'':''
             }
</div>

       </div>
        </div>
       
       <input type="submit" value="Submit" className='submit'/>

    </form>
    :

           <div className="feedback">
            <div className='reviewformClass'>

<div className="head" style={{background:"#250346",color:"white"}}>
<div className="box" style={{fontWeight:"bold"}}>S.No.</div>
 <div className="box"style={{fontWeight:"bold"}}>Name</div>
 <div className="box"style={{fontWeight:"bold"}}>Email</div>
 <div className="box"style={{fontWeight:"bold"}}>Ratings</div>
 <div className="box"style={{fontWeight:"bold"}}>Action</div>


 </div>

<div className="data" >
 {
     this.state.studData.length<1? 
      <div className="head"><div className="box" style={{width:'100%'}}>No Data Available</div></div>:

     this.state.studData.map((elem,index)=>{
return(
 <>
  <div className="head">
 <div className="box">{index+1}</div>
 <div className="box">{elem.name}</div>
 <div className="box">{elem.email}</div>
 <div className="box">{elem.rating}⭐</div>
 <div className="box">Edit</div>



</div>

 </>
)
     })
 }

</div>


</div>
<button onClick={this.goback} className="submit goback">Add New Student</button>
           </div> 

        }

    </div>
            </>
        )
    }
}


export class Toast extends Component{
constructor(props){
    super()
    this.state={

    }
}

render(){
    // console.log(this.props)
    return(
        <>

        <div className="toast" style={{background:`${this.props.color==='green'?'green':'orange'}`}}>
            {this.props.data}
        </div>

        </>
    )
}
}

export {ValidateForm}