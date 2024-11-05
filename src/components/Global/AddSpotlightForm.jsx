'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AddSpotlightForm() {
  const { register, handleSubmit, control } = useForm();
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/spotlightJobs")
      .then((response) => {
        setNextId(response.data.length + 1);
        console.log("id that was fetched ", response.data.length);
      })
      .catch((error) =>
        console.error("Error fetching Spotlights count:", error)
      );
  }, []);
  

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    const SpotlightData = {
      id: nextId.toString(),
      title: data.title,
      description: data.description,
      location: data.location,
      office: data.office,
      company: data.company,
      minimum_qualifications: {
        degree: data.degree,
        experience: data.experience.split(", ")
      },
      preferred_qualifications: {
        coding_experience: data.coding_experience,
        programming_skills: data.programming_skills,
        passion: data.passion,
      },
      job_description: {
        philosophy: data.philosophy,
        role_overview: data.role_overview,
        impact: data.impact,
        mission: data.mission,
      },
      responsibilities: data.responsibilities.split(", "),
      diversity_statement: data.diversity_statement,
      english_proficiency: data.english_proficiency,
      note_for_agencies: data.note_for_agencies
    };
    console.log("SpotlightData", SpotlightData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid w-full max-w-full items-center gap-1.5">
        <Label htmlFor="title" className="font-bold text-lg mt-4">
          Spotlight/Opportunity Title
        </Label>
        <Input
          id="title"
          {...register("title")}
          placeholder="Opportunity Title"
          className="p-6 text-md"
        />

        <Label htmlFor="description" className="font-bold text-lg mt-4">
          Description
        </Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Describe the Opportunity"
          className="p-6 text-md"
        />

        <Label htmlFor="location" className="font-bold text-lg mt-4">
          Location
        </Label>
        <Input
          id="location"
          {...register("location")}
          placeholder="Location"
          className="p-6 text-md"
        />

        <Label htmlFor="office" className="font-bold text-lg mt-4">
          Office
        </Label>
        <Input
          id="office"
          {...register("office")}
          placeholder="Office location(s)"
          className="p-6 text-md"
        />

        <Label htmlFor="company" className="font-bold text-lg mt-4">
          Company
        </Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Company name"
          className="p-6 text-md"
        />

        <Label htmlFor="degree" className="font-bold text-lg mt-4">
          Minimum Qualifications - Degree
        </Label>
        <Input
          id="degree"
          {...register("degree")}
          placeholder="Required degree"
          className="p-6 text-md"
        />

        <Label htmlFor="experience" className="font-bold text-lg mt-4">
          Minimum Qualifications - Experience
        </Label>
        <Textarea
          id="experience"
          {...register("experience")}
          placeholder="Experience (comma-separated)"
          className="p-6 text-md"
        />

        <Label htmlFor="coding_experience" className="font-bold text-lg mt-4">
          Preferred Qualifications - Coding Experience
        </Label>
        <Input
          id="coding_experience"
          {...register("coding_experience")}
          placeholder="Coding experience"
          className="p-6 text-md"
        />

        <Label htmlFor="programming_skills" className="font-bold text-lg mt-4">
          Preferred Qualifications - Programming Skills
        </Label>
        <Input
          id="programming_skills"
          {...register("programming_skills")}
          placeholder="Programming skills"
          className="p-6 text-md"
        />

        <Label htmlFor="passion" className="font-bold text-lg mt-4">
          Preferred Qualifications - Passion
        </Label>
        <Input
          id="passion"
          {...register("passion")}
          placeholder="Passion for the field"
          className="p-6 text-md"
        />

        <Label htmlFor="philosophy" className="font-bold text-lg mt-4">
          Job Description - Philosophy
        </Label>
        <Textarea
          id="philosophy"
          {...register("philosophy")}
          placeholder="Philosophy statement"
          className="p-6 text-md"
        />

        <Label htmlFor="responsibilities" className="font-bold text-lg mt-4">
          Responsibilities
        </Label>
        <Textarea
          id="responsibilities"
          {...register("responsibilities")}
          placeholder="Responsibilities (comma-separated)"
          className="p-6 text-md"
        />

        <Label htmlFor="diversity_statement" className="font-bold text-lg mt-4">
          Diversity Statement
        </Label>
        <Textarea
          id="diversity_statement"
          {...register("diversity_statement")}
          placeholder="Company's diversity statement"
          className="p-6 text-md"
        />

        <Label htmlFor="english_proficiency" className="font-bold text-lg mt-4">
          English Proficiency
        </Label>
        <Input
          id="english_proficiency"
          {...register("english_proficiency")}
          placeholder="Required English proficiency level"
          className="p-6 text-md"
        />

        <Label htmlFor="note_for_agencies" className="font-bold text-lg mt-4">
          Note for Agencies
        </Label>
        <Textarea
          id="note_for_agencies"
          {...register("note_for_agencies")}
          placeholder="Message for agencies"
          className="p-6 text-md"
        />
      </div>
      <Button type="submit" className="w-full mt-6">
        Submit
      </Button>
    </form>
  );
}
