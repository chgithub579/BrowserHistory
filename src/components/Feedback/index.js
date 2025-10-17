import {Component} from "react"
import "./index.css"

class Feedback extends Component{
    state={isFeedbackselected:false}

    clickButton=()=>{
      this.setState({
        isFeedbackselected:true
    })
    }


    renderHomepage=()=>{
        const{resources}=this.props 
        const {emojis}=resources


        return(
            <div className="feedback-container">
                <h1 className="heading">How satisfied are you with customer <br /> support performance?</h1>
                 <ul className="list-container">
                {
                    emojis.map(each =>(
                        <li key={each.id}>
                        <button 
                        type="button"
                        className="button"
                        onClick={this.clickButton}
                        >
                            <img src={each.imageUrl} alt="avatar" className="emoji" /> <br />
                            <p className="para2">{each.name}</p>
                        </button>
                        </li>
                    ))
                }
            </ul>
            </div>
           
        )
    }
    
    renderThankyouScreen=()=>{
        const {resources}=this.props
        const {loveEmojiUrl}=resources
        return(
        <div className="card-conatiner">
            <img src={loveEmojiUrl} alt="love" className="love-emoji" />
            <h1 className="head">Thank You</h1>
            <p className="para">We will use your feedback to improve customer <br /> performance</p>
        </div>
        )
    }

    render(){
        const {isFeedbackselected}=this.state
        return(
            <div className="bg-container">
                <div className="card-container">
                    {isFeedbackselected?
                    this.renderThankyouScreen(): this.renderHomepage()}
                </div>
            </div>
        )
    }
}
export default Feedback