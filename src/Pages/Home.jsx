import Logo from 'Assets/Images/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 h-[100vh]">
      <div className="h-48 w-48">
        <img className="w-full h-full" alt="logo" src={Logo} />
      </div>

      <div className="flex justify-around items-center gap-16">
        <div className="w-2/4 text-center font-semibold basis-1/2">
          <h1 className="text-white text-5xl tracking-widest leading-normal">
            BookShelf <br />
            <span className="text-warning">
              Your personal library and social network for bookworms
            </span>
          </h1>
        </div>
        <div>
          <Link to='/signup'>
            <button className="btn btn-primary rounded-md px-5 py-2 text-xl">
              Register
            </button>
          </Link>
          <Link to='/signin'>
            <button className="btn btn-warning mx-3 rounded-md px-5 py-2 text-xl">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
