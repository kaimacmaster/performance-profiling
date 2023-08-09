import dynamic from "next/dynamic";

const App = dynamic(() => import("@/components/rendering-example"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <App />
    </main>
  );
}
