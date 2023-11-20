// 05-01-routing 페이지
import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const ClickEvent = () => {
    router.push("/section05/05-01-static-routing-moved");
  };

  return (
    <div>
      <button onClick={ClickEvent}>페이지 이동하기.</button>
    </div>
  );
}
