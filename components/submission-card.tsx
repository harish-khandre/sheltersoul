"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SubmissionCard = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImg(file);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.status);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setError(null);

    if (!name) {
      setError(`Name is required`);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/save-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, img, location }),
      });
      const data = await response.json();
      console.log(data);
      setSubmitting(false);
    } catch (error) {
      setError((error as Error).message);
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Your Request</CardTitle>
        <CardDescription>Send Help to the Individual</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name of the person</Label>
              <Input
                required
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Name of the individual"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input
                id="picture"
                onChange={handleFileChange}
                accept="image/*"
                type="file"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                required
                onChange={(e) => setLocation(e.target.value)}
                id="location"
                placeholder="Location of the individual"
              />
            </div>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button disabled={submitting} variant="outline">
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submiting.." : "Send Help"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubmissionCard;
