import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import "./SearchFilters.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Card, CardContent } from "@material-ui/core";

export default function SearchFilters(props) {
  const [values, setValues] = React.useState({
    category: "",
    amount: 10,
    firstName: "",
    lastName: "",
  });

  const handleChange = (prop) => (event) => {
    if (prop === "amount") {
      event.target.value < 1 ?
        setValues({ ...values, [prop]: 1 }) :
        setValues({ ...values, [prop]: event.target.value })
    } else {
      setValues({ ...values, [prop]: event.target.value });
    }
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid className="width-100" item md={3}>
            <InputLabel>Category</InputLabel>
            <Select
              className="width-100"
              value={values.category}
              onChange={handleChange("category")}
            >
              <MenuItem value={'nerdy'}>Nerdy</MenuItem>
              <MenuItem value={'explicit'}>Explicit</MenuItem>
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
              inputProps={{ "data-testid": "fetch-amount" }}
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
              onClick={() => props.getJokes(values)}
            >
              Fetch
        </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
