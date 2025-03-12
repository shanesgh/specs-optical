"use client";

import { useState } from "react";
import { z } from "zod";
import { TbBrandTiktok } from "react-icons/tb";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone } from "lucide-react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { sendEmailAction } from "@/lib/actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^\d{3}-?\d{4}$/,
      "Please enter a valid local phone number. ex 123-1234 or 1231234"
    ),
  message: z
    .string()
    .min(7, "Message must be at least 7 characters")
    .max(200, "Message can only be 200 characters long"),
});

type FormData = z.infer<typeof formSchema>;

const AppointmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = formSchema.parse(formData);
      const result = await sendEmailAction({
        to: "shane.marchan.tt@gmail.com",
        subject: `Customer Inquiry | Name: ${validatedData.name} Phone Number: ${validatedData.phone}`,
        text: `Message: ${validatedData.message}`,
      });

      if (result.success) {
        setStatus("Email sent successfully! Redirecting to Home...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setStatus(result.error || "Failed to send email.");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      }

      setFormData({
        name: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      setStatus("Failed to send email. Please try again.");
      setTimeout(() => {
        setStatus("Send Us a Message");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  type SocialLink = { social: string; url: string; icon: JSX.Element };
  const socialLinks: SocialLink[] = [
    {
      social: "tiktok",
      url: "https://www.tiktok.com/@specs.optical.and",
      icon: <TbBrandTiktok className="w-4 h-4" />,
    },
    {
      social: "instagram",
      url: "https://www.instagram.com/specsopticalandeyewear",
      icon: <CiInstagram className="w-4 h-4" />,
    },
    {
      social: "facebook",
      url: "https://www.facebook.com/profile.php?id=61564844338955&mibextid=ZbWKwL",
      icon: <CiFacebook className="w-4 h-4" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-8 ">
      <h2 className="text-2xl font-semibold text-blue-950/90 text-center mb-6">
        Need an eye exam? Have feedback for us? Get in Touch !
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={cn("rounded-xl", {
                    "border-red-700": errors.name,
                  })}
                />
                {errors.name && (
                  <p className="text-sm text-red-700">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={cn("rounded-xl", {
                    "border-red-700": errors.phone,
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-700">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={cn("rounded-xl", {
                    "border-red-700": errors.message,
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-700">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-blue-950 hover:bg-slate-600 hover:text-black rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send us a Message"}{" "}
              </Button>
            </form>
            {status && <p className="mt-4 text-center">{status}</p>}
          </CardContent>
        </Card>

        {/* Get in Touch Section */}
        <Card className="w-full">
          <CardHeader>
            <h3 className="text-xl font-semibold">Find Us!</h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-600 " />
                <p>Boodoo Trace, S.S. Erin Rd, Debe</p>
              </div>
              <div className="flex items-center space-x-3 ">
                <Phone className="w-5 h-5 text-slate-600 " />
                <p>1-(868)-363-2484</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-xl">Socials</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.social}
                    variant="outline"
                    size="icon"
                    className="hover:text-red-950 ease-in duration-150 hover:bg-gray-500 rounded-full"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.icon}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentForm;
