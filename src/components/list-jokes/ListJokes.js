import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
const divStyle = {
  marginTop: '20px'
}
const cardStyle = {
  margin: '10px 0px'
};

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
        <Card role="card">
          <CardContent>No jokes</CardContent>
        </Card>
      );
    }
  };
  return <div style={divStyle}>{jokes()}</div>;
}
