import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();


  console.log(useForm());
  
  // console.log(formState);
  

  const onSubmit = async (data) => {

    console.log(data);

    try {
       await emailjs.send("service_jumdaa9", "contact_form", data, "g3rfi3XdxWimj0V_V");
       toast.success("Message sent successfully!");
       reset();
     
    } catch (error) {
      console.error(error.message);
      toast.error(`An error occurred while sending the message:${error.message}`);
    }    

  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-quicksand">
        <div>
          <label className="block text-sm font-bold">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            {...register("user_email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="6"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-alpha text-white py-3 rounded-md transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

    
    </div>
  );
};

export default ContactForm;
