import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

const WHATSAPP_LINK = "https://wa.me/919980055940";
const YOUTUBE_LINK = "https://www.youtube.com/@heartlandfarms";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122041.19!2d75.72!3d16.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d1d28e7d9e03%3A0x13aa6e0c11ee8a1!2sVijayapura%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", email: "", phone: "", message: "" };

const contactInfoItems = [
  {
    icon: MapPin,
    label: "Our Farm",
    value: "Vijayapura, North Karnataka, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99800 55940",
    href: "tel:+919980055940",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@heartlandfarms.in",
    href: "mailto:info@heartlandfarms.in",
  },
];

export default function ContactPage() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const mutation = useMutation({
    mutationFn: async (data: FormState) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContact(
        data.name,
        data.email,
        data.message,
        data.phone || null,
      );
    },
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you soon.", {
        description: "Gurupad and the Heartland Farms team will be in touch.",
        duration: 5000,
      });
      setForm(INITIAL_FORM);
      setErrors({});
    },
    onError: () => {
      toast.error(
        "Something went wrong. Please try WhatsApp or email directly.",
      );
    },
  });

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.message.trim()) newErrors.message = "Please share your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) mutation.mutate(form);
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-primary py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.65_0.12_33)_0%,_transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <p className="text-premium-subtitle text-primary-foreground/80 mb-2">
            Heartland Farms
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-lg mx-auto font-body">
            Whether you have a question about our produce, want to visit the
            farm, or simply want to say hello — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* WhatsApp CTA — prominent banner */}
      <section className="bg-primary py-6 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-primary-foreground font-display text-lg font-semibold">
              Prefer to chat directly?
            </p>
            <p className="text-primary-foreground/70 text-sm font-body">
              Reach Gurupad instantly on WhatsApp — fastest way to connect.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.whatsapp_button"
            className="flex items-center gap-3 bg-[--color-whatsapp] hover:bg-[--color-whatsapp-hover] text-white font-body font-semibold text-base px-8 py-4 rounded-2xl shadow-lg transition-smooth whitespace-nowrap"
          >
            <SiWhatsapp size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Fill out the form below and we'll respond within 24 hours.
            </p>

            {mutation.isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center text-center py-16 gap-4 bg-muted/40 rounded-2xl border border-border"
              >
                <CheckCircle2 className="text-primary" size={48} />
                <p className="font-display text-xl font-semibold text-foreground">
                  Message Received!
                </p>
                <p className="text-muted-foreground font-body max-w-xs">
                  Thank you for reaching out. Gurupad will get back to you
                  shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => mutation.reset()}
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-body text-sm font-medium"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name_input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange("name")}
                      onBlur={() =>
                        !form.name.trim() &&
                        setErrors((p) => ({ ...p, name: "Name is required" }))
                      }
                      aria-invalid={!!errors.name}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.name_field_error"
                        className="text-destructive text-xs font-body"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="font-body text-sm font-medium"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email_input"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      onBlur={() => {
                        if (!form.email.trim())
                          setErrors((p) => ({
                            ...p,
                            email: "Email is required",
                          }));
                        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                          setErrors((p) => ({
                            ...p,
                            email: "Enter a valid email address",
                          }));
                      }}
                      aria-invalid={!!errors.email}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.email_field_error"
                        className="text-destructive text-xs font-body"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone (optional) */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="font-body text-sm font-medium"
                  >
                    Phone Number{" "}
                    <span className="text-muted-foreground text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.phone_input"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange("phone")}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="font-body text-sm font-medium"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    placeholder="Tell us what's on your mind — farm visits, produce enquiries, partnerships, or just a hello!"
                    value={form.message}
                    onChange={handleChange("message")}
                    onBlur={() =>
                      !form.message.trim() &&
                      setErrors((p) => ({
                        ...p,
                        message: "Please share your message",
                      }))
                    }
                    rows={5}
                    aria-invalid={!!errors.message}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.message_field_error"
                      className="text-destructive text-xs font-body"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="w-full sm:w-auto self-start gap-2 px-8 py-3 text-base font-body"
                >
                  {mutation.isPending ? (
                    <>Sending…</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>

                {mutation.isPending && (
                  <p
                    data-ocid="contact.loading_state"
                    className="text-muted-foreground text-sm font-body animate-pulse"
                  >
                    Sending your message…
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact Info + WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Founder note */}
            <Card className="p-6 bg-muted/40 border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-primary text-lg">
                    G
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-base">
                    Gurupad MS
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    Founder, Heartland Farms
                  </p>
                  <p className="text-foreground/75 font-body text-sm mt-2 leading-relaxed">
                    "From corporate boardrooms to fertile fields — I built
                    Heartland Farms to prove that farming is India's most
                    fulfilling future. Let's connect."
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {contactInfoItems.map(({ icon: Icon, label, value, href }) => (
                <Card
                  key={label}
                  className="p-4 flex items-center gap-4 border-border hover:shadow-md transition-smooth"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-foreground font-body font-medium text-sm hover:text-primary transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-body font-medium text-sm break-words">
                        {value}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* WhatsApp card (repeated, prominent) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_card"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/40 rounded-2xl p-5 hover:bg-[#25D366]/20 transition-smooth group"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-smooth">
                <SiWhatsapp size={24} className="text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-base">
                  WhatsApp Chat
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  +91 99800 55940 — fastest reply
                </p>
              </div>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-muted-foreground font-body text-sm">
                Follow our journey:
              </span>
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.youtube_link"
                aria-label="Heartland Farms YouTube Channel"
                className="w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-smooth"
              >
                <Youtube size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_social_link"
                aria-label="Heartland Farms WhatsApp"
                className="w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-[#25D366]/20 hover:text-[#25D366] transition-smooth"
              >
                <SiWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Find Us in Vijayapura
            </h2>
            <p className="text-muted-foreground font-body">
              Located in the heart of North Karnataka's agricultural belt —
              known for its legendary Vijayapura grapes.
            </p>
          </motion.div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              data-ocid="contact.map_embed"
              src={MAPS_EMBED}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heartland Farms location — Vijayapura, Karnataka"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
