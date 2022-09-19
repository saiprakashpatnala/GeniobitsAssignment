import {Component} from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import PersonDetails from '../PersonDetails'

import PopupComponent from '../PopupComponent'

import Header from '../Header'

import LeftBar from '../LeftBar'

import './index.css'

class Home extends Component {
  state = {array: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://gorest.co.in/public/v2/users'
    const options = {
      method: 'GET',
    }
    const res = await fetch(url, options)
    const data = await res.json()
    const formatData = data.map(each => ({
      id: each.id,
      name: each.name,
      gender: each.gender,
      email: each.email,
      status: each.status,
    }))
    this.setState({array: formatData})
    console.log(formatData)
  }

  render() {
    const {array} = this.state
    return (
      <div>
        <Header />
        <div className="home-container">
          <LeftBar />
          <div className="details-container">
            <div className="information-container">
              <div>
                <div className="top-section">
                  <h1 className="heading">Tasks</h1>
                </div>
                <hr />
                <div className="results-container">
                  <div className="result-1">
                    <p className="number">06</p>
                    <p className="result">ongoing</p>
                  </div>
                  <div className="result-2">
                    <p className="number">24</p>
                    <p className="result">Delayed</p>
                  </div>
                  <div className="result-3">
                    <p className="number">10</p>
                    <p className="result">Completed</p>
                  </div>
                  <div className="result-4">
                    <p className="number">100</p>
                    <p className="result">Total Assigned</p>
                  </div>
                </div>
              </div>
              <PopupComponent />
            </div>
            <div className="tracks-container">
              <h1 className="heading">Tracks List</h1>
              <div className="input-container">
                <select className="select-item">
                  <option>All</option>
                  <option>By Date</option>
                  <option>By Status</option>
                  <option>By Name</option>
                  <option>By Email</option>
                </select>
                <input type="date" className="date-element" />
              </div>
            </div>
            <div className="search-item">
              <div className="search-container">
                <AiOutlineSearch />
                <input
                  type="search"
                  placeholder="Search Tasks"
                  className="search"
                />
              </div>
              <p className="numbers">&lt; 1 to 10 &gt;</p>
            </div>
            <div className="table-container">
              <p className="details-heading">Name</p>
              <p className="details-heading">Gender</p>
              <p className="details-heading">Email</p>
              <p className="details-heading">Status</p>
            </div>
            <ul className="list-element">
              {array.map(item => (
                <PersonDetails key={item.id} details={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
