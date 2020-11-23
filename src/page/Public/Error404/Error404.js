import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";
//import ERROR404 from "../../assets/images/error/404vip.gif";
import ERROR404 from "../../../assets/images/error/404vip.gif";
import { useHistory } from "react-router-dom";

Error404.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "500px",
  },
}));

function Error404(props) {
  const classes = useStyle();
  const history = useHistory();
  const handleBack = () => {
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <Button
        style={{
          marginBottom: "15px",
        }}
        onClick={handleBack}
        size="large"
        color="secondary"
        variant="contained"
      >
        GO HOME
      </Button>

      <img className={classes.image} alt="404" src={ERROR404}></img>
    </div>
  );
}

export default Error404;
