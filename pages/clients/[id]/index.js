import { useRouter } from "next/router";
export default function ClientListPage() {
  const router = useRouter();

  // console.log("router.pathname:", router.pathname);
  // console.log("router.query:", router.query);
  const { id } = router.query;

  function goChildPage(id) {
    // router.push(`/clients/${id}/${id}`);
    router.push({
      pathname: "/clients/[id]/[client]",
      query: { id: id, client: id },
    });
  }

  return (
    <div>
      <h1>Client index Page. client id:{id}</h1>
      <button
        onClick={() => {
          goChildPage(id);
        }}
      >
        go to brother page
      </button>
    </div>
  );
}
