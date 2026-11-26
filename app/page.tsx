import Nav from "@/component/nav";
import Footer from "@/component/footer";

export default function Home() {

  return (
      <div className="container mx-auto">
          <h1 className="font-bold text-4xl">Hello Next JS</h1>

          <Nav></Nav>

          <main>
            <h2>Main</h2>
            {/* <p>{process.version}</p> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit ab illo, accusantium neque vero sunt est tempore atque laudantium aliquam placeat cupiditate debitis. Expedita eos tempore eius est possimus?</p>
          </main>

          <Footer></Footer>

      </div>
  );
}