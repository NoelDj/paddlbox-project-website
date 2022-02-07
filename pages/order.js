import Link from 'next/link'
import Image from 'next/image'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
const key = '?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4'
export async function getStaticProps() {
    const res = await fetch(`https://test-company-test.booqable.com/api/1/product_groups${key}`)
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

const Order = ({data}) => {
    
    const content = data.product_groups[0]
    
    const object = {
        "order": {
            "customer_id": "aaba6b12-b664-4f30-83b2-934a8694e496",
            "starts_at": "02-12-2022 9:00",
            "stops_at": "02-12-2022 11:00"
        }
    }

    const sendOrder = (e) => {
        console.log(JSON.stringify(object))
        e.preventDefault()
        fetch('https://test-company-test.booqable.com/api/1/orders?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4', {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(object)
        }).then((r)=>r.json())
        .then((d)=> createOrder(d.order.id))

    }

    const createOrder = (e) => {
        console.log(e)
        fetch(`https://test-company-test.booqable.com/api/1/orders/${e}/reserve?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4`, {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(object)
        }).then((r)=>r.json())
        .then((d)=>console.log(d))
    }

    const [startDate, setStartDate] = useState(new Date());

    const checkAvailability = (e) => {
      console.log('clicked')
      fetch(`https://test-company-test.booqable.com/api/1/products/e7fb3fcf-9e85-4363-b7ca-593047701aa2/availability?interval=month&till=03-12-2021&from=20-12-2021?api_key=e138abbe5a1447e52390edeb8df446fa4f8cb256c17e2d7ba3ad7f072ec997b4`)
        .then((r)=>r.json())
        .then((d)=>console.log(d))
    }

    return ( 
        <main id="board"  className="d-flex align-items-center justify-content-between">
              
          <section className="container rounded ">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Image width={320} height={500} src="/images/board.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-6 text-white">
                        <h1 className="font-weight-bold text-capitalize h">{content.name}</h1>
                        <p>Order Your Paddleboard</p>
                        <form action="" className="glass p-2">
                          <p>{content.id}</p>
                          <p className="h3 fw-normal text-accent me-1">50dkk/hour</p>
                          <span onClick={checkAvailability}>
                            <DatePicker selected={startDate} onChange={(date) => {setStartDate(date)}} />
                          </span>
                          
                          <Link href="/cart">
                            <a className="m-2 btn btn-primary">Order</a>
                          </Link>
                        </form>
                    </div>

                </div>
            </div>
          </section>
        </main>
     );
}
 
export default Order;
