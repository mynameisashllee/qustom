export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    
    const formspreeUrl = "https://formspree.io/f/" + env.FORMSPREE_ID;
  
    const response = await fetch(formspreeUrl, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });
  
    return new Response(await response.text(), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  }
  