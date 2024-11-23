import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
class App extends Component {
  state = {searchInput: '', userDetailsList: userDetailsList}
  changeTheInput = event => {
    this.setState({searchInput: event.target.value})
  }
  deleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state;
    console.log('delete triggered')  
    const filteredData = userDetailsList.filter(eachItem=>eachItem.uniqueNo !== uniqueNo)
    this.setState({userDetailsList:filteredData})

  }
  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)
    const searchResult = userDetailsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          className="input-search"
          onChange={this.changeTheInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App