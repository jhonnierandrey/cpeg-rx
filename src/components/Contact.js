import { useEffect } from "react";

function Contact() {

    useEffect(()=>{
        document.title = 'CPEG | Contact'
    })

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
                <form action="">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Your email</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Your message</label>
                    </div>
                </form>
                <p className="lead">
                    <a
                    href="/"
                    className="btn btn-lg btn-outline-primary"
                    target='_blank'
                    rel='noreferrer'
                    >
                    Send
                    </a>
                </p>
            </div>
          </section>
        </main>
      );
}

export default Contact;