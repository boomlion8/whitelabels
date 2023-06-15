import React from "react";
import "./bottombar.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";

function Bottombar() {
  return (
    <>
      <div className="bottombar">
        <div className="bottombarTitle">Maecenas</div>
        <div className="bottombarHeader">ac sollicitudin est iaculis quis</div>

        <div className="bottombarDetails">
          Maecenas pretium nisi nisi, eu aliquet lacus tempor ut. Maecenas
          turpis orci, suscipit ac turpis vitae, volutpat interdum metus.
          Praesent finibus lectus a magna ultricies, sit amet bibendum libero
          tempor. Duis bibendum justo porttitor, tincidunt ipsum a, congue nibh
        </div>

        <div className="bottombarCard">
          <div className="bottombarCardfirst">
            <div className="cardTitle">quam</div>
            <div className="cardTitle">eget</div>

            <div className="cardTitle">egestas</div>
            <div className="cardTitle">Nulla</div>

            <div className="cardTitle">Sed</div>
            <div className="cardTitle">tortor</div>
            <div className="cardTitle">lacus</div>
          </div>

          <div className="bottombarCardSecond bottombarMargin">
            <div className="cardTitle">Phasellus</div>
            <div className="cardTitle">lacinia</div>
            <div className="cardTitle">varius</div>
            <div className="cardTitle">varius</div>
            <div className="cardTitle">sed</div>
          </div>
        </div>

        <div className="bbCard">
          <div className="arrow">
            <ArrowBackIcon />
          </div>
          <div className="bbcarditem">
            <div className="cardItem">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
                alt=""
                className="card_img"
              />
            </div>

            <div className="bbcardTitle">Maecenas</div>
          </div>

          <div className="bbcarditem">
            <div className="cardItem">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
                alt=""
                className="card_img"
              />
            </div>

            <div className="bbcardTitle">Maecenas</div>
          </div>

          <div className="bbcarditem">
            <div className="cardItem">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
                alt=""
                className="card_img"
              />
            </div>

            <div className="bbcardTitle">Maecenas</div>
          </div>

          <div className="bbcarditem">
            <div className="cardItem">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
                alt=""
                className="card_img"
              />
            </div>

            <div className="bbcardTitle">Maecenas</div>
          </div>

          <div className="arrow">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>

      <div >
        <div className="bottombarTitle">Subscribe</div>
        <div className="textfield">
          <TextField id="filled-basic" variant="filled" />
        </div>
      </div>
    </>
  );
}

export default Bottombar;
