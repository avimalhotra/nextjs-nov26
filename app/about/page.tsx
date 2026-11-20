import Nav from "@/component/nav";
import Footer from "@/component/footer";

export default function About(){
     return (
          <>
               <h1 className="text-4xl font-bold">About Us</h1>

               <Nav></Nav>
               
               <main>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nobis voluptatibus ipsam amet sed, quod ullam odit aspernatur porro harum commodi dolor doloribus officiis magnam, magni quam consequatur molestias consequuntur.</p>
               </main>

               <Footer></Footer>
          </>
     )
}