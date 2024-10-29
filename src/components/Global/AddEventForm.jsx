'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddEventForm() {
  const { register, handleSubmit, control } = useForm();
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    // Fetch current count of hackathons for unique ID assignment
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setNextId(response.data.length + 1);
        console.log("id that was fetched ", response.data.length);
      })
      .catch((error) =>
        console.error("Error fetching hackathons count:", error)
      );
  }, []);
  

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    const eventsData = {
        id: nextId.toString(),
        title: data.title,
          description: data.description,
          date: {
            start: data.startDate,
            end: data.endDate,
          },
          location: data.location,
          status: data.status,
          registrationLink: data.registrationLink,
          organizers: data.organizers.split(", "),
          participants: data.participants,
      };
      console.log("eventsData",eventsData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid w-full max-w-full items-center gap-1.5">
        <Label htmlFor="title" className="font-bold text-lg mt-4">
          Project Title
        </Label>
        <Input
          id="title"
          {...register("title")}
          placeholder="Hackathon Title"
          className="p-6 text-md"
        />

        <Label htmlFor="description" className="font-bold text-lg mt-4">
          Description
        </Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Describe the hackathon"
          className="p-6 text-md"
        />

        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <Label htmlFor="startDate" className="font-bold text-lg mb-1">
              Start Date
            </Label>
            <div className="flex items-center">
              <Input
                id="startDate"
                type="datetime-local"
                {...register("startDate")}
                className="p-6 text-md"
              />
            </div>
          </div>

          <div className="flex-1">
            <Label htmlFor="endDate" className="font-bold text-lg mb-1">
              End Date
            </Label>
            <div className="flex items-center">
              <Input
                id="endDate"
                type="datetime-local"
                {...register("endDate")}
                className="p-6 text-md"
              />
            </div>
          </div>
        </div>

        <Label htmlFor="location" className="font-bold text-lg mt-4">
          Location
        </Label>
        <Input
          id="location"
          {...register("location")}
          placeholder="e.g., 48 hours"
          className="p-6 text-md"
        />

        <Label htmlFor="status" className="font-bold text-lg mt-4">
          Status
        </Label>
        <Input
          id="status"
          {...register("status")}
          placeholder="e.g., Online or Physical Address"
          className="p-6 text-md"
        />

        <Label htmlFor="registrationLink" className="font-bold text-lg mt-4">
          Registration Link
        </Label>
        <Input
          id="registrationLink"
          {...register("registrationLink")}
          placeholder="Registration Link"
          className="p-6 text-md"
        />

        <Label htmlFor="organizers" className="font-bold text-lg mt-4">
          Organizers
        </Label>
        <Textarea
          id="organizers"
          {...register("organizers")}
          placeholder="Comma-separated categories"
          className="p-6 text-md"
        />

        <Label htmlFor="participants" className="font-bold text-lg mt-4">
          Participants
        </Label>
        <Textarea
          id="participants"
          {...register("participants")}
          placeholder="Participants"
          className="p-6 text-md"
        />
        </div>
        <Button type="submit" className="w-full mt-6">
        Submit Event
      </Button>
    </form>
  );
}
