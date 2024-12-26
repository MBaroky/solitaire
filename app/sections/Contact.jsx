"use client";
import { MoveUpRight } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(null);
  const [formError, setFormError] = useState(null);

  // submit handler
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // call api
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        // response not ok
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      // success
      const responseData = await response.json();
      console.log(responseData["message"]);
      setFormError(null); // remove error state value
      setFormSuccess("Message successfully sent");
    } catch (err) {
      // Error from server
      console.error(err);
      setFormError("Error, please try resubmitting the form");
    }
  }

  // render
  return (
    <div className='w-fulll bg-background py-12'>
      <div className='w-full max-w-container grid grid-cols-1 lg:grid-cols-2 mx-auto px-5'>
        <div>
          <h2 className='text-dark text-heading-1 font-gerbil'>
            Contact Us
          </h2>
          <p className='text-drk'>
            Whether you're ready to start your real estate journey or
            have questions, our team is here to assist you. <br />
            Reach out to us today for a consultation, and let
            Solitaire Real Estate guide you to your next property
            success.
          </p>
        </div>
        <div className='form-wrapper min-h-64 flex flex-col items-center justify-center'>
          {formSuccess ? (
            <p className='text-gold font-gerbil'>{formSuccess}</p>
          ) : (
            <div>
              {/* FORM  */}
              <form
                onSubmit={handleSubmit}
                className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                <div className='mb-4 flex flex-col w-500 [&>input]:bg-transparent [&>input]:border-b [&>input]:border-dark [&>input]:mb-3 text-dark'>
                  <label htmlFor='form-name'>Name </label>
                  <input
                    required
                    id='form-name'
                    autoComplete='name'
                    maxLength={50}
                    size='lg'
                    name='name'
                    className=''
                  />

                  <label htmlFor='form-email'> Email Address</label>
                  <input
                    id='form-email'
                    required
                    autoComplete='email'
                    maxLength={80}
                    name='email'
                    type='email'
                    className=''
                  />

                  <label htmlFor='form-phone'> Phone Number</label>
                  <input
                    id='form-phone'
                    required
                    autoComplete='tel'
                    maxLength={80}
                    name='phone'
                    type='tel'
                    className=''
                  />

                  <label htmlFor='form-message'> Message </label>
                  <textarea
                    id='form-message'
                    required
                    name='message'
                    rows={5}
                    className='border-b border-dark bg-transparent'
                  />
                </div>
                <button
                  className='w-40 h-40 text-white
 flex items-center justify-center gap-3 rounded-full bg-gold'
                  type='submit'>
                  Send <MoveUpRight />
                </button>
              </form>
              {formError && <p>{formError}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
