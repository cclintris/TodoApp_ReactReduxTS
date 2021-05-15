import React, { useState } from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useDispatch } from "react-redux";
import { loadTodos } from "../store/actions";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(
    "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
  );

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={() => dispatch(loadTodos(url))}>Load</Button>
    </Grid>
  );
}

export default TopBar;
