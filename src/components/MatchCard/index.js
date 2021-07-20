import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  state = {recentMatches: [], isWon: false}

  componentDidMount() {
    this.getMatchCardDetails()
  }

  getMatchCardDetails = () => {
    const {recent} = this.props
    const updatedRecentMatches = {
      competingTeamLogo: recent.competing_team_logo,
      competingTeam: recent.competing_team,
      result: recent.result,
      matchStatus: recent.match_status,
    }
    if (updatedRecentMatches.matchStatus === 'Won') {
      this.setState({isWon: true})
    }
    this.setState({recentMatches: updatedRecentMatches})
  }

  render() {
    const {recentMatches} = this.state
    const {isWon} = this.state

    return (
      <li className="recent-match-card">
        <img
          className="recent-image"
          alt={recentMatches.competingTeam}
          src={recentMatches.competingTeamLogo}
        />
        <h1 className="match-title">{recentMatches.competingTeam}</h1>
        <p className="match-para">{recentMatches.result}</p>
        {isWon ? (
          <p className="status" style={{color: '#31f565'}}>
            {recentMatches.matchStatus}
          </p>
        ) : (
          <p className="status" style={{color: 'red'}}>
            {recentMatches.matchStatus}
          </p>
        )}
      </li>
    )
  }
}
export default MatchCard
