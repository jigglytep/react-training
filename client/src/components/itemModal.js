import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //add atim via addItem action
    this.props.addItem(newItem);
    //close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Button
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ margin: "2rem" }}
                  block // TODO: why does this make button go outside the modal
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
