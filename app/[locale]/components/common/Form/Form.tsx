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

  return (
    <form className="form-container" onSubmit={handleSubmit(sendMail)}>
      <div className="form-section-first">
        <label className="form-label" htmlFor="firstName">
          {props.firstName}
        </label>
        <input
          {...register("firstName", { required: props.firstNameError })}
          className="form-input"
          id="firstName"
          type="text"
        />
        <p className="form-error">{errors.firstName?.message}</p>
      </div>
      <div className="form-section">
        <label className="form-label" htmlFor="lastName">
          {props.lastName}
        </label>
        <input
          {...register("lastName", { required: props.lastNameError })}
          className="form-input"
          id="lastName"
          type="text"
        />
        <p className="form-error">{errors.lastName?.message}</p>
      </div>
      <div className="form-section">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: props.emailError })}
          className="form-input"
          id="email"
          type="email"
        />
        <p className="form-error">{errors.email?.message}</p>
      </div>
      <div className="form-section">
        <label className="form-label" htmlFor="subject">
          {props.subject}
        </label>
        <input
          {...register("subject", { required: props.subjectError })}
          className="form-input"
          id="lastName"
          type="text"
        />
        <p className="form-error">{errors.subject?.message}</p>
      </div>
      <div className="form-section">
        <label htmlFor="message" className="form-label">{props.message}</label>
        <textarea {...register("message", { required: props.messageError })} id="message" className="form-textarea" placeholder={`${props.message}`}></textarea>
        <p className="form-error">{errors.message?.message}</p>
      </div>
      <div className="form-actions">
        <Button variant="bg-cyan-800 text-white" text={props.send}  type="submit"/>
      </div>
    </form>
  )
}