"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  importantQuestion: string;
  howDidYouFindUs: string;
  budget: string;
  workLink: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    importantQuestion: "",
    howDidYouFindUs: "",
    budget: "",
    workLink: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.importantQuestion)
      newErrors.importantQuestion = "This field is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setSubmissionMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmissionMessage("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            companyName: "",
            phoneNumber: "",
            importantQuestion: "",
            howDidYouFindUs: "",
            budget: "",
            workLink: "",
          });
        } else {
          setSubmissionMessage(`Failed to send message: ${result.message}`);
        }
      } catch (error) {
        // @ts-ignore
        setSubmissionMessage(`An error occurred: ${error.message}`);
      }

      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6">
      <div className="flex lg:flex-row flex-col w-full lg:gap-10 gap-5">
        {/* Name and Email */}
        <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
          <label
            className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
            htmlFor="name"
          >
            Name *
          </label>

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
          <label
            className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
            htmlFor="email"
          >
            Email *
          </label>

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company name and phone number */}
      <div className="flex lg:flex-row flex-col w-full lg:gap-10 gap-5">
        <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
          <label
            className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
            htmlFor="companyName"
          >
            Company Name *
          </label>

          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
          <label
            className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>

          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Most important question */}
      <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
        <label
          className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
          htmlFor="importantQuestion"
        >
          What is your most important question? *
        </label>

        <textarea
          name="importantQuestion"
          id="importantQuestion"
          value={formData.importantQuestion}
          onChange={handleChange}
          className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
        ></textarea>
        {errors.importantQuestion && (
          <p className="text-red-500 text-sm mt-1">
            {errors.importantQuestion}
          </p>
        )}
      </div>

      {/* How'd you find us */}
      <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
        <label
          className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
          htmlFor="howDidYouFindUs"
        >
          How did you find us?
        </label>

        <input
          type="text"
          name="howDidYouFindUs"
          id="howDidYouFindUs"
          value={formData.howDidYouFindUs}
          onChange={handleChange}
          className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
        />
      </div>

      {/* What is your budget */}
      <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
        <label
          className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
          htmlFor="budget"
        >
          What is your budget?
        </label>

        <input
          type="text"
          name="budget"
          id="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
        />
      </div>

      {/* Link to your current work */}
      <div className="w-full lg:mb-4 mb-2 lg:gap-2 gap-1">
        <label
          className="block text-gray-700 font-bold lg:text-base text-sm mb-2"
          htmlFor="workLink"
        >
          Link to your current work
        </label>

        <input
          type="url"
          name="workLink"
          id="workLink"
          value={formData.workLink}
          onChange={handleChange}
          className="w-full p-2 border-b border-b-gray-300 text-white bg-transparent outline-none"
        />
      </div>

      <div className="w-full lg:mt-10 mt-5">
        <button
          type="submit"
          className="text-[#453A34] bg-primary lg:px-10 px-5 lg:mt-10 mt-5 lg:py-3 py-1.5 font-bold w-full uppercase hover:bg-primary/80 hover:text-white"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* TODO: change error message colors based on message types */}
      {submissionMessage && (
        <p
          className={`mt-4 text-center ${
            submissionMessage.toLowerCase().includes("error")
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {submissionMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
