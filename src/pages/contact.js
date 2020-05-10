import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"

const ContactPage = () => {
  const [state, setState] = React.useState({})
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <div>
      <Layout>
        <Head title="Contact Chris" />
        <p>You can reach me in any of the following ways:</p>
        <ol>
          <li>Email at chris@chrislangston.com</li>
          <li>
            Linked In:{" "}
            <a
              href="https://www.linkedin.com/in/chrislangstonga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked In
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
              href="https://twitter.com/chris_langston"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ Chris Langston
            </a>
          </li>
        </ol>

        <div>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Layout>
    </div>
  )
}
export default ContactPage
