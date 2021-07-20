import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {matchData} = this.props
    return (
      <div className="latest-match-container">
        <div>
          <h1>{matchData.competingTeam}</h1>
          <p>{matchData.date}</p>
          <p>{matchData.venue}</p>
          <p>{matchData.result}</p>
        </div>
        <img
          className="competing-team-logo"
          alt={matchData.competingTeam}
          src={matchData.competingTeamLogo}
        />
        <div className="innings-container">
          <p>First Innings</p>
          <p>{matchData.firstInnings}</p>
          <p>Second Innings</p>
          <p>{matchData.secondInnings}</p>
          <p>Man of the Match</p>
          <p>{matchData.manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{matchData.umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
