import { Link } from "react-router-dom";

export default function PromoSection() {
     return (
       <div className="relative overflow-hidden bg-white">
         <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
           <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
             <div className="sm:max-w-lg">
               <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                 Dream Catchers By Dream Nest
               </h1>
               <p className="mt-4 text-xl text-gray-500">
              Dreaming permits each and everyone of us to be quietly and safely insane every night of our lives. <br />
– William Dement
               </p>
             </div>
             <div>
               <div className="mt-10">
                 {/* Decorative image grid */}
                 <div
                   aria-hidden="true"
                   className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                 >
                   <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                     <div className="flex items-center space-x-6 lg:space-x-8">
                       <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                         <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                           <img
                             src="https://images.unsplash.com/photo-1543001447-475d373e8afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1582485697933-395c1338cf5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                       </div>
                       <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1524841629073-efc7ce232b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1622025487584-597addfb107c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1451647660179-df51b9a31606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                       </div>
                       <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1581599760765-6e606ad3e281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                         <div className="h-64 w-44 overflow-hidden rounded-lg">
                           <img
                             src="https://images.unsplash.com/photo-1545457903-083e545e57d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80"
                             alt=""
                             className="h-full w-full object-cover object-center"
                           />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
   
                 <Link
                   to="#"
                   className="inline-block rounded-md border border-black bg-black px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-black"
                 >
                   Shop Collection
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     )
   }