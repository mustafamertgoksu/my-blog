import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useToggleTheme } from '../hooks/useToggleTheme';

import styles from '../styles/contact.module.css';

interface Inputs {
  email: string;
  name: string;
  message: string;
}

const Contact: React.FC = () => {
  const { isLightMode } = useToggleTheme();
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = ({ message, email, name }) => {
    router.push(
      `mailto:mustafamertgoksu@gmail.com?body=${encodeURIComponent(
        `${name && name} (${email}):\n\n${message}`
      )}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={!isLightMode ? styles.contact : styles.lightContact}
    >
      <label
        className={!isLightMode ? styles.userText : styles.lightUserText}
        htmlFor="contact-email"
      >
        Your e-mail address
      </label>
      <input
        type="email"
        id="contact-email"
        className={!isLightMode ? styles.input : styles.lightInput}
        placeholder="you@mail.com"
        {...register('email', { required: true })}
      />
      <label
        htmlFor="contact-name"
        className={!isLightMode ? styles.userText : styles.lightUserText}
      >
        Your name
      </label>
      <input
        type="text"
        id="contact-name"
        className={!isLightMode ? styles.input : styles.lightInput}
        placeholder="John Doe"
        {...register('name', { required: false })}
      />
      <label
        htmlFor="contact-message"
        className={!isLightMode ? styles.userText : styles.lightUserText}
      >
        Your message
      </label>
      <textarea
        rows={5}
        id="contact-message"
        className={!isLightMode ? styles.textarea : styles.lightTextarea}
        placeholder="Hello Mustafa! bla bla bla ..."
        {...register('message', { required: true })}
      />
      <button
        type="submit"
        className={!isLightMode ? styles.sendBtn : styles.lightSendBtn}
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
