'use client'

import { register } from "@/services/auth/supabaseAuth"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SignUp() {
	const [formData, setFormData] = useState({
		email: 'cheschesj@gmail.com',
		password: 'testtest',
		first_name: 'chester',
		last_name: 'test',
		contact_number: '09123123123123',
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
    return(
        <div>
			<Button onClick={(e) => {handleRegister(e)}}>Click me!</Button>
		</div>
    )
}