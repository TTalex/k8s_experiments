import Head from 'next/head'
import Loading from '../components/loading'
import { getJsResult, getGoResult, getPyResult } from '../lib/apicaller'
import { withRouter } from 'next/router';

class Home extends React.Component  {
  constructor(props){
    super(props);
    console.log("props", props);
    this.state = {
      string: '',
      tmpstring: '',
    }
    this.refresh = this.refresh.bind(this);
    this.inputChange = this.inputChange.bind(this);
    if (props.router.query.string) {
      this.state.tmpstring = props.router.query.string;
    }
  }
  inputChange(e) {
    this.setState({tmpstring: e.target.value});
  }
  refresh() {
    this.setState({string: this.state.tmpstring})
  }

  render () {
    if (this.state.string) {
      return (
        <>
          <Head>
            <title>String cleaner</title>
          </Head>
          <h1>String cleaner</h1>
          <input onChange={this.inputChange} value={this.state.tmpstring}></input>
          <button onClick={this.refresh}>Refresh</button>
          <Loading language="js" string={this.state.string}/>
          <Loading language="js" string={this.state.string}/>
          <Loading language="js" string={this.state.string}/>
          <Loading language="go" string={this.state.string}/>
          <Loading language="go" string={this.state.string}/>
          <Loading language="go" string={this.state.string}/>
          <Loading language="py" string={this.state.string}/>
          <Loading language="py" string={this.state.string}/>
          <Loading language="py" string={this.state.string}/>
          </>
      )
    } else {
      return (
        <>
          <Head>
            <title>String cleaner</title>
          </Head>
          <h1>String cleaner</h1>
          <input onChange={this.inputChange} value={this.state.tmpstring}></input>
          <button onClick={this.refresh}>Refresh</button>
          </>
      )
    }

  }
}
// export async function getServerSideProps({ query }) {
//   let jsResults = [];
//   let goResults = [];
//   let pyResults = [];
//   if (query.string) {
//     for (var i = 0; i < 3; i++) {
//       let jsResult = await getJsResult(query.string);
//       jsResults.push(jsResult.result)
//       // let goResult = await getGoResult(query.string);
//       // goResults.push(goResult.result)
//       // let pyResult = await getPyResult(query.string);
//       // pyResults.push(pyResult.result);
//     }
//   }
//   return {props: {jsResults, goResults, pyResults}};
// }

export default withRouter(Home)
