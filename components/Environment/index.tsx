import React from 'react';
import Image from 'next/image'; 
import env from '../../assets/images/Environment.png';

export const Environtment = () => {
    return (
      <div className="gpt3__header padding__mobile" id="home" style={{fontFamily: "Montserrat", padding: "0 4rem 4rem 4rem"}}>
        <div className="gpt3__header-content">
          <h1 className="gradient__text" style={{color: "#1065C2"}}>Our people are the driving force behind LGV GAS’s success and united in it’s beliefs and core values.</h1>

          <div className="gpt3__header-content__button flex" style={{ flexDirection: "column" }}>
            <h2 style={{ fontFamily: "Montserrat-Bold", fontSize: "28px", fontWeight: "700"}}>Dr. Geral Doe</h2>
            <p style={{ textAlign: "left", marginTop: "0", fontSize: "14px" }}>Chief Executive Officer</p>
          </div>


        </div>

        <div className="gpt3__header-image">
          <Image src={env} alt="woman"/>
        </div>

        <style jsx>{`
          .gpt3__header {
            display: flex;
            flex-direction: row;
            background: #fff;
          }

          .gpt3__header-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            text-align: left;
            margin-right: 5rem;
          }

          .gpt3__header-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .gpt3__header-image img {
            width: 100%;
            height: 100%;
          }

          @media screen and (max-width: 1050px) {
            .gpt3__header {
              flex-direction: column;
            }

            .gpt3__header-content {
              margin: 0;
            }
          }

          @media screen and (max-width: 650px) {
            .gpt3__header-content {
              margin-bottom: 3rem;
            }
          }

          @media screen and (max-width: 490px) {
            .gpt3__header-content {
              margin-bottom: 3rem;
            }
            .gpt3__header {
              padding: 1rem 1rem 4rem 1rem !important;
            }
          }
        `}</style>
      </div>
    );
};

export default Environtment;
