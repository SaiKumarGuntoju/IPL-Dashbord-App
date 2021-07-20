import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {matchData: [], recentMatches: [], isLoading: true}

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
      competingTeamLogo: data.competing_team_logo,
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
      isLoading: false,
    })
  }

  renderTeamMatchPageContainer = () => {
    const {teamBanner, matchData, recentMatches} = this.state
    return (
      <div className="teamMatch-page-container">
        <img className="banner-image" alt="asd" src={teamBanner} />
        <h1 className="latest-match-title">Latest Matches</h1>
        <LatestMatch matchData={matchData} />
        <ul className="recent-match-container">
          {recentMatches.map(recent => (
            <MatchCard recent={recent} key={recent.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="threedots" color="#1fff26" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchPageContainer()
        )}
      </>
    )
  }
}

export default TeamMatches
