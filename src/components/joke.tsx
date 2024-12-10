import React, { useState } from "react";
import "./joke.css";

type Props = {
  setup: string;
  punchline: string;
};

const Jokes = ({ setup, punchline }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control of modal

  const openModal = () => setIsModalOpen(true); // Function for open modal
  const closeModal = () => setIsModalOpen(false); // Function for close modal

  return (
    <>
      {/* Button for opening modal */}
      <div className="button">
        <button onClick={openModal} className="jokeButton">
          Show Joke
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <p>{setup}</p>
            <p>{punchline}</p>
            <button onClick={closeModal} className="closeModal">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Jokes;
