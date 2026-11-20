export default async function Course({params}){

     const {slug} = await params;
     
     return (
          <>
              <div className="container mx-auto">
                    <h1 className="font-bold text-4xl"> {slug}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nobis voluptatibus ipsam amet sed, quod ullam odit aspernatur porro harum commodi dolor doloribus officiis magnam, magni quam consequatur molestias consequuntur.</p>
              </div>
          </>
     )
}