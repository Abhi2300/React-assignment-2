import React, { useState } from "react";
import { Button, Segment, Grid } from "semantic-ui-react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Segment textAlign="center" className="div1">
      <Grid textAlign="center" verticalAlign="middle" className="div2">
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <h1>Count: {count}</h1>
            <Button
              color="green"
              onClick={() => setCount(count + 1)}
              style={{ margin: 10 }}
            >
              Increment
            </Button>
            <Button
              color="red"
              disabled={count === 0}
              onClick={() => setCount(count - 1)}
              style={{ margin: 10 }}
            >
              Decrement
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p className="div3">Developed by: Abhinav paul</p>
      <p className="div3">Registration Number: 12006872</p>
    </Segment>
  );
};

export default Counter;
