"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SubmissionCard = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [name, setName] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setFileUrl(objectUrl);
    } else {
      setFileUrl(null);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("location", location);

    if (!name) {
      toast.error("Please enter name ");
      return;
    }

    if (!location) {
      toast.error("Please enter Location");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Error sending request");
        setUploading(false);
        return;
      }

      setUploading(false);
      toast.success("Request sent successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Error sending request");
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div>
      {" "}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your Request</CardTitle>
          <CardDescription>Send Help to the Individual</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {" "}
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Photo of the person
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                required={true}
                accept="image/*"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="photo-container">
              {fileUrl && file && (
                <img src={fileUrl} className="w-60 m-4" alt="img" />
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Name (optional)
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Location
              </label>
              <input
                type="text"
                required={true}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={!file || uploading}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
                {uploading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default SubmissionCard;
/* <BackgroundBeams /> */
