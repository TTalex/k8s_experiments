import styles from './loading.module.css'
import { getResult } from '../lib/apicaller'

class Loading extends React.Component {
  constructor(props){
    super(props);
    console.log("props", props);

    this.state = {
      result: null
    }
  }
  load() {
    this.setState({result: null})
    getResult(this.props.string, this.props.language)
      .then((result) => {
        console.log("result", result);
        if (!result.err) {
          this.setState({result: result.result})
        }
      })
  }
  componentDidMount() {
    this.load()
  }
  componentDidUpdate(prevProps) {
    if (this.props.string != prevProps.string) {
      this.load()
    }
  }
  render() {
    if (this.state.result != null) {
      return <div className={styles.loading}>{this.props.language} result: {this.state.result}</div>
    }
    if (this.props.language) {
      return <div className={styles.loading}>Loading {this.props.language} result...</div>
    }
    return <div></div>;
  }
}

export default Loading;
