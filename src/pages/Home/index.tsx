import { signOut } from 'firebase/auth';
import { fireauth } from '../../config/firebase';

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
        repellendus quo praesentium laboriosam eveniet quae odit laborum
        debitis, doloribus nostrum recusandae, et ipsa nam. Quos corporis labore
        non eaque reprehenderit?
      </p>

      <button
        onClick={() => {
          signOut(fireauth);
        }}
      >
        Sign Out
      </button>
    </main>
  );
};

export default Home;
