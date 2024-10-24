import React from 'react';
import Image from 'next/image'; 
import spons from '../../assets/images/Mask.png';

export const Sponsors = () => {
    return (
      <div className="gpt3__header section__padding" id="home" style={{ background: "#0A286E"}}>
        <div className="gpt3__header-content">
          <h1 className="gradient__text" style={{fontSize: "clamp(32px, 5vw, 40px)"}}>2024 Lagos Female Football (LGV-GAS official Sponsor)</h1>
          <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px", color: "#fff"}}>In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development <br/> <br/> In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development</p>

          <div className="mt-4 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="hover__btn rounded-md px-8 py-2.5 mt-4 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{fontFamily: "Montserrat-Regular", background: "#1065C2"}}
            >
              Explore Our Events
            </a>
          </div>
        </div>

        <div className="gpt3__header-image">
          <Image src={spons} alt="events"/>
        </div>

        <style jsx>{`
          .gpt3__header {
            display: flex;
            flex-direction: row;
            // background: "#0A286E";
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
              flex-direction: column-reverse;
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
              margin-top: 3rem;
            }
            .gpt3__header {
              margin-bottom: 1rem;
              padding: 4rem 1rem 1rem 1rem;
              margin-top: 1rem !important;
            }
            .gpt3__header-content h1 {
              margin-top: 0;
              line-height: 1.2;
            }
          }
        `}</style>
      </div>
    );
};

export default Sponsors;
