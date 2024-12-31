import Footer from "../partials/Footer";
import "./contact-us.css";
import { useState } from 'react';
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactUs = () => {

    const initialState = {
        name: '',
        email: '',
        message: ''
    };

    const [stateFormContact, setStateFormContact] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
        const content = e.target.value;
        setStateFormContact({
            ...stateFormContact,
            [inputName]: content,
        });
    };

    const handleSubmitFormContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = "service_unjh7i1"; // Thay bằng Service ID của bạn
        const templateId = "template_g63418u"; // Thay bằng Template ID của bạn
        const userId = "tf-MxgxXuR58OH_M_"; // Thay bằng User ID của bạn

        try {
            await emailjs.send(
                serviceId,
                templateId,
                stateFormContact,
                userId
            );

            toast.success("Your message has been sent successfully!");
            setStateFormContact(initialState); // Reset form sau khi gửi
        } catch (error) {
            console.error("Failed to send message:", error);
            toast.error("Failed to send your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <form className="right-form" onSubmit={handleSubmitFormContact}>
                                <div className="form__input">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={(e) => handleChangeInput(e, 'name')}
                                        value={stateFormContact.name}
                                        required
                                    />
                                </div>

                                <div className="form__input">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        onChange={(e) => handleChangeInput(e, 'email')}
                                        value={stateFormContact.email}
                                        required
                                    />
                             </div>
                                <div className="form__input">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        onChange={(e) => handleChangeInput(e, 'message')}
                                        value={stateFormContact.message}
                                        required
                                        spellCheck="false"
                                    ></textarea>
                                </div>

                                <div className="form__input">
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
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
