import { Toaster } from 'sonner';
import Form from './components/Form';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <main className="bg-black flex justify-center items-center relative tracking-wide box-border h-screen w-screen p-8">
      <article className="bg-white flex flex-col items-center rounded-[40px] gap-10 w-full p-10 max-w-[841px]">
        <svg
          width="59"
          height="55"
          viewBox="0 0 59 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0814 36.0545L1.56136 28.2245C-0.488643 26.5345 0.0113571 23.2745 2.47136 22.2745L57.1714 0.0845329C58.0914 -0.285467 59.0014 0.624533 58.6314 1.54453L38.4814 51.8245C37.6014 54.0145 34.8414 54.7245 33.0114 53.2345L19.2414 41.9645L51.4514 7.70453L11.0814 36.0545Z"
            fill="black"
          />
          <path
            d="M9.49138 41.2745L22.1914 51.4845L17.5014 54.3445C15.4914 55.5745 12.8714 54.5045 12.2814 52.2245L9.48138 41.2745H9.49138Z"
            fill="black"
          />
        </svg>
        <h1 className="uppercase font-bold text-[32px]">Subscribe</h1>
        <Form />
      </article>
      <Toaster duration={3000} position="bottom-center" />
      <Footer />
    </main>
  );
}

export default App;
