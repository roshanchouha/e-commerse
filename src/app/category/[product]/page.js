import ProductsCard from "@/app/component/ProductsCard";
import Wrapper from "@/app/component/Wrapper";
import React from "react";

const Page = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
             {/* product card */}
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
      <h1> categoary product</h1>
    </div>
  );
};

export default Page;
