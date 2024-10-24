import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../assets/images/contact.png';

const Index = () => {
  return (
    <div>
      <div className="gpt3__header">
        <div className="gpt3__header-image" style={{ position: 'relative' }}>
          <Image src={backgroundImage} alt="Header Background" layout="fill" objectFit="cover" />

          <div className="about-us-text">
            <p>Contact Us</p>
          </div>
        </div>

        <div className="flex flex-col py-20 items-start section__padding" style={{ fontFamily: "Montserrat" }}>
          <div className="horizontal-divider" />
          <div className="text-left" style={{ marginTop: "2rem" }}>
            <p className="contact__text text-4xl tracking-tight text-white sm:text-5xl" style={{ fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "50px", color: "#000" }}>Contact Information</p>
            <p className="contact__text-1 text-2xl tracking-tight text-white sm:text-5xl" style={{ fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "20px", color: "#000" }}>LAGOS</p>
          </div>
          <div className="flex flex-col" style={{ flexDirection: "column", marginBottom: "1rem" }}>
            <div className="w-full sm:w-30 flex-col" style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <p className="mb-4 text-gray-800 rounded-md hover:bg-opacity-75">39, Shomade Crescent, Off Tafawa <br /> Balewa Crescent, Surulere, Lagos</p>
              <p className="mb-4 text-gray-800 rounded-md hover:bg-opacity-75">info@lgvgassystems.ng <br /> care@lgvgassystems.ng</p>
              <p className="mb-4 text-gray-800 rounded-md hover:bg-opacity-75">+234(0)704 055 5555 <br /> +234(0)809 300 1010</p>
            </div>
          </div>
          <div className="horizontal-divider" style={{ height: "30px", backgroundColor: "#1065C2", marginBottom: "30px" }} />
          <div className="horizontal-divider" />
        </div>

        <div className="flex justify-center flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-full section__padding-contact">
            <div className="md:w-1/2 flex flex-col items-start py-4 md:py-0">
              <h1 className="contact__text text-2xl tracking-tight text-white sm:text-5xl" style={{ fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "50px", color: "#000" }}>
                Contact Us
              </h1>
            </div>

            <div className="flex flex-col md:w-1/2">
              <form className="flex flex-col space-y-4">
                <label className="text-gray-600" htmlFor="firstName">First name</label>
                <input id="firstName" type="text" className="w-full md:w-1/2 border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="lastName">Last name</label>
                <input id="lastName" type="text" className="w-full md:w-1/2 border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="company">Company</label>
                <input id="company" type="text" className="w-full border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="city">City</label>
                <input id="city" type="text" className="w-full border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="phone">Phone</label>
                <input id="phone" type="tel" className="w-full border border-gray-300 px-4 py-2" />

                <label className="text-gray-600" htmlFor="message">Message</label>
                <textarea id="message" rows={5} className="w-full border border-gray-300 px-4 py-2"></textarea>

                <button type="submit" className="hover__btn-sec text-white py-2 px-4 hover:opacity-80" style={{ background: "#309AF0" }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "40px", marginTop: "30px", marginLeft: "4rem", marginRight: "4rem" }}>
          <div className="horizontal-divider" />
        </div>
      </div>
    </div>
  )
}

export default Index;
