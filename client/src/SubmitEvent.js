import React from 'react'
import { useState } from 'react'

const SubmitEvent = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    image: "",
    user: "user",
  })

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("yo")
    const newEvent = { ...form }
    try {
      const response = await fetch("https://localhost:3001/unapprovedEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent)
      })
      if(!response.ok){
        console.log(`error: ${response.statusText}`)
      }
      else{
        console.log("yer")
      }
    } catch(err){
      console.error(`A problem while trying to POST: `, err)
    }
    console.log("sumbit done")
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          required
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
          id="name"></input>
        <label htmlFor='category'>Category:</label>
        <input
          required
          value={form.category}
          onChange={(e) => updateForm({ category: e.target.value })}
          id="category"></input>
        <label htmlFor='time'>Time:</label>
        <input
          required
          value={form.time}
          onChange={(e) => updateForm({ time: e.target.value })}
          type="time" id="time"></input>
        <label htmlFor='date'>Date:</label>
        <input
          required
          value={form.date}
          onChange={(e) => updateForm({ date: e.target.value })}
          type="date" id="date"></input>
        <label htmlFor='location'>Location:</label>
        <input
          required
          value={form.location}
          onChange={(e) => updateForm({ location: e.target.value })}
          id="location"></input>
        <label htmlFor='image'>image:</label>
        <input
          required
          value={form.image}
          onChange={(e) => updateForm({ image: e.target.value })}
          id="image"></input>
        <button>Submit</button>
      </form>
    </main>
  )
}

export default SubmitEvent