import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {team} = this.props
    return (
      <Link to={`/team-matches/${team.id}`}>
        <li className="team-card-container">
          <img
            className="team-card-logo"
            alt="team"
            src={team.team_image_url}
          />
          <h1 className="team-card-name">{team.name}</h1>
        </li>
      </Link>
    )
  }
}
export default TeamCard
