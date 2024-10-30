'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../Styles/Contact.css'


export const Contact = () => {

  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [thankYouMessage, setThankYouMessage] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Enviando email a main.genki@gmail.com', data)
    // Aquí iría la lógica real para enviar el email
    reset()
    setThankYouMessage('¡Gracias por contactarnos! Apreciamos tu interés en nuestros servicios. Nos pondremos en contacto contigo pronto.')
    setTimeout(() => setThankYouMessage(''), 5000) // El mensaje desaparecerá después de 5 segundos
  }

  return (
    <section className="conteinerForm">
          <h3 className="titleForm">Contáctanos</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="contentForm">
            <div>
              <label htmlFor="name" className="labelName">Nombre</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Este campo es requerido' })}
                className="inputName"
              />
              {errors.name && <span className="errorName">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="email" className="labelEmail">Correo electrónico</label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Dirección de correo inválida'
                  }
                })}
                className="inputEmail"
              />
              {errors.email && <span className="errorEmail">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="message" className="labelMessage">Mensaje</label>
              <textarea
                id="message"
                {...register('message', { required: 'Este campo es requerido' })}
                className="areaMessage"
                rows={4}
              ></textarea>
              {errors.message && <span className="errorMessage">{errors.message.message}</span>}
            </div>
            <button type="submit" className="buttonForm">
              Enviar
            </button>
          </form>
          {thankYouMessage && (
            <div className="mt-4 p-4 bg-green-600 text-white rounded-md" role="alert">
              <p>{thankYouMessage}</p>
            </div>
          )}

          {!cookiesAccepted && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
            <p className="text-sm mb-2">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra política de cookies.
            </p>
            <button
              onClick={() => setCookiesAccepted(true)}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
              Aceptar
            </button>
          </div>)}
    </section>
  )
}
