import Link from "next/link";
import { useRouter } from "next/router";

export default function ClientListPage() {
  const router = useRouter();

  console.log("router.pathname:", router.pathname);
  console.log("router.query:", router.query);

  const clients = [
    { id: "1", name: "client1" },
    { id: "2", name: "client2" },
  ];

  return (
    <div>
      <h1>Client List Page</h1>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            <Link href={`/clients/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
