import ListGroup from "react-bootstrap/ListGroup";
import { Item } from "../types/item";

interface IProps {
  selectedDish: Item | undefined;
}

const DishComments = (props: IProps) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
);

export default DishComments;
