import { Toaster } from 'sonner';
import Form from './components/Form';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <main className="bg-black flex justify-center items-center relative tracking-wide box-border h-screen w-screen p-8">
      <article className="bg-white flex flex-col items-center rounded-[40px] gap-10 w-full p-10 max-w-[841px]">
        <img src="src/assets/icon.svg" className="w-[58.43px] h-[54.86px]" />
        <h1 className="uppercase font-bold text-[32px]">Subscribe</h1>
        <Form />
      </article>
      <Toaster duration={3000} position="bottom-center" />
      <Footer />
    </main>
  );
}

export default App;
