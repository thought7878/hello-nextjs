import { useRouter } from "next/router";
export default function ClientListPage() {
  const router = useRouter();

  console.log("router.pathname:", router.pathname);
  console.log("router.query:", router.query);

  return <div>Client Page</div>;
}
