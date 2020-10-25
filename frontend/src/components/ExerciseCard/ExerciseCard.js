import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default class ExerciseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      level: this.props.level,
    };
  }

  render() {
    var diffTagColor = "";
    var diffTagTextColor = "white";

    switch (this.props.level) {
      case "intermediate":
        diffTagColor = "#FFE761";
        diffTagTextColor = "#252A31";
        break;
      case "advanced":
        diffTagColor = "#F45E6D";
        break;
      default:
        diffTagColor = "#61DEA4";
    }

    return (
      <Card style={{ maxWidth: "250px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {this.state.name}
            </Typography>
            <Typography>{this.state.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "#EBEFF5" }}>
          Difficulty:
          <Button
            size="small"
            color="primary"
            style={{
              backgroundColor: diffTagColor,
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <h5
              style={{
                padding: "0",
                margin: "0",
                color: diffTagTextColor,
                fontWeight: "bold",
                fontSize: "10",
              }}
            >
              {this.state.level}
            </h5>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
