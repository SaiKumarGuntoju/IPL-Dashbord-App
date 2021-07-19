import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchData: [], recentMatches: []}

  componentDidMount() {
    this.getTheTeamMatchDetails()
  }

  getTheTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const teamMatchUrl = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(teamMatchUrl, options)
    const details = await response.json()
    const data = details.latest_match_details
    const latestMatchData = {
      competingTeam: data.competing_team,
      teamLogo: data.competing_team_logo,
      date: data.date,
      firstInnings: data.first_innings,
      manOfTheMatch: data.man_of_the_match,
      matchStatus: data.match_status,
      result: data.result,
      umpires: data.umpires,
      venue: data.venue,
      secondInnings: data.second_innings,
    }

    this.setState({
      matchData: latestMatchData,
      teamBanner: details.team_banner_url,
      recentMatches: details.recent_matches,
    })
  }

  render() {
    const {teamBanner, matchData, recentMatches} = this.state
    console.log(recentMatches)
    return (
      <div className="teamMatch-page-container">
        <img alt="asd" src={teamBanner} />
        <h1>Latest Matchs</h1>
        <LatestMatch matchData={matchData} />
        <MatchCard recentMatches={recentMatches} />
      </div>
    )
  }
}

export default TeamMatches
