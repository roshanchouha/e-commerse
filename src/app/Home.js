import HeroBanner from "./component/HeroBanner"
import ProductsCard from "./component/ProductsCard"
import Wrapper from "./component/Wrapper"


export default function Home()
{
      return(
        <>
             <div >
                 <HeroBanner />
                 <Wrapper>
                    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                        <div className=" text-[28px] md:text-[34px] md-5 font-semibold leading-tight">
                            Cousing for your miles
                        </div>
                        <div className="text-md md:text-xl">STYLIGHT is currently  available.
                              We are working on a solution.</div>
                    </div>

                    {/* products grid start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 px-5 md:px-0">
                        <ProductsCard />    
                        <ProductsCard />
                        <ProductsCard />       
                        <ProductsCard />    
                        <ProductsCard /> 
                        <ProductsCard />   
                        <ProductsCard />    
                        <ProductsCard /> 
                        <ProductsCard />          
                        
                    </div>
                 </Wrapper>
                 
             </div>
        </>
      )

}