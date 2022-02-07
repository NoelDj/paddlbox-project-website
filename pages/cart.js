import { useState, useEffect, useRef } from "react"


import Link from "next/link"
export async function getStaticProps() {
    const key = '?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4'

    const res = await fetch(`https://test-company-test.booqable.com/api/1/product_groups/e7fb3fcf-9e85-4363-b7ca-593047701aa2${key}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
}

const Cart = ({data}) => {
    const content = data.product_group.products[0]
    const stockCount = content.stock_counts.total
    const price = content.base_price

    const initialOrder = { 
        amount: 1, 
        price: price,
        total: 1 * price,
        start : '12-12-2021 11:00',
        end : '12-12-2021 13:00'
    }
    
    const [object, setObject] = useState(initialOrder)

    useEffect(() => {
        try {
            const item = window.localStorage.getItem("key");
            setObject(item ? JSON.parse(item) : initialOrder);
          } catch (error) {
            console.log(error);
            return initialOrder;
          }
    }, []);
    
    const updateData = (e) => {
        const value = e.target.dataset.value
        console.log(object)
        if(value=='add' && object.amount < stockCount){
            setObject({...object, amount:++object.amount, total:object.amount * price})
        } else if(value=='remove' && object.amount > 1) {
            setObject({...object, amount:--object.amount, total:object.amount * price})
        } else {
            null
        }

        try {
            window.localStorage.setItem("key", JSON.stringify(object));
          } catch (error) {
            console.log(error);
          }

    }

    const [opacity, setOpacity] = useState(0.3)
    const checkDate = (e) => {
        setOpacity(1)
    }

    


    



    return ( 
        <main className="container bg-white" id="cart-page">
            <section className="row">
                <div className="col">
                    <table className="table col-8">
                        <thead>
                            <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                                <img src={content.photo_url} width="200px" alt="" className="img-fluid" />
                            </th>
                            <td>{object.price}</td>
                            <td>
                                <form>
                                <button type="button" data-value='add' className="btn btn-outline-secondary" onClick={(e)=>updateData(e)}>+</button>
                                <span type="number" className="btn btn-outline-primary" >{object.amount}</span>
                                <button type="button" data-value='remove' className="btn btn-outline-secondary" onClick={(e)=>updateData(e)}>-</button>
                                </form>
                            </td>
                            <td>{object.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link href="/">
                        <a className="btn btn-outline-secondary btn-block">Cancel order</a>
                    </Link>
                        
                </div>
                <div className="col-md-4">
                    <form action="" className="mt-4" onChange={checkDate}>
                        <h2>Order</h2>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Pick Up</label>
                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Return</label>
                            <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        
                        <strong>Location</strong>
                        <p>Amager Strand</p>

                        <Link  href="/checkout">
                            <a style={{opacity: opacity}} className="btn btn-primary btn-block w-100">Checkout</a>
                        </Link>
                        
                    </form>
                </div>
            </section>
        </main>
     )
}

export default Cart;
