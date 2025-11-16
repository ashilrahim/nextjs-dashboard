

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 ">
      <div className="bg-primary-foreground rounded-lg p-10 h-96 flex items-end">
        <div className="space-y-4">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio, iste excepturi! Eum ducimus doloribus sint quas accusantium
            nemo nam quidem quam. Sed expedita tempora eaque repellendus
            pariatur, amet placeat repellat!</p>
        </div>
      </div>
      <div className="bg-primary-foreground p-10 rounded-lg ">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>


    </div>
  );
}
