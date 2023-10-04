import { signOut } from 'firebase/auth';
import { fireauth } from '../../config/firebase';

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga magni
        distinctio accusantium assumenda tempora, molestiae, nihil, ut
        repellendus doloremque possimus officia consequuntur rem quae dolorem
        quia repudiandae sed facilis?
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
