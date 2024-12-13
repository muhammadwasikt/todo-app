import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

const AddTodos = () => {

    const [id, setId] = useState(0)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    // Data submit on api from axios post function
    const onSubmit = (data) => {
        
        // Add data object sending to API
        axios.post('http://localhost:7000/todos/add' , data)

        // Reset form after successful submission
        reset()
    }

    return (
        <div className="w-full flex justify-center p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-[450px] w-full shadow-xl p-3">
                <label className="input input-bordered flex items-center gap-2">
                    <input {...register("title", { required: true })} placeholder="Title" className="w-full" />
                </label>
                {errors.title && <span className="text-sm text-red-600">This field is required</span>}

                <textarea className="input-bordered textarea flex items-center gap-2 py-2"  {...register("description", { required: true })} placeholder="Description" />
                {errors.description && <span className="text-sm text-red-600">This field is required</span>}
                <label className="input input-bordered flex items-center gap-2">
                    <input {...register("hobby", { required: true })} placeholder="Hobby" type="text" className="w-full" />
                </label>
                {errors.hobby && <span className="text-sm text-red-600">This field is required</span>}

                <input type="submit" className="btn" value="Add Post" />
            </form>
        </div>

    )
}

export default AddTodos