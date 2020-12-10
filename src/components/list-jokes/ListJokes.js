import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const divStyle = {
  marginTop: '20px'
}
const cardStyle = {
  margin: '10px 0px'
};
const uniqueJokesStyle = {
  width: 'fit-content',
  color: '#fff',
  backgroundColor: '#3f51b5',
  float: 'right'
}

export default function ListJokes(props) {
  const jokes = () => {
    if (props.jokes) {
      return props.jokes.map((joke) => (
        <Card role="card" style={cardStyle} key={joke.id}>
          <CardContent>{joke.joke}</CardContent>
        </Card>
      ));
    } else {
      return (
        <Card role="card" style={cardStyle}>
          <CardContent>No jokes</CardContent>
        </Card>
      );
    }
  };
  return (
    <div style={divStyle}>
      <Card style={uniqueJokesStyle}>
        <CardContent>Unique jokes: {props.uniqueJokes}</CardContent>
      </Card>
      {jokes()}
    </div>);
}
