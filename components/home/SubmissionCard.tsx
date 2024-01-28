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
  const [img, setImg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const validateImg = (url) => {
    const regex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]+\.(?:png|jpg|jpeg|gif)$/;
    return regex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError(null);

    const isValidImg = validateImg(img);

    if (!name || !isValidImg) {
      setError(
        `Name is required. ${
          !isValidImg ? " Please provide a valid image URL (optional)." : ""
        }`,
      );
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.URL}/api/save-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, img, location }),
      });
      const data = await response.json();
      console.log(data);
      setSubmitting(false);
    } catch (error) {
      setError(error.message);
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
              <Label htmlFor="img">Image URL</Label>
              <Input
                required
                onChange={(e) => setImg(e.target.value)}
                id="img"
                placeholder="Image URL"
              />
              {img && !validateImg(img) && (
                <p className="text-red-500">Invalid image URL format.</p>
              )}
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
          {submitting ? "Sending Help..." : "Send Help"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubmissionCard;
