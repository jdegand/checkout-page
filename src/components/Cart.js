import { useState } from "react";
import bag from '../photo1.png';
import shoes from '../photo2.png';
import minus from '../remove_black_24dp.svg';
import plus from '../add_black_24dp.svg';

export default function Cart(){

    const [quantity, setQuantity] = useState({
        bag: 1,
        shoes: 1
    });

    function handleChange(e) {
        const value = e.target.value;
        setQuantity({
          ...quantity,
          [e.target.name]: value
        });
    }

    function handleMinus(key){
        setQuantity({
          ...quantity,
          [key]: parseInt(quantity[key]) - 1
        });
    }

    function handlePlus(key){
        setQuantity({
          ...quantity,
          [key]: parseInt(quantity[key]) + 1
        });
    }

    return (
        <section className="cart-wrapper">
            <div className="flex">
                <img className="rounded item" src={bag} alt="" />
                <div className="padding-inline-20">
                    <h3>Vintage Backbag</h3>
                    <p><span className="orange fs-32">$54.99</span> <span className="line-through fs-20"> $94.99</span></p>
                    <div className="flex evenly align-center black-border controls-padding">
                        <img className="pointer gray-bg" src={minus} alt="Remove" onClick={()=>handleMinus('bag')} />
                        <label htmlFor="bag" className="visuallyhidden">Quantity: </label>
                        <input className="quantity-input" type="number" id="bag" name="bag" value={quantity.bag} onChange={handleChange} />
                        <img className="pointer gray-bg" src={plus} alt="Add" onClick={()=>handlePlus('bag')} />
                    </div>
                </div>
            </div>
            <div className="flex margin-top-10">
                <img className="rounded item" src={shoes} alt="" />
                <div className="padding-inline-20">
                    <h3>Levi Shoes</h3>
                    <p><span className="orange fs-32">$74.99</span> <span className="line-through fs-20"> $124.99</span></p>
                    <div className="flex evenly align-center black-border controls-padding">
                        <img className="pointer gray-bg" src={minus} alt="Remove" onClick={()=>handleMinus('shoes')} />
                        <label htmlFor="shoes" className="visuallyhidden">Quantity: </label>
                        <input className="quantity-input" type="number" id="shoes" name="shoes" value={quantity.shoes} onChange={handleChange} />
                        <img className="pointer gray-bg" src={plus} alt="Add" onClick={()=>handlePlus('shoes')} />
                    </div>  
                </div>
            </div>
            <br />
            <br />
            <hr/>
            <dl className="flex between">
                <dt>Shipping</dt>
                <dd>$19</dd>
            </dl>
            <hr />
            <dl className="flex between">
                <dt>Total</dt>
                <dd>$148.98</dd>
            </dl>
        </section>
    )
}