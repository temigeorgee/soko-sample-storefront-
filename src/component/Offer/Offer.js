import { FiTruck } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import './Offer.css';
import React from 'react';

function Offer() {
  return (
    <>
      <div className="offers">
        <div className="small-container">
          <div className="row">
            <div className="offer-1">
              <div className="offerimg">
                <FiTruck />
              </div>
              <div className="offertext">
                <p>Fast Delivery</p>
              </div>
            </div>
            <div className="offer-2">
              <div className="offerimg">
                <FaAward />
              </div>
              <div className="offertext">
                <p>Buyer Protection</p>
              </div>
            </div>
            <div className="offer-3">
              <div className="offerimg">
                <Ri24HoursFill />
              </div>
              <div className="offertext">
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
