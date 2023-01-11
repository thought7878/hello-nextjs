import { useRouter } from "next/router";

export default function ClientDetailPage() {
  const router = useRouter();
  console.log("router.pathname:", router.pathname);
  console.log("router.query:", router.query);

  return <div>Client index brother Page</div>;
}
