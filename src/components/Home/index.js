import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: false}

  renderHomePage = () => (
    <>
      <div className="home-page-container">
        <div className="home-page-title-container">
          <img
            className="ipl-logo"
            alt="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="home-page-title"> IPL Dashboard</h1>
        </div>
        <ul className="team-card-body-container">
          <TeamCard />
        </ul>
      </div>
    </>
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderHomePage()
        )}
      </>
    )
  }
}
export default Home
