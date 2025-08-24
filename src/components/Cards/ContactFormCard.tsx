import { motion } from "motion/react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

import { BsSend, BsSendCheck } from "react-icons/bs";

export const ContactFormCard = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formValues, setFormValues] = useState({
    senderName: "",
    senderEmail: "",
    reasonToContact: "General inquries",
    senderMsg: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const sendEmailPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderName: formValues.senderName,
            senderEmail: formValues.senderEmail,
            reasonToContact: formValues.reasonToContact,
            senderMsg: formValues.senderMsg,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("✅ Email sent successfully:", data.message);
          setIsSent(true);
          setFormValues({
            senderName: "",
            senderEmail: "",
            reasonToContact: "General inquries",
            senderMsg: "",
          });
          resolve(data.message);
        } else {
          console.error("❌ Failed to send email:", data.error);
          reject(new Error(data.error || "Failed to send message"));
        }
      } catch (error) {
        console.error("❌ Network error or unexpected error:", error);
        reject(error);
      } finally {
        setIsSending(false);
      }
    });

    toast.promise(sendEmailPromise, {
      loading: "Sending your message...",
      success: "Message has been received! I'll get back to you soon.",
      error: (error) => {
        return (
          error.message ||
          "An error occurred while sending your message. Please try again later."
        );
      },
    });
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  }, [isSent]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-400 bg-opacity-10 border-2 text-gray-950 border-slate-200 shadow-inner shadow-slate-800 p-4 rounded-lg mx-auto"
    >
      <form onSubmit={sendEmail} className="space-y-3">
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5 }}
          required
          type="text"
          placeholder="Name"
          name="senderName"
          onChange={handleChange}
          value={formValues.senderName}
          className="w-full tracking-wider bg-primary-foreground/90 rounded-md py-2.5 px-3 text-sm outline-purple-200 text-gray-900 placeholder-gray-950"
        />
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
          required
          type="email"
          placeholder="Email"
          name="senderEmail"
          onChange={handleChange}
          value={formValues.senderEmail}
          className="w-full tracking-wider rounded-md py-2.5 px-3 text-sm bg-primary-foreground/90 outline-purple-200 text-gray-900 placeholder-gray-950"
        />

        <motion.select
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5 }}
          required
          name="reasonToContact"
          onChange={handleChange}
          value={formValues.reasonToContact}
          className="w-full tracking-wider rounded-md py-2.5 px-3 text-sm outline-purple-200 text-gray-900 bg-primary-foreground/90"
        >
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="General inquries"
          >
            General inquries
          </option>
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="Project inquiries"
          >
            Project inquiries
          </option>
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="Collaboration request"
          >
            Collaboration request
          </option>
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="Feedback/Question"
          >
            Feedback/Question
          </option>
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="Bug report"
          >
            Bug report
          </option>
          <option
            className="bg-primary-foreground/70 text-base z-10 text-gray-950"
            value="Feature request"
          >
            Feature request
          </option>
        </motion.select>

        <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
          placeholder="Message"
          rows={4}
          required
          name="senderMsg"
          onChange={handleChange}
          value={formValues.senderMsg}
          className="w-full tracking-wider bg-slate-50 rounded-md px-3 text-sm pt-2.5 outline-purple-200 text-gray-900 placeholder-gray-950 resize-none"
        />

        <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.05,
          }}
          type="submit"
          disabled={isSending}
          className="text-slate-100 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-400 disabled:cursor-not-allowed font-semibold rounded-md text-sm px-4 py-2.5 flex items-center justify-center w-full transition-colors duration-200"
        >
          {isSending ? (
            <BsSend className="animate-spin mr-2" />
          ) : isSent ? (
            <BsSendCheck className="text-green-500 mr-2" />
          ) : (
            <BsSend className="mr-2" />
          )}
          {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
        </motion.button>
      </form>
    </motion.div>
  );
};
