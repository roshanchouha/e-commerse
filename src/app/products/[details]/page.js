 
import Wrapper from '@/app/component/Wrapper'
import React from 'react'
import ProductsCarusal from '@/app/component/ProductsCarusal'

const ProductDetails = () => {
  return (
     <div className='w-full md:py-20'>
         <Wrapper>
             <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                {/* left colum start */}
                 <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductsCarusal />
                 </div>
                {/* right colum start */}
                <div className="flex-[1] py-3">
                    {/* product title */}
                     <div className='text-[34px]  font-semibold mt-2'>
                        Jordan Retro 6 G
                     </div>
                     {/* Sub Titile */}
                     <div className='text-lg  font-semibold mt-2 mb-5'>
                         Man&apos;s Golf Shoes
                     </div>
                     {/* price */}
                     <div className='text-lg font-semibold'>
                         MRP :Rs 19000 .00
                     </div>
                     <div className='text-md font-medium text-black/[0.5]'>
                         incl. of taxes
                     </div>
                     <div className='text-md font-medium text-black/[0.5]'>
                        {`{Also includes all applicable duties}`}
                     </div>
                     {/* Product size range start */}
                      <div className='mb-10'>
                         <div className='flex  justify-between mt-2'>
                            <div className=' font-semibold text-md'>
                              Select Size    
                            </div>
                            <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                              Select Guide 
                            </div>
                         </div>
                           {/* size select */}
                           <div className='grid grid-cols-3 gap-2 mt-2'>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 6
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 6.5
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 7
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 7.5
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 8
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 8.5
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer text-black'>
                                 UK 9
                              </div>
                              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>
                                 UK 9.5
                              </div>
                           </div>
                           {/* requires */}
                           <div className='text-red-600 mt-2'>
                              *Size selection is required
                           </div>
                            
                      </div>
                      {/* add to cart button start */}
                         <button className=' w-full rounded-full border py-2  bg-black text-white text-lg font-medium transition-transform active:scale-95 flex
                          items-center justify-center gap-2 hover:opacity-50 md-10'>
                             Add to Cart
                         </button>
                    
                         <button className='mt-5 w-full rounded-full border py-2 border-black bg-white text-black text-lg font-medium transition-transform active:scale-95 flex
                          items-center justify-center gap-2 hover:opacity-50 md-10'>
                            Whishlist
                         </button>

                         <div>
                            <div className='text-lg font-bold mt-3'>
                                Products Details
                            </div>
                            <div className='text-md mt-5'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit alias animi eaque ad voluptate natus perferendis totam tempore quidem iusto, doloribus repellendus ullam. Vero nihil, ipsa rerum exercitationem ut quas dignissimos ab, iste veritatis perferendis unde fuga eveniet voluptatum repellendus maxime nulla explicabo necessitatibus!
                            </div>
                         </div>
                </div>
             </div>
         </Wrapper>
     </div>
  )
}

export default ProductDetails
