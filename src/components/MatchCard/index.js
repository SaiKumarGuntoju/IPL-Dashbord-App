import {Component} from 'react'

class MatchCard extends Component {
  componentDidMount() {
    this.getMatchCardDetails()
  }

  getMatchCardDetails = () => {
    console.log(this.props)
  }

  render() {
    return <h1>sf</h1>
  }
}
export default MatchCard
