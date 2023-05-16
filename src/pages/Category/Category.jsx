import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import { Products } from "../../components/Products"
import { Link, useLoaderData } from "react-router-dom"


const callouts = [
     {
       name: '',
       description: 'Suits',
       imageSrc: 'https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
       href: '/category/Suit',
     },
     {
       name: '',
       description: 'Formal',
       imageSrc: 'https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
       href: '/category/Formal',
     },
     {
       name: '',
       description: 'Traditional',
       imageSrc: 'https://images.unsplash.com/photo-1657029674341-3212a82d0bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
       href: '/category/Tradistional',
     },
   ]

export const Category = () => {

  const [data, setData] = useState(null);
  const [dataAdded, setDataAdded] = useState(0);

  const apiURL = "http://127.0.0.1:5000/product";

  useEffect(() => {
    console.log("products");
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data['products']);
        console.log(data['products'][0]);
        setData(data['products']);
        // if (data["status"] === 201) {
        // }
        console.log(data);
      });
  }, [dataAdded]);

  return (
     <div className="bg-gray-100">
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
         <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

         <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
           {callouts.map((callout) => (
             <div key={callout.name} className="group relative">
               <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                 <img
                   src={callout.imageSrc}
                   alt={callout.imageAlt}
                   className="h-full w-full object-cover object-center"
                 />
               </div>
               <h3 className="mt-6 text-sm text-gray-500">
                 <Link to={callout.href}>
                   <span className="absolute inset-0" />
                   {callout.name}
                 </Link>
               </h3>
               <p className="text-base font-semibold text-gray-900">{callout.description}</p>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
  )
}
