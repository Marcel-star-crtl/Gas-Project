import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import env from '../../assets/images/Environment.png';

interface ServiceDetailsProps {
    imageUrl: StaticImageData;  
    alt: string; 
    title: string;
    description: string;
    backgroundColor: string;
    textColor: string;

}

export const ServiceDetails = ({ imageUrl, alt,  title, description, backgroundColor, textColor }: ServiceDetailsProps) => {
    return (
        <div className="gpt3__header section__padding" id="home" style={{ background: backgroundColor }}>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">{title}</h1>
                <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px", color: textColor}}>{description}</p>
            </div>
            
            <div className="gpt3__header-image">
                <Image src={imageUrl} alt={alt} />
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
                }
            `}</style>
        </div>
    );
};

export default ServiceDetails;
