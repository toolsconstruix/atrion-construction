import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quoteSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(1, { message: "Phone is required" }).max(20, { message: "Phone must be less than 20 characters" }),
  service: z.string().min(1, { message: "Please select a service" }),
  address: z.string().trim().min(1, { message: "Address is required" }).max(200, { message: "Address must be less than 200 characters" }),
  details: z.string().trim().max(1000, { message: "Details must be less than 1000 characters" }).optional()
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Ensure the external form script is loaded once on mount
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    ) as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Quote request sent!",
        description: "We'll contact you shortly with a detailed quote.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request a Free Quote
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll provide you with a customized quote for our services.
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-lg border shadow-lg">
            <div className="min-h-[789px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/dCdAddLccmMbFu4QfYCW"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 16 }}
                id="inline-dCdAddLccmMbFu4QfYCW"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="form_lp_Request a Free Quote"
                data-height="789"
                data-layout-iframe-id="inline-dCdAddLccmMbFu4QfYCW"
                data-form-id="dCdAddLccmMbFu4QfYCW"
                title="form_lp_Request a Free Quote"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
