import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { useCreateApplication } from "@/hooks/use-applications";
import { useChallenges } from "@/hooks/use-challenges";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Link } from "wouter";

export default function Apply() {
  const { toast } = useToast();
  const { data: challenges } = useChallenges();
  const mutation = useCreateApplication();
  const [submittedId, setSubmittedId] = useState<number | null>(null);

  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      packageType: "single",
    },
  });

  const onSubmit = (data: InsertApplication) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        setSubmittedId(res.id);
        toast({
          title: "Application Received",
          description: "We've sent payment instructions to your phone.",
        });
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive",
        });
      },
    });
  };

  if (submittedId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-border">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-serif mb-4">Application Successful!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for applying. We have sent a confirmation message to your phone with payment details. 
            Your spot will be confirmed once the deposit is received.
          </p>
          <Link href="/">
            <button className="btn-primary w-full">Return Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container-width max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Join the Next Cohort</h1>
          <p className="text-muted-foreground">
            Complete the form below to reserve your spot.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="h-12 rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="010-1234-5678" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="challengeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Challenge</FormLabel>
                    <Select 
                      onValueChange={(val) => field.onChange(parseInt(val))} 
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a ritual" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {challenges?.map((c) => (
                          <SelectItem key={c.id} value={c.id.toString()}>
                            {c.title} ({c.price.toLocaleString()} KRW)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="packageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="single">Single Ritual</SelectItem>
                        <SelectItem value="double">Double Ritual</SelectItem>
                        <SelectItem value="unlimited">Unlimited Pass</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full btn-primary h-14 text-lg shadow-xl"
                >
                  {mutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                By clicking submit, you agree to our Terms of Service.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
