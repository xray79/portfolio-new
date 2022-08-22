const sendForm = {
  async submitForm(data) {
    const response = await fetch("https://formspree.io/f/myyvzyda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Message sent");
    } else {
      alert("Message did not send");
    }
  },
};

export default sendForm;
