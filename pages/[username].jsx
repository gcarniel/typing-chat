import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/user.module.css";

export default function ChatPage() {
  const [dataUser, setDataUser] = useState(null);
  const router = useRouter();

  const username = router.query.username;

  const getDataUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setDataUser(data);
  };

  useEffect(() => {
    if (username) {
      getDataUser();
    }
  }, [username]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{dataUser?.name}</h1>
      <img
        className={styles.image}
        src={dataUser?.avatar_url}
        alt={dataUser?.name}
      />
    </div>
  );
}
