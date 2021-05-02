import React from 'react';
import styled from 'styled-components';
import {FaUserTimes} from 'react-icons/fa';

const NoUser = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const openModal = 'open-modal';
  return (
    //  modal 
    <section className='section' onClick={()=>{modalOverlay.classList.remove(openModal)}}>
      <Wrapper>
        <div className={`modal-overlay ${openModal}`}>
          <div className="modal-container">
            <span className="purple"><FaUserTimes /> </span>
            <h4> There's no user with that user name</h4>
            {/* <button className="close-btn">
              <i className="fas fa-times"></i>
            </button> */}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
.modal-overlay {
  position: fixed;
  top: 50;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(73, 166, 233, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -10;
}
/* OPEN/CLOSE MODAL */
.open-modal {
  visibility: visible;
  z-index: 10;
}
.modal-container {
  background: var(--clr-white);
  border-radius: var(--radius);
  width: 90vw;
  height: 20vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
  span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
}
h4 {
    color: #5d55fa;
  }

.purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
`

export default NoUser
