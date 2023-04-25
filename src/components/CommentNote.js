import React from "react";
import { Container } from "@mui/material";
import { GrBladesVertical } from "react-icons/gr";
import Button from "@mui/material/Button";
import { IoChatbubblesOutline } from "react-icons/io5";
import "../assets/CommentNote.css";

const CommentNote = () => {
  return (
    <Container style={{ border: "1px solid gray", height: "900px" }}>
      <div>
        <div className="dash">
          <div className="dashboard1">
            <GrBladesVertical
              style={{
                marginLeft: -10,
                marginTop: 15,
                marginRight: 10,
                width: "25px",
                height: "25px",
              }}
            />
            <h2>LE 23451</h2>
          </div>
          <div className="styled-button2">
            <a href="selectedrecord">
              <Button variant="contained">
                <GrBladesVertical style={{ marginRight: 5 }} /> Назад
              </Button>
            </a>
          </div>
        </div>
        <div className="h2">
          <h2>Детали за возилото</h2>
        </div>
        <div className="div-styled">
          <div>
            <h3>Регистрација</h3>
            <p>LE 2345</p>
          </div>
          <div>
            <h3>Компанија </h3>
            <p>Фершпед АД Скопје</p>
          </div>
          <div>
            <h3>Термин на утовар</h3>
            <p> петок 04.02.2022 10:00</p>
          </div>
          <div>
            <h3>Товарено </h3>
            <p>петок 04.02.2022 12;31</p>
          </div>
          <div>
            <h3>Истоварен на</h3>
            <p>петок 04.02.2022 12;31</p>
          </div>
          <div>
            <h3>Причина за промена</h3>
            <p>ПРОБИЕНА ЦЕРАДА НА ОТКАЗАНОТО ВОЗИЛО ...</p>
          </div>
        </div>
        <div className="div-styled2">
          <IoChatbubblesOutline
            style={{
              marginLeft: "20px",
              marginTop: "15px",
              width: "30px",
              height: "30px",
              marginRight: "10px",
            }}
          />
          <h3>Коментари (историјат на Патувањето)</h3>
          <div className="dodaj-nov-komentar">
            <Button variant="contained">Додај нов Коментар</Button>
          </div>
        </div>
      </div>
      <div className="comment-card">
        <p>
          НОВО НАЈАВЕНОТО ВОЗИЛО КЕ ДОЈДЕ НА УТОВАР НА 27.01.2022 <br /> ВО ПРВА
          СМЕНА ПОСЛЕ 07 часот
        </p>
        <div className="comment-paragraph">
          <p>четврток 25,јануари 2022 /fersped ad skopje</p>
        </div>
      </div>
    </Container>
  );
};

export default CommentNote;
