import { useState } from "react";
import "./FAQ.css";

function FAQ() {

    const [open, setOpen] = useState(0);

    const faqData = [

        {
            question: "What is AIPlato?",
            answer: "AIPlato is an AI-powered platform that automates business workflows, analyzes data, and generates intelligent insights."
        },

        {
            question: "Is my business data secure?",
            answer: "Yes. We use enterprise-grade encryption and secure cloud infrastructure to keep your data protected."
        },

        {
            question: "Can I upgrade my plan later?",
            answer: "Absolutely. You can upgrade or downgrade your subscription at any time."
        },

        {
            question: "Do you offer customer support?",
            answer: "Yes. Every plan includes support, while premium plans receive priority assistance."
        }

    ];

    return (

        <section className="faq">

            <div className="faq-header">

                <span>FAQ</span>

                <h2>Frequently Asked Questions</h2>

                <p>
                    Find answers to the most common questions about AIPlato.
                </p>

            </div>

            <div className="faq-container">

                {faqData.map((item, index) => (

                    <div
                        className={`faq-item ${open === index ? "active" : ""}`}
                        key={index}
                    >

                        <div
                            className="faq-question"
                            onClick={() => setOpen(open === index ? -1 : index)}
                        >

                            <h3>{item.question}</h3>

                            <span>
                                {open === index ? "−" : "+"}
                            </span>

                        </div>

                        {open === index && (

                            <div className="faq-answer">

                                <p>{item.answer}</p>

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default FAQ;