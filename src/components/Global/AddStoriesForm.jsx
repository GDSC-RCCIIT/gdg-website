'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AddAchievementForm() {
  const { register } = useForm();
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    // Fetch current count of achievements for unique ID assignment
    axios
      .get("http://localhost:5000/achievements")
      .then((response) => {
        setNextId(response.data.length + 1);
      })
      .catch((error) =>
        console.error("Error fetching achievements count:", error)
      );
  }, []);

  const handleSubmit = async(data,e) => {
    e.preventDefault();

    const achievementData = {
      id: nextId.toString(),
      name: data.name,
      job: data.job,
      project: data.project,
      testimonial: data.testimonial,
      imageUrl: data.imageUrl,
    };
    console.log("Achievement Data:", achievementData);

    try {
      // const response = await axios.post(
      //   "/api/addstoriesapi",
      //   achievementData
      // );
      const res = await fetch('/api/addstoriesapi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          achievementData: achievementData
        }),
    });
      console.log("Achievement created successfully:", res.data);
      // Handle successful submission (e.g., show a success message)
    } catch (error) {
      console.error("Error creating achievement:", error);
      // Handle errors (e.g., show an error message)
    }

  };

  return (
    <form onSubmit={() => handleSubmit()} method="POST" className="space-y-6">
      <div className="grid w-full max-w-full items-center gap-1.5">

        <Label htmlFor="name" className="font-bold text-lg mt-4">
          Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Enter name"
          className="p-6 text-md"
        />

        <Label htmlFor="job" className="font-bold text-lg mt-4">
          Job
        </Label>
        <Input
          id="job"
          {...register("job")}
          placeholder="Enter job title and company"
          className="p-6 text-md"
        />

        <Label htmlFor="project" className="font-bold text-lg mt-4">
          Project
        </Label>
        <Textarea
          id="project"
          {...register("project")}
          placeholder="Describe the project"
          className="p-6 text-md"
        />

        <Label htmlFor="testimonial" className="font-bold text-lg mt-4">
          Testimonial
        </Label>
        <Textarea
          id="testimonial"
          {...register("testimonial")}
          placeholder="Enter a testimonial"
          className="p-6 text-md"
        />

        <Label htmlFor="imageUrl" className="font-bold text-lg mt-4">
          Image URL
        </Label>
        <Input
          id="imageUrl"
          {...register("imageUrl")}
          placeholder="Enter image URL"
          className="p-6 text-md"
        />
      </div>

      <button>
        submit
      </button>

      <Button type="submit" className="w-full mt-6">
        Submit Achievement
      </Button>
    </form>
  );
}
