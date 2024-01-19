import Login from "./login";
import '../styles/styles.css'; 

export default function Home() {
  return (
    <main>
      <div className='min-h-screen flex justify-center items-center bg-white p-4'>
        <Login></Login>
      </div>
    </main>
  );
}
