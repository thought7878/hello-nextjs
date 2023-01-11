import { useRouter } from "next/router";
export default function PostsListPage() {
  const router = useRouter();
  //   console.log("router.query:", router.query);
  //   console.log("router.pathname:", router.pathname);
  return <div>Posts List Page</div>;
}
