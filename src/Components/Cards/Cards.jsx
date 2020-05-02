import React from "react";
import "../../App.css";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { useState } from "react";

function Cards({ props }) {
  //   console.log(props);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const onModalDisplay = (title) => {
    setIsModalOpen(true);
    setTitle(title);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        style={{ height: "300px" }}
        size="mini"
        onClose={onModalClose}
        open={isModalOpen}
        closeIcon
      >
        <Header content={title} />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onModalClose} color="red">
            <Icon name="remove" /> No
          </Button>
          <Button color="green">
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <div className="col-md-3 mt-3">
        {/* <div className="row"> */}
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{props}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button
              onClick={() => onModalDisplay(props)}
              className="btn btn-primary"
            >
              View Details
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Cards;
