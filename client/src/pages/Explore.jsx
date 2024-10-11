import React from 'react'
import { products } from '../database/productData'


import { useNavigate } from 'react-router-dom'



export default function Explore() {

    const navigate = useNavigate()
    let user = localStorage.getItem('user')

    user=JSON.parse(user)
    

    const buyHandler = async (product) => {

        if (!user) {
            navigate('/login')
        }

        else {
            
            const email = user.email
            console.log(email);

            try {
                const response = await fetch("http://localhost:3000/api/sendmail", {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email}),
                })

                if (response) {
                    console.log("Email sent successfully")
                }
                else
                    console.log("Error in recieving email")

            } catch (error) {
                console.log("Error in sending mail");

            }
        }

    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Explore our best collection</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                            <div className='my-2'>
                                <button className='font-semibold text-white bg-indigo-500 p-3 rounded-md w-full' 
                                onClick={()=>{buyHandler(product)}}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}