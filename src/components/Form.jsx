import { useState } from 'react';
import { toast } from 'sonner';
import { sendEmail } from '../services/emailService';
import { emailSchema } from '../utils/validationSchema';

const Form = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) {
      //Email vacio
      toast.error('Email cannot be empty');
      return;
    }
    try {
      // Se verifica el formato del email y se trata de enviar si todo va bien.
      emailSchema.parse(input);
      await sendEmail(input);
      toast.success('You have successfully subscribed!');
      setInput('');
    } catch (err) {
      //Manejo de errores
      toast.error('Something went wrong, please try again.');
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-10 w-full"
    >
      <input
        type="email"
        name="email"
        id="email"
        value={input}
        placeholder="Enter Your Email"
        onChange={handleChange}
        className="border-b-[2px] pb-2 w-full border-[#D9D9D9] placeholder:text-[#B5B5B5] text-[#B5B5B5] outline-0 max-w-[485px]"
      />
      <button className="bg-[#E6FC15] w-[205px] h-[39px] rounded-[50px] uppercase text-[15px] font-bold cursor-pointer hover:border-[1px] hover:border-black">
        Subscribe
      </button>
    </form>
  );
};

export default Form;
