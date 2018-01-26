import React, {Component} from 'react'

type Props = {}
type State = {}

export default class App extends Component<Props, State> {
  state = {}

  componentWillMount () {
    fetch('/hello')
    .then((res) => res.json())
    .then((res) => this.setState(res))
    .catch(console.error)
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Awesome Gimi Project</h1>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 20
  }
}
