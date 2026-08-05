import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const fullname = formData.get('fullname').trim();
        const email = formData.get('email').trim();
        const tel = formData.get('tel').trim();
        const message = formData.get('message').trim();

        if (!fullname || !email || !tel || !message) {
            Swal.fire({
                title: "Diqqət!",
                text: "Zəhmət olmasa bütün xanaları doldurun.",
                icon: "warning",
                confirmButtonText: "Oldu"
            });
            return; 
        } 

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Uğurludur!",
                        text: "Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
                        icon: "success",
                        confirmButtonText: "Əla"
                    });

                    formRef.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    Swal.fire({
                        title: "Xəta baş verdi!",
                        text: "Mesaj göndərilmədi. Zəhmət olmasa bir daha cəhd edin.",
                        icon: "error",
                        confirmButtonText: "Bağla"
                    });
                    console.log('FAILED...', error.text);
                },
            )
            .catch((err) => {
                console.log(err);

                Swal.fire({
                    title: "Xəta baş verdi!",
                    text: "Mesaj göndərilmədi. Zəhmət olmasa bir daha cəhd edin.",
                    icon: "error",
                    confirmButtonText: "Bağla"
                });
            });
    }

    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <p className='h1 my-5'>Contact Us</p>

            <Col md={6}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Fullname</label>
                        <input type="text" className="form-control" name='fullname' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-control" name='tel' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control mt-2" style={{ height: 100 }} name='message' />
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </Col>
        </div>
    )
}

export default Contact;