import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsName: []}

  componentDidMount() {
    this.getDashboardDetals()
  }

  getDashboardDetals = async () => {
    const dashBoardUrl = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(dashBoardUrl, options)
    const data = await response.json()
    console.log(data)
    this.setState({teamsName: data.teams})
  }

  render() {
    const {teamsName} = this.state
    return (
      <div className="home-page-container">
        <div className="home-page-title-container">
          <img
            className="ipl-logo"
            alt="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="home-page-title">IPL Dashbord</h1>
        </div>
        <ul className="team-card-body-container">
          {teamsName.map(team => (
            <TeamCard team={team} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
