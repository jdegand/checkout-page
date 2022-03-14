import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
      email:"",
      phone: "",
      fullname: "Rodney Cotton",
      address: "",
      city: "",
      country: "",
      postalcode: ""
    }
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Information</h2>
      <label htmlFor="email">E-mail</label>
    
      {/* use aria-invalid to indicate field contain error */}
      <input
        id="email"
        type="email"
        className="form-input"
        placeholder="Enter your email..."
        aria-invalid={errors.email ? "true" : "false"}
        {...register('email', { required: true })}
      />
      
      {/* use role="alert" to announce the error message */}
      {errors.email && errors.email.type === "required" && (
        <span role="alert">This is required</span>
      )}

      <label htmlFor="phone">Phone</label>
      
      <input
        id="phone"
        type="tel"
        className="form-input"
        placeholder="Enter your phone..."
        aria-invalid={errors.phone ? "true" : "false"}
        {...register('phone', { required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ })}
      />

      {errors.phone && errors.phone.type === "required" && (
        <span role="alert">This is required</span>
      )}

      {errors.phone && errors.phone.type === "pattern" && <span>Phone number can have parenthesis and hyphens (555)555-5555</span> }

      <h2>Shipping Address</h2>

      <label htmlFor="fullname">Full Name</label>
      
      <input 
        id="fullname"
        type="text"
        className="form-input"
        aria-invalid={errors.fullname ? "true" : "false"}
        {...register("fullname", { required: true, maxLength: 20 })} 
      />

      {errors.fullname && errors.fullname.type === "required" && (
        <span role="alert">This is required</span>
      )}

      {errors.fullName && errors.fullName.type === "maxLength" && <span>Max length exceeded</span> }

      <label htmlFor="address">Address</label>
      
      <input 
        id="address"
        type="text"
        className="form-input"
        placeholder="Your address..."
        aria-invalid={errors.address ? "true" : "false"}
        {...register("address", { required: true}) }
      />

      {errors.address && errors.address.type === "required" && (
        <span role="alert">This is required</span>
      )}

      <label htmlFor="city">City</label>
      
      <input 
        id="city"
        type="text"
        className="form-input"
        placeholder="Your city..."
        aria-invalid={errors.city ? "true" : "false"}
        {...register("city", { required: true}) }
      />

      {errors.city && errors.city.type === "required" && (
        <span role="alert">This is required</span>
      )}

      <div className="half-row">

      <label className="country-label" htmlFor="country">Country</label>
      
      <select id="country" className="form-input half-width" {...register("country", { required: true})}>
        <option value="">Your country...</option>
        <option value="usa">United States</option>
        <option value="mexico">Mexico</option>
        <option value="canada">Canada</option>
      </select>

      {errors.country && errors.country.type === "required" && (
        <span role="alert">This is required</span>
      )}

      {/* Need this when country is selected & postal code has error - postalcode's error message will line up under its input*/}
      {!errors.country && (
        <span></span>
      )}

      <label className="postal-label" htmlFor="postalcode">Postal Code</label>
      
      <input 
        id="postalcode"
        type="text"
        className="form-input half-width"
        placeholder="Your postal code..."
        aria-invalid={errors.postalcode ? "true" : "false"}
        {...register("postalcode", { required: true, pattern: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/ }) }
      />

      {errors.postalcode && errors.postalcode.type === "required" && (
        <span role="alert">This is required</span>
      )}

      {errors.postalcode && errors.postalcode.type === "pattern" && <span role="alert">Must be a valid zip code.</span> }
      </div>

      <label className="checkbox-label">
        <input
          type="checkbox"
          {...register("save")}
        />
        Save this information for next time
      </label>
      
      <button>Continue</button>
    </form>
  );
}

