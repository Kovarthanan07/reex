import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { } from "@material-ui/core";
import { Row } from "react-bootstrap";

const CoffeCard = (props) => {
  const { title, status, payment, career, imageUrl, view, date } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 1600,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    status: {
      color: payment
    }
  }));
  const classes = useStyles();

  return (
    <div data-aos="zoom-in">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Grid
                    className="tags"
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Row>
                      <img
                        src={imageUrl}
                        alt="profile pic"
                        style={{
                          width: "auto",
                          height: 40,
                          borderRadius: "50%",
                        }}
                      />
                      <div
                        style={{
                          fontSize: 10,
                          width: 100,
                          marginLeft: 10,
                        }}>
                          The NANs.
                        <div>
                          <Row>
                            <i
                              className="fas fa-star"
                              style={{
                                color: "#f6830f",
                                fontSize: 8,
                                marginTop: 3,
                                marginLeft: 15,
                                paddingRight: 2,
                              }}
                            ></i>
                            <span style={{ color: "#f6830f", marginRight: 3 }}>4.9</span>(3456 )
                          </Row>
                        </div>
                      </div>
                    </Row>
                  </Grid>
                  <br />
                  <Typography variant="body2" gutterBottom>
                    <div className={classes.status}> {status}</div>
                  </Typography>
                </Grid>

              </Grid>
              <Grid item>
                <Divider orientation="vertical" /></Grid>
                  <br />
                <Grid item style={{ marginInlineStart: 5, backgroundColor: "#fafafa", borderRadius: 15, marginRight: 5, marginLeft: 5 }}>
                  <br />

                <Typography variant="h6" style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                  {view}
                </Typography>

                <Typography variant="subtitle2" style={{ display: "flex", justifyContent: "center" }}>
                  {date}
                </Typography>
                  <br />
                <Grid align="center">
                  <Button size="small" style={{ color: "green" }}>
                    {" "}
                    Edit
                  </Button>{" "}
                  <Button size="small" style={{ color: "red" }}>
                    {" "}
                    Cancel{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default CoffeCard;
