'use client'
import React from 'react'
import { useForm } from 'react-hook-form';

import { NextResponse } from 'next/server';
import { Button } from '../Button';
import { IContactForm, IContactFormProps } from './types';



export const Form = (props: IContactFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactForm>();

  /*  Add React Query */
  const sendMail = async (data: any) => {
    try {
      const response = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (data.status === 'success') {
        return  NextResponse.json({ message: 'Email Successfully Sent!'})
      }

      return NextResponse.json(data);
    } catch(error) {
      console.log('error', error);
    }
  };
  const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline";
  const textAreaStyles = "block p-2.5 w-full text-sm text-gray-900 bg-white h-24 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <form className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(sendMail)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          {props.firstName}
        </label>
        <input
          {...register("firstName", { required: props.firstNameError })}
          className={`${inputStyle}`}
          id="firstName"
          type="text"
        />
        <p className='text-rose-500'>{errors.firstName?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          {props.lastName}
        </label>
        <input
          {...register("lastName", { required: props.lastNameError })}
          className={`${inputStyle}`}
          id="lastName"
          type="text"
        />
        <p className='text-rose-500'>{errors.lastName?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: props.emailError })}
          className={`${inputStyle}`}
          id="email"
          type="email"
        />
        <p className='text-rose-500'>{errors.email?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
          {props.subject}
        </label>
        <input
          {...register("subject", { required: props.subjectError })}
          className={`${inputStyle}`}
          id="lastName"
          type="text"
        />
        <p className='text-rose-500'>{errors.subject?.message}</p>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{props.message}</label>
        <textarea {...register("message", { required: props.messageError })} id="message" className={`${textAreaStyles}`} placeholder={`${props.message}`}></textarea>
        <p className='text-rose-500'>{errors.message?.message}</p>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="bg-cyan-800 text-white" text={props.send}  type="submit"/>
      </div>
    </form>
  )
}