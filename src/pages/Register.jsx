import { useState } from "react";
import { useForm } from "react-hook-form";

const ticketTypes = ["General Admission", "VIP", "Student"];

export default function Register() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSubmittedData(data); // store submitted data
    reset(); // reset form
  };

  if (submittedData) {
    return (
      <div className="p-6 max-w-md mx-auto text-center bg-green-100 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p>
          Thanks {submittedData.fullName}, we’ve registered you with the email{" "}
          <strong>{submittedData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Conference Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            className={`w-full border px-3 py-2 rounded ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            type="email"
            className={`w-full border px-3 py-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Phone (optional)</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        {/* Ticket Type */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Ticket Type</label>
          <select
            {...register("ticketType")}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            defaultValue={ticketTypes[0]}
          >
            {ticketTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>
    </section>
  );
}
