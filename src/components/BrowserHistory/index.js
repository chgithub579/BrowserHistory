import {Component} from "react"
import "./index.css"
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component{
    state={searchInput:"",
        browserList:initialHistoryList
    }

    Onsearch=event=>{
        this.setState({
            searchInput:event.target.value
        })
    }

    delete=(id)=>{
      const {browserList}=this.state 
      const finalList=browserList.filter(each =>
        each.id!=id
      )
      this.setState({
        browserList:finalList
      })
    }

    render(){
        const {searchInput,browserList}=this.state
        const filteredList=browserList.filter(each=>
            each.title.toLowerCase().includes(searchInput.toLowerCase())
        )
        return(
           <div className="bg-container">
            <div className="top-container">
                 <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="avatar" className="image" /> 
                 <div className="search-container">
                     <button className="search-button" alt="search">
                         <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="avatar" className="search" />
                     </button>
                     <input type="search" placeholder="search" className="search-input" onChange={this.Onsearch}/>
                 </div>
                
            </div>

            <div className="card-container">
                <ul className="list-container">
                    {filteredList.map(each =>(
                        <li className="list-item">
                            <p className="time">{each.timeAccessed}</p>
                            <div className="logo-image">
                                <img src={each.logoUrl} alt="avatar" />
                            </div>
                            <div className="logo-text"> 
                                <p className="para">{each.title}</p>
                                <p className="para">{each.domainUrl}</p>
                            </div>
                            
                            <div className="button-container">
                                 <button className="button" onClick={()=>this.delete(each.id)} ><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" className="delete-img" /></button>
                            </div>
                           
                        </li>
                    )
                        
                    )}
                </ul>
            </div>
           
           </div>
        )
    }
}
export default BrowserHistory