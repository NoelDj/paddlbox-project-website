import { useState, useEffect } from "react";

const Checkout = () => {

    const initialOrder = { 
        amount: 1, 
        price: 50,
        total: 1 * 50,
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
    }, ['']);

    const initialValues = {
        name: "",
        email: "",
        primary_address: "",
        secondary_address: "",
        zip_code: "",
        city: "",
        region: "",
        country: "",
    }
    
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const customer = {
            "customer": {
                "name": formValues.name,
                "email": formValues.email,
                "phone": formValues.phone,
                "properties_attributes": [
                    {
                        "type": "Property::Address",
                "name": "Main address",
                "address1": formValues.primary_address,
                "address2": formValues.secondary_address,
                "zipcode": formValues.zip_code,
                "city": formValues.city,
                "region": formValues.region,
                "country": formValues.country,
                    }
                ]
            }
        }
        console.log(customer)
        fetch('https://test-company-test.booqable.com/api/1/customers?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4', {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(customer)
        }).then((r)=>r.json())
        .then((d)=> {
            console.log(d)
            createOrder(d.customer)})
    }

    const createOrder = (data) => {
        const newOrder = {
            "order": {
                "customer_id": data.id,
                "starts_at": "05-12-2021 9:00",
                "stops_at": "06-12-2021 9:00"
            }
        }
        console.log(data)
        fetch('https://test-company-test.booqable.com/api/1/orders?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4', {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(newOrder)
        })
        .then((r)=>r.json())
        .then((d)=> {
            console.log(d)
            bookOrder(d)})
    }

    const bookOrder = (data) => {
        const productId = 'bb84e28d-c4ea-4b34-a297-257338617bf0'
        const details = {
            "ids": {
                "bb84e28d-c4ea-4b34-a297-257338617bf0" : object.amount,
            }
        }
        console.log(data)
        fetch(`https://test-company-test.booqable.com/api/1/orders/${data.order.id}/book?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4`, {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(details)
        })
        .then((r)=>r.json())
        .then((d)=> saveOrder(d))
    }

    const saveOrder = (data) => {
        fetch(`https://test-company-test.booqable.com/api/1/orders/${data.order.id}/concept?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4`, {
            method : 'POST',
            headers : { "Content-Type" : "application/json" }
        })
        .then((r)=>r.json())
        .then((d)=> reserveOrder(d))
    }

    const reserveOrder = (data) => {
        fetch(`https://test-company-test.booqable.com/api/1/orders/${data.order.id}/reserve?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4`, {
            method : 'POST',
            headers : { "Content-Type" : "application/json" }
        })
        .then((r)=>r.json())
        .then((d)=> setTimeout(() => {
            console.log("Finished")
            window.location = '/complete';
        }, 1000))
    }

    return ( 
        <main className="container mt-4" id="checkout-page">
            <section className="row">

            <form action="" className="col-md-8" onSubmit={handleSubmit}>
                    <h2>Order</h2>
                    <fieldset>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input type="text" className="form-control" name="name" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange} />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="email">Phone</label>
                            <input type="text" className="form-control" name="phone" onChange={handleChange} />
                        </div>

                        <h2>Adress</h2>

                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">Address</label>
                                <input type="text" className="form-control" name="primary_address" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">Address 2</label>
                                <input type="text" className="form-control" name="secondary_address" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">ZIP code</label>
                                <input type="text" className="form-control" name="zip_code" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">City</label>
                                <input type="text" className="form-control" name="city" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">Region</label>
                                <input type="text" className="form-control" name="region" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>
                            
                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">Country</label>
                                <input type="text" className="form-control" name="country" aria-describedby="emailHelp" onChange={handleChange} />
                            </div>
                            
                            <input type="submit" className="btn btn-primary w-100 p-3" />

                        </fieldset>
                        
                        
                </form>

                <div className="col-md-4">

                    <div className="card mb-2 p-2">
                        <h2>My Order</h2>
                        <strong>From</strong>
                        <p>{object.start}</p>
                        <strong>To</strong>
                        <p>{object.end}</p>
                        <strong>Total</strong>
                        <p>{object.total}</p>
                        <strong>Location</strong>
                        <p>Amager Strand</p>
                    </div>

                    <div className="card d-flex flex-row justify-content-between mb-2 p-2">
                        <span>{object.amount} <small>x</small> </span>
                        <p>Paddleboard</p>
                        <p>{object.total}</p>
                    </div>

                    <div className="card p-2">
                        <h2>Coupon</h2>
                        <form className="form">
                            <input type="text" className="form-control mb-2"/>
                            <input type="submit" className="btn btn-primary"/>
                        </form>
                    </div>

                </div>

            </section>
        </main>
     );
}
 
export default Checkout;