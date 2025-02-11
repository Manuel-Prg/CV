import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get("email")?.toString()

  if (!email) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Por favor, ingresa un correo electrónico",
      }),
      { status: 400 },
    )
  }

  try {
    // Aquí puedes agregar la lógica para manejar el email
    // Por ejemplo, enviarlo a tu servicio de email preferido
    console.log("Email recibido:", email)

    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Gracias por contactarme! Me pondré en contacto pronto.",
      }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      }),
      { status: 500 },
    )
  }
}

