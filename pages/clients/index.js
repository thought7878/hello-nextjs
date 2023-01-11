import Link from "next/link";
import { useRouter } from "next/router";

export default function ClientListPage() {
  const router = useRouter();

  console.log("router.pathname:", router.pathname);
  console.log("router.query:", router.query);

  return (
    <div>
      <h1>Client List Page</h1>
      <ul>
        <li>
          <Link href={`/clients/client1`}>client1</Link>
        </li>
        <li>
          <Link href={`/clients/client2`}>client2</Link>
        </li>
      </ul>
    </div>
  );
}
