import { useState } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };
  const handlePhone = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Lógica para enviar o email usando JavaScript
    const serviceID = 'service_ijs4w55'; // ID do serviço de email registrado no EmailJS
    const templateID = 'template_qqmrkjw'; // ID do template de email registrado no EmailJS
    const userID = 'nDY3BVAVsoRCjvTsh'; // ID do usuário registrado no EmailJS

    // Defina os parâmetros do email
    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_phone: phone
    };

    // Envie o email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log(
          'Email enviado com sucesso!',
          response.status,
          response.text
        );
        // Limpar os campos do formulário após o envio bem-sucedido
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
      })
      .catch(error => {
        console.error('Erro ao enviar o email:', error);
      });

    // Você pode usar uma biblioteca como o EmailJS ou implementar seu próprio código de envio de email aqui
  };

  return (
    <div className="ui segment">
      <h1>Contato</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="ui button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
