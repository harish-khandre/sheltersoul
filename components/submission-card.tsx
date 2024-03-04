"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SubmissionCard = () => {
  const form = useForm();
  const router = useRouter();

  const onSubmit = async (e: any) => {
    if (!e.file) return;
    const file = e.file[0];
    const name = e.name;
    const location = e.location;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("file", file);

    if (!name) {
      toast.error("Please enter name ");
      return;
    }

    if (!location) {
      toast.error("Please enter Location");
      return;
    }

    try {
      const response = await fetch(`/api/send`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      toast.success("Request sent successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };
  console.log(form.watch());

  return (
    <div>
      {" "}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your Request</CardTitle>
          <CardDescription>Send Help to the Individual</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Name of the who needs help
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>
                    <FormDescription>
                      Location of the Person who needs help
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormDescription>
                      Image of the Person who needs help
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default SubmissionCard;
/* <BackgroundBeams /> */
