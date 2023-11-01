'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { NextResponse } from 'next/server';
import { Button } from './Button';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
}).required();

interface IContactFormProps {
  firstName: string,
  lastName: string,
  message: string,
  subject: string,
  send: string,
}

interface IContactForm  {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
  subject: string,
}

export const Form = ({ firstName, lastName, subject, message, send}: IContactFormProps) => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IContactForm>({
    resolver: yupResolver(schema)
  });

  /*
    Add React Query
  */
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
  const textAreaStyles = "block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <form className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(sendMail)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          {firstName}
        </label>
        <input
          {...register("firstName")}
          className={`${inputStyle}`}
          id="firstName"
          type="text"
        />
        <p className='text-rose-500'>{errors.firstName?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          {lastName}
        </label>
        <input
          {...register("lastName")}
          className={`${inputStyle}`}
          id="lastName"
          type="text"
        />
        <p className='text-rose-500'>{errors.lastName?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Email
        </label>
        <input
          {...register("email")}
          className={`${inputStyle}`}
          id="email"
          type="email"
        />
        <p className='text-rose-500'>{errors.email?.message}</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          {subject}
        </label>
        <input
          {...register("subject")}
          className={`${inputStyle}`}
          id="lastName"
          type="text"
        />
        <p className='text-rose-500'>{errors.subject?.message}</p>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{message}</label>
        <textarea {...register("message")} id="message" className={`${textAreaStyles}`} placeholder={`${message}`}></textarea>
        <p className='text-rose-500'>{errors.message?.message}</p>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="bg-orange-700 text-white" text={send}  type="submit"/>
      </div>
    </form>
  )
}