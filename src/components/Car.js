import React from "react";
import { Container, Paper, Chip } from "@material-ui/core";
import cars from "../cars.json";
// import material ui components here //
// Container, Paper, Chip //
//  import { useParams } from "react-router-dom";


const Car = (props) => {
  //read the log
  //filter array of cars based on id in object

  const id = props.match.params.id;
  const car = cars.find((c) => c.id === +id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name}</h2>
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
