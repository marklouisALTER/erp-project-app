'use client'

import { register } from "@/services/auth/supabaseAuth"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SignUp() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		first_name: '',
		last_name: '',
		contact_number: '',
	})

	const handleRegister = (e: any) => {
		e.preventDefault()
	  try {
			const test = register(formData)
			console.log(test)
	  } catch (error) {
			console.log(error)
	  }
	}

  const handleChange = (e) => {
    const { name, value } e.target;
    setFormData({...formData, [name] : value})
  }

    return(
        <div>
			<Button onClick={(e) => {handleRegister(e)}}>Click me!</Button>
		</div>
    )
}
