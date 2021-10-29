import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    useEffect(()=>{
        document.title = 'CPEG | Contact'
    })

    function message(e) {
        e.preventDefault()
        // Verify fields are valid
        let name = e.target.name.value 
        let email = e.target.email.value
        let message = e.target.message.value 
        
        if(email.length === '' || name.length === '' || message.length === ''){
            document.querySelector('.error-msg').innerHTML = 'All fields are required.';
        }else if(!email.includes('@')){
            document.querySelector('.error-msg').innerHTML = 'Please enter a valide email address.';
        }else{
            document.querySelector('.error-msg').innerHTML = '';
            toast.success('We will getting your messages soon. Thank you :D', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <main className="px-3">
          <section className="contact">
            <div className="contact-ava">
                
            </div>
            <div className="contact-title">
                <h1>Contact</h1>
                <p>
                    We'd love to hear from you, send us a message!
                </p>
                <form onSubmit={message} id="message-form">
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your name" name="name" required/>
                                <label htmlFor="name">Your name</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required/>
                                <label htmlFor="email">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="message" required></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>
                </form>
                <div className="error-msg"></div>
                <p className="lead">
                    <button form='message-form' type='submit' className="btn btn-lg btn-outline-primary">
                    Send
                    </button>
                </p>
            </div>
            <ToastContainer />
          </section>
        </main>
      );
}

export default Contact;