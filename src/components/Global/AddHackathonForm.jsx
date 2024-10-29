// AddHackathonForm.js

"use client";

import { useState, useEffect } from "react";
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
import { useForm } from "react-hook-form";
import axios from "axios";

const AddHackathonForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    // Fetch current count of hackathons for unique ID assignment
    axios
      .get("http://localhost:5000/hackathons")
      .then((response) => {
        setNextId(response.data.length + 1);
        console.log("id that was fetched ", response.data.length);
      })
      .catch((error) =>
        console.error("Error fetching hackathons count:", error)
      );
  }, []);

  const onSubmit = (data) => {
    const hackathonData = {
      id: nextId.toString(),
      basicInformation: {
        hackathonTitle: data.hackathonTitle,
        description: data.description,
        dateAndTime: {
          start: data.startDate,
          end: data.endDate,
        },
        duration: data.duration,
        location: data.location,
        theme: data.theme,
        eligibility: data.eligibility,
      },
      registrationAndParticipation: {
        registrationLink: data.registrationLink,
        teamSize: data.teamSize,
        registrationDeadline: data.registrationDeadline,
        participationFee: data.participationFee,
      },
      prizesAndPerks: {
        prizePool: data.prizePool,
        prizeCategories: data.prizeCategories.split(", "),
        perks: data.perks.split(", "),
      },
      rulesAndGuidelines: {
        codeOfConduct: data.codeOfConduct,
        judgingCriteria: data.judgingCriteria.split(", "),
        projectSubmissionGuidelines: {
          format: data.submissionFormat,
          fileTypes: data.fileTypes.split(", "),
          deadline: data.submissionDeadline,
        },
      },
      additionalInformation: {
        organizers: [
          { name: data.organizerName, contact: data.organizerContact },
        ],
        sponsors: [{ name: data.sponsorName, logo: data.sponsorLogo }],
        faqs: [
          {
            question: data.faqQuestion,
            answer: data.faqAnswer,
          },
        ],
        socialMediaHandles: {
          twitter: data.twitter,
          instagram: data.instagram,
        },
        contactInformation: data.contactInformation,
      },
      visualElements: {
        bannerImage: data.bannerImage,
        logo: data.logo,
        socialMediaSharingButtons: data.socialMediaSharingButtons === "enabled",
      },
    };
    console.log("hackathonData", hackathonData);

//     axios
//       .post("http://localhost:5000/hackathons", hackathonData)
//       .then(() => alert("Hackathon added successfully!"))
//       .catch((error) => console.error("Error adding hackathon:", error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* <h2 className="text-2xl font-semibold mb-6">Add Hackathon</h2> */}

      <div className="grid w-full max-w-full items-center gap-1.5">
        <Label htmlFor="hackathonTitle" className="font-bold text-lg mt-4">
          Hackathon Title
        </Label>
        <Input
          id="hackathonTitle"
          {...register("hackathonTitle")}
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

        {/* <Label htmlFor="startDate" className="font-bold text-lg mt-4">
          Start Date
        </Label>
        <Input
          id="startDate"
          type="datetime-local"
          {...register("startDate")}
        />

        <Label htmlFor="endDate" className="font-bold text-lg mt-4">
          End Date
        </Label>
        <Input id="endDate" type="datetime-local" {...register("endDate")} /> */}

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

        <Label htmlFor="duration" className="font-bold text-lg mt-4">
          Duration
        </Label>
        <Input
          id="duration"
          {...register("duration")}
          placeholder="e.g., 48 hours"
          className="p-6 text-md"
        />

        <Label htmlFor="location" className="font-bold text-lg mt-4">
          Location
        </Label>
        <Input
          id="location"
          {...register("location")}
          placeholder="e.g., Online or Physical Address"
          className="p-6 text-md"
        />

        <Label htmlFor="theme" className="font-bold text-lg mt-4">
          Theme
        </Label>
        <Input
          id="theme"
          {...register("theme")}
          placeholder="Theme of the Hackathon"
          className="p-6 text-md"
        />

        <Label htmlFor="eligibility" className="font-bold text-lg mt-4">
          Eligibility
        </Label>
        <Input
          id="eligibility"
          {...register("eligibility")}
          placeholder="Eligibility criteria"
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

        <Label htmlFor="teamSize" className="font-bold text-lg mt-4">
          Team Size
        </Label>
        <Input
          id="teamSize"
          {...register("teamSize")}
          placeholder="e.g., 1-5 members"
          className="p-6 text-md"
        />

        <Label
          htmlFor="registrationDeadline"
          className="font-bold text-lg mt-4"
        >
          Registration Deadline
        </Label>
        <Input
          id="registrationDeadline"
          type="date"
          {...register("registrationDeadline")}
          className="p-6 text-md"
        />

        <Label htmlFor="participationFee" className="font-bold text-lg mt-4">
          Participation Fee
        </Label>
        <Input
          id="participationFee"
          {...register("participationFee")}
          placeholder="Participation Fee"
          className="p-6 text-md"
        />

        <Label htmlFor="prizePool" className="font-bold text-lg mt-4">
          Prize Pool
        </Label>
        <Input
          id="prizePool"
          {...register("prizePool")}
          placeholder="e.g., $10,000"
          className="p-6 text-md"
        />

        <Label htmlFor="prizeCategories" className="font-bold text-lg mt-4">
          Prize Categories
        </Label>
        <Textarea
          id="prizeCategories"
          {...register("prizeCategories")}
          placeholder="Comma-separated categories"
          className="p-6 text-md"
        />

        <Label htmlFor="perks" className="font-bold text-lg mt-4">
          Perks
        </Label>
        <Textarea
          id="perks"
          {...register("perks")}
          placeholder="Comma-separated perks"
          className="p-6 text-md"
        />

        <Label htmlFor="codeOfConduct" className="font-bold text-lg mt-4">
          Code of Conduct
        </Label>
        <Textarea
          id="codeOfConduct"
          {...register("codeOfConduct")}
          placeholder="Code of Conduct"
          className="p-6 text-md"
        />

        <Label htmlFor="judgingCriteria" className="font-bold text-lg mt-4">
          Judging Criteria
        </Label>
        <Textarea
          id="judgingCriteria"
          {...register("judgingCriteria")}
          placeholder="Comma-separated criteria"
          className="p-6 text-md"
        />

        <Label htmlFor="submissionFormat" className="font-bold text-lg mt-4">
          Submission Format
        </Label>
        <Input
          id="submissionFormat"
          {...register("submissionFormat")}
          placeholder="e.g., GitHub repository"
          className="p-6 text-md"
        />

        <Label htmlFor="fileTypes" className="font-bold text-lg mt-4">
          File Types
        </Label>
        <Input
          id="fileTypes"
          {...register("fileTypes")}
          placeholder="Comma-separated file types"
          className="p-6 text-md"
        />

        <Label htmlFor="submissionDeadline" className="font-bold text-lg mt-4">
          Submission Deadline
        </Label>
        <Input
          id="submissionDeadline"
          type="datetime-local"
          {...register("submissionDeadline")}
          className="p-6 text-md"
        />
      </div>
      <Button type="submit" className="w-full mt-6">
        Submit Hackathon
      </Button>
    </form>
  );
};

export default AddHackathonForm;
