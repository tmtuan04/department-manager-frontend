import axios from "axios";
import Footer from "../partials/Footer";
import "./contact-us.css";
import { useState } from 'react'

const ContactUs = () => {

    const state = {
        name: '',
        email: '',
        message: ''
    }

    const [stateFormContact, setStateFormContact] = useState(state)

    const info = [
        {
            img: <i className="bx bx-current-location"></i>,
            content: "1D. Dai Co Viet, Hai Ba Trung, Ha Noi",
        },
        {
            img: <i className="bx bxl-gmail"></i>,
            content: "infor@departmentwebsite.com",
        },
        {
            img: <i className="bx bxs-phone"></i>,
            content: "(+84) 123 456 789",
        },
        {
            img: <i className="bx bx-time"></i>,
            content: "Monday - Friday:  8:00 AM - 5:00 PM",
        },
        {
            img: <i className="bx bx-time"></i>,
            content: "Saturday:  9:00AM - 4:00PM",
        },
        {
            img: <i className="bx bx-time"></i>,
            content: "Sunday:  Closed",
        },
        {
            img: <i className="bx bx-globe"></i>,
            content: "www.department.com",
        },
    ];

    const handlechangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
        const content = e.target.value;
        setStateFormContact({
            ...stateFormContact,
            [inputName]: content,
        });
    }
    const handleSubmitFormContact = async () => {
        const response = await axios.post(`url`, stateFormContact);
        // {...}
    }

    return (
        <>
            <section className="contact-us" id="contact-us">
                <div className="inner-contact-us">
                    <div className="contact-us__title">Contact Us</div>
                    <div className="contact-us__body">
                        <div className="body__left">
                            {info.map((item, index) => (
                                <div className="left__item" key={index}>
                                    <div className="icon">
                                        {item.img} {/* Hiển thị biểu tượng từ danh sách */}
                                    </div>
                                    <div className="content">
                                        {item.content} {/* Hiển thị nội dung từ danh sách */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="body__right">
                            <form className="right-form">
                                <div className="form__input">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={(e) => { handlechangeInput(e, 'name') }}
                                        value={stateFormContact.name}
                                    />
                                </div>

                                <div className="form__input">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                        onChange={(e) => { handlechangeInput(e, 'email') }}
                                        value={stateFormContact.email}
                                    />
                                </div>
                                <div className="form__input">
                                    <textarea
                                        name="message"
                                        id=""
                                        placeholder="Your message"
                                        onChange={(e) => { handlechangeInput(e, 'message') }}
                                        value={stateFormContact.message}
                                    ></textarea>
                                </div>

                                <div className="form__input">
                                    <button type="submit" onClick={handleSubmitFormContact}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default ContactUs;
