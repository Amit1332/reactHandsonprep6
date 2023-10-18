import React, { Component } from "react";

class FormClass extends Component{
    constructor(){
        super()
        this.state= {
                name:'',
                email:'',
                rating:'',
                studData:[],
                toast:false,
                border:'',
                borderStatus:false,
                warnStatus:false,
                warn:'',
                status:false
        }
    }

   handleChange =(event)=>{
    const {name,value}= event.target
    this.setState({[name]:value})

    }

    handleSubmit =(e)=>{
        e.preventDefault()
       
        
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
            else if(!this.state.rating){
                this.setState({toast:true,border:'orange',warn:'⚠️',borderStatus:true,warnStatus:true})
                setTimeout(() => {
                    this.setState({toast:false})
                        
                    }, 2000);
            }else{
                const tempobj={
                    name:this.state.name,
                    email:this.state.email,
                    rating:this.state.rating
                }
                this.state.studData.push(tempobj)
                this.setState({studData:this.state.studData})
                this.setState({status:true,toast:true,borderStatus:false,warnStatus:false})
                this.setState({name:'',email:'',rating:''})

                setTimeout(() => {
                this.setState({status:false,toast:false})
                    
                }, 2000);
                
            }
           

            

            
    }

    render(){

        return(
            <>
           


              {
                    this.state.rating.length<1? this.state.toast?<Toast data="Rating is Required"/>:'' :''
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
            <div className='container'>
    <form action="" className='formClass' onSubmit={this.handleSubmit}>
        <div className="form-valid">
        <div className="labels">
       <label htmlFor="">Name</label>
        <label htmlFor="">Email</label>
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
<input type="number" placeholder='Enter your ratings' style={{border:`${this.state.rating<1?this.state.borderStatus?`1px solid ${this.state.border}`:'':`1px solid rgb(10, 5, 104)`}`}}value={this.state.rating} name="rating" onChange={this.handleChange}/>
{
                    this.state.rating.length<1 ?this.state.warnStatus? this.state.warn:'':''
             }
</div>

       </div>
        </div>
       
       <input type="submit" value="Submit" className='submit'/>

    </form>

            <div className='reviewformClass'>

               <div className="head" style={{background:"#250346",color:"white"}}>
               <div className="box" style={{fontWeight:"bold"}}>S.No.</div>
                <div className="box"style={{fontWeight:"bold"}}>Name</div>
                <div className="box"style={{fontWeight:"bold"}}>Email</div>
                <div className="box"style={{fontWeight:"bold"}}>Ratings</div>

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

          
            </div>
                </>
              )
                    })
                }
            
            </div>

            </div>

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
    console.log(this.props)
    return(
        <>

        <div className="toast" style={{background:`${this.props.color==='green'?'green':'orange'}`}}>
            {this.props.data}
        </div>

        </>
    )
}
}

export {FormClass}