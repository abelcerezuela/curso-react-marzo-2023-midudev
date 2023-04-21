import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "abelcerezuela",
    name: "Abel Cerezuela Sanjulián",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hernández",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomás C.",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
