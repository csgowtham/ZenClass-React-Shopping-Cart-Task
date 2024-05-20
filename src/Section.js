import React, { useState } from 'react';

export default function Section({ data ,cart,setCart}) {
  // Initialize an array of booleans for toggle states
  const initialToggleState = data.map(() => true);
  const [toggleStates, setToggleStates] = useState(initialToggleState);

  // Function to handle toggle
  const handleToggleAndCart = (index) => {
    const newToggleStates = [...toggleStates];
    const isAddingToCart = newToggleStates[index];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
    setCart(cart + (isAddingToCart ? 1 : -1));
  };


  return (
    <section className="py-1">
      <div className="container px-2 px-lg-5 mt-1">
        <div className="row gx-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          {data.map((product, index) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                {/* Product image */}
                <img className="card-img-top" src={product.image} alt={product.productName} />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.productName}</h5>
                    {/* Product price */}
                    <p>{product.price}</p>
                  </div>
                  <div className="text-left">
                    {/* Product Description */}
                    <p>{product.description}</p>
                  </div>
                </div>
                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggleStates[index] ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {handleToggleAndCart(index)}}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-dark mt-auto"
                        onClick={() => handleToggleAndCart(index)}
                      >
                        Remove from Cart
                        
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
