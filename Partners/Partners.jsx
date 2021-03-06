import Image from "react-bootstrap/Image";
import style from "./Partners.module.css";
import imgs from "./imgs";
import { Container, Row, Col } from "react-bootstrap";
const Partners = () => {
  return (
    <>
      <div className={style.contentPartners}>
        <div className={style.contentImage}>
          <h1 className={style.textImage}>Éstas son nuestras alianzas</h1>
          {imgs.map((item) => {
            return <Image key={item.id} src={item.img} className={style.img} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Partners;
