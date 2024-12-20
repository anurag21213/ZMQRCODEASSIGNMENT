import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShoeCard = ({product}) => {
    const navigate = useNavigate()
    let user = localStorage.getItem('user')

    user = JSON.parse(user)

    const buyHandler = async () => {
        console.log("s-2");
        
        if (!user) {
            navigate('/login')
        }

        else {
            console.log("s-3");
            
            const email = user.email
            console.log(email);

            try {

                console.log("s-4");
                

                const response = await fetch("http://localhost:3000/api/sendmail", {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email }),
                })

                if (response) {
                    console.log("Email sent successfully")
                }
                else
                    console.log("Error in recieving email")

            } catch (error) {
                console.log("s-5");
                
                console.log("Error in sending mail");

            }
        }

    }


    const sendMail=()=>{
        console.log("s-1");
        
        buyHandler()
    }

    return (
        <div className="group relative">
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
                        
                        
                            {product.name}
                        
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
            <div className='my-2'>
                <button className='font-semibold text-white bg-indigo-500 p-3 rounded-md w-full' onClick={()=>sendMail()}>Buy Now</button>
            </div>
        </div>
    )
}

export default ShoeCard
