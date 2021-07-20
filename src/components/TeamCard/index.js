import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  state = {teamsName: []}

  componentDidMount() {
    this.getDashboardDetails()
  }

  getDashboardDetails = async () => {
    const dashBoardUrl = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(dashBoardUrl, options)
    const data = await response.json()
    const upadatedList = data.teams.map(each => ({
      teamImageUrl: each.team_image_url,
      teamNames: each.name,
      id: each.id,
    }))
    this.setState({teamsName: upadatedList})
  }

  render() {
    const {teamsName} = this.state
    return (
      <>
        {teamsName.map(card => {
          const {teamImageUrl, teamNames, id} = card
          return (
            <Link to={`/team-matches/${id}`}>
              <li className="team-card-container">
                <img className="team-card-logo" alt="team" src={teamImageUrl} />
                <h1 className="team-card-name">{teamNames}</h1>
              </li>
            </Link>
          )
        })}
      </>
    )
  }
}
export default TeamCard
