export async function submitEmail(formData: FormData) {
    const email = formData.get("email")
    const message = formData.get("message")
  
    // Here you would typically integrate with your email service
    // For now, we'll just console.log and return a success message
    console.log("Email received:", email, "Message:", message)
  
    return {
      success: true,
      message: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",
    }
  }
  
  