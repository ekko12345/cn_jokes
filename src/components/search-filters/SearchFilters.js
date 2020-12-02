import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import "./SearchFilters.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function SearchFilters() {
  const [values, setValues] = React.useState({
    category: "",
    amount: 10,
    firstName: "",
    lastName: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const getQueryParams = () => {
    let str = [];
    if(values.firstName !== '') str.push(`firstName=${values.firstName}`);
    if(values.lastName !== '') str.push(`lastName=${values.lastName}`);
    if(values.category !== '') str.push(`limitTo=${[values.category]}`);
    return str.join('&');
  }
  const getJokes = () => {
    console.log(getQueryParams());
    fetch(`http://api.icndb.com/jokes/random/${values.amount}?${getQueryParams()}`)
    .then((res) => res.json()).then((res) => console.log(res))
  }
  return (
    <Grid container spacing={3}>
      <Grid className="width-100" item md={3}>
          <InputLabel>Category</InputLabel>
          <Select
            className="width-100"
            value={values.category}
            onChange={handleChange("category")}
          >
            <MenuItem value={'nerdy'}>Nerdy</MenuItem>
            {/* <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
      </Grid>
      <Grid item md={3}>
        <TextField
          className="width-100"
          label="Number"
          type="number"
          value={values.amount}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange("amount")}
        />
      </Grid>
      <Grid item md={3}>
        <TextField
          className="width-100"
          label="Firstname"
          variant="filled"
          onChange={handleChange("firstName")}
        />
      </Grid>
      <Grid item md={3}>
        <TextField
          className="width-100"
          label="Firstname"
          variant="filled"
          onChange={handleChange("lastName")}
        />
      </Grid>
      <Grid item md={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getJokes()}
        >
          Fetch
        </Button>
      </Grid>
    </Grid>
  );
}
