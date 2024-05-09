import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Cont = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ngcjfql', 'template_b95kczf', form.current, {
            publicKey: '0UmRgU2iZ9Cn0TAhn',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
    return (
        <section>
            <div className='container'>
                <h1 style={styles.title}>Coantact Customer</h1>
                <form ref={form} onSubmit={sendEmail}
                    className='--form-control --card --flex-center --ir-column' style={styles.form}>
                    <input type="text" placeholder='Full Name' name='user_name' required style={styles.input} />
                    <input type="email" placeholder='Email' name='user_email' required style={styles.input} />
                    <input type="text" placeholder='Subject' name='subject' required style={styles.input} />
                    <textarea name='message' cols="30" rows="10" style={styles.textarea}></textarea>
                    <button type="submit" className="--btn --btn--primary" style={styles.button}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

const styles = {
    form: {
        maxWidth: '500px',
        marginLeft: '13rem',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        background: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
    title: {
        marginLeft: '21rem',
        fontSize: '28px',
        marginBottom: '35px',
    },
      
};

export default Cont;
