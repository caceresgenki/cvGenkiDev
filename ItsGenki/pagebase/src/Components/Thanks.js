import { useState } from 'react'


export const Thanks = () => {

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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
    <p className="text-sm mb-2">
      Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra política de cookies.
    </p>
    <button
      onClick={() => setCookiesAccepted(true)}
      className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
    >
      Aceptar
    </button>
  </div>
  )
}
