import React from "react";
import "./section2.css";

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="container">
          <form action="" className="formbox">
            <h3>Connect With Us</h3>
            <div className="inputbox">
              <span>Name :</span>
              <div className="box">
                <div className="icon">
                  <ion-icon id="ion" name="person-circle-outline"></ion-icon>
                </div>
                <input type="text" />
              </div>
            </div>
            <div className="inputbox">
              <span>Email :</span>
              <div className="box">
                <div className="icon">
                  <ion-icon id="ion" name="mail-unread-outline"></ion-icon>
                </div>

                <input type="text" />
              </div>
            </div>
            <div className="inputbox">
              <span>Message :</span>
              <div className="box">
                <div className="icon">
                  <ion-icon id="ion" name="send-outline"></ion-icon>
                </div>

                <textarea id="textarea" name="" cols="21" rows="8"></textarea>
              </div>
            </div>
            <div className="inputbox">
              <div className="box">
                <input
                  id="sub-btn"
                  className="submit"
                  type="submit"
                  value="Send message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section2;
