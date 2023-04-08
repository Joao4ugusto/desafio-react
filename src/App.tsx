import styles from './App.module.scss';
import Banner from './Components/Banner';
import Header from "./Components/Header";
import Login from './Components/Login';


export default function App() {
  return (
    <>
      <div className={styles.espaco}>
        <Header />
        <Login />
      </div>
      <Banner />
    </>
  )
}