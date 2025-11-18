import AppBarChart from "@/components/AppBarChart";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 ">
      <div className="bg-primary-foreground rounded-lg ">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-10 rounded-lg ">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>


    </div>
  );
}
