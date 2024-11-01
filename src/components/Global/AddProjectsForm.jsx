import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Form, FormField, FormSection } from "../ui/form";

const ProjectForm = () => {
  const [nextProjectId, setNextProjectId] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const [milestoneCount, setMilestoneCount] = useState(0);
  const [teamMemberCount, setTeamMemberCount] = useState(0);


  const handleMilestoneCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setMilestoneCount(count > 0 ? count : 0);
  };

  const handleTeamMemberCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setTeamMemberCount(count > 0 ? count : 0);
  };

  useEffect(() => {
    const fetchNextProjectId = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        const nextId = response.data.length + 1;
        setNextProjectId(nextId);
        console.log("projectid", nextProjectId);
      } catch (error) {
        console.error("Error fetching next project ID:", error);
      }
    };

    fetchNextProjectId();
  }, []);

  const onSubmit = (e, data) => {
    e.preventDefault();

    const projectData = {
      id: nextProjectId.toString(),
      projectTitle: data.projectTitle,
      projectOverview: data.projectOverview,
      projectStartDate: data.projectStartDate,
      projectEndDate: data.projectEndDate,
      projectManager: {
        name: data.name,
        contact: data.contact,
      },
      projectTeamMembers: [
        {
          name: data.name,
          role: data.role,
          responsibilities: data.responsibilities,
          linkedin: data.linkedin,
          designatedWork: data.designatedWork,
        },
      ],
      primaryGoals: data.primaryGoals,
      specificObjectives: data.specificObjectives,
      totalProjectBudget: data.totalProjectBudget,
      milestoneSchedule: [
        {
          milestone: data.milestone,
          targetCompletionDate: data.targetCompletionDate,
        },
      ],
      projectPlan: data.projectPlan,
      youtubeLink: data.youtubeLink,
      githubLink: data.githubLink,
    };
    console.log("projectData", projectData);

    //     axios
    //       .post("http://localhost:5000/events", projectData)
    //       .then(() => alert("Hackathon added successfully!"))
    //       .catch((error) => console.error("Error adding hackathon:", error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid w-full max-w-full items-center gap-1.5">
        {/* Project Title */}
        <Label htmlFor="projectTitle" className="font-bold text-lg mt-4">
          Project Title
        </Label>
        <Input
          id="projectTitle"
          {...register("projectTitle")}
          placeholder="Enter project title"
          className="p-6 text-md"
        />

        {/* Project Overview */}
        <Label htmlFor="projectOverview" className="font-bold text-lg mt-4">
          Project Overview
        </Label>
        <Textarea
          id="projectOverview"
          {...register("projectOverview")}
          placeholder="Provide a brief overview of the project"
          className="p-6 text-md"
        />

        {/* Start Date */}
        <Label htmlFor="projectStartDate" className="font-bold text-lg mt-4">
          Project Start Date
        </Label>
        <Input
          id="projectStartDate"
          type="datetime-local"
          {...register("projectStartDate")}
          className="p-6 text-md"
        />

        {/* End Date */}
        <Label htmlFor="projectEndDate" className="font-bold text-lg mt-4">
          Project End Date
        </Label>
        <Input
          id="projectEndDate"
          type="datetime-local"
          {...register("projectEndDate")}
          className="p-6 text-md"
        />

        {/* Project Manager */}
        <Label htmlFor="projectManager" className="font-bold text-lg mt-4">
          Project Manager Name
        </Label>
        <Input
          id="projectManager"
          {...register("projectManager")}
          placeholder="Manager's Name"
          className="p-6 text-md"
        />

        {/* Manager Contact */}
        <Label htmlFor="managerContact" className="font-bold text-lg mt-4">
          Project Manager's Email
        </Label>
        <Input
          id="managerContact"
          type="email"
          {...register("managerContact")}
          placeholder="Manager's Email"
          className="p-6 text-md"
        />

        {/* Team Members */}
        {/* <Label className="font-bold text-lg mt-4">Team Members</Label>
        <div>
          <Input
            {...register("teamMembers[0].name")}
            placeholder="Team Member 1 Name"
            className="p-6 text-md"
          />
          <Input
            {...register("teamMembers[0].role")}
            placeholder="Team Member 1 Role"
            className="p-6 text-md"
          />
          <Textarea
            {...register("teamMembers[0].responsibilities")}
            placeholder="Responsibilities"
            className="p-6 text-md"
          />
          <Input
            {...register("teamMembers[0].linkedin")}
            placeholder="LinkedIn URL"
            type="url"
            className="p-6 text-md"
          />
        </div> */}

        {/* Team Member Count Input */}
        <Label className="font-bold text-lg mt-4">Number of Team Members</Label>
        <Input
          type="number"
          min="0"
          onChange={handleTeamMemberCountChange}
          placeholder="Enter number of team members"
          className="p-6 text-md mb-4"
        />

        {/* Team Members */}
        {Array.from({ length: teamMemberCount }, (_, i) => (
          <div key={i} className="mt-4">
            <Label className="font-bold">Team Member {i + 1}</Label>
            <Input
              {...register(`teamMembers[${i}].name`)}
              placeholder="Team Member Name"
              className="p-6 text-md mb-4"
            />
            <Input
              {...register(`teamMembers[${i}].role`)}
              placeholder="Team Member Role"
              className="p-6 text-md mb-4"
            />
            <Textarea
              {...register(`teamMembers[${i}].responsibilities`)}
              placeholder="Responsibilities"
              className="p-6 text-md mb-4"
            />
            <Input
              {...register(`teamMembers[${i}].linkedin`)}
              placeholder="LinkedIn URL"
              type="url"
              className="p-6 text-md mb-2"
            />
          </div>
        ))}

        {/* Project Goals */}
        <Label htmlFor="primaryGoals" className="font-bold text-lg mt-4">
          Primary Goals
        </Label>
        <Textarea
          id="primaryGoals"
          {...register("primaryGoals")}
          placeholder="Define primary project goals"
          className="p-6 text-md"
        />

        {/* Project Budget */}
        <Label htmlFor="totalProjectBudget" className="font-bold text-lg mt-4">
          Total Budget ($)
        </Label>
        <Input
          id="totalProjectBudget"
          {...register("totalProjectBudget")}
          type="number"
          placeholder="Enter budget amount"
          className="p-6 text-md"
        />

        {/* Milestone Schedule */}
        {/* <Label className="font-bold text-lg mt-4 ">Milestone Schedule</Label>
        <div>
          <Input
            {...register("milestones[0].milestone")}
            placeholder="Milestone Name"
            className="p-6 text-md mb-4"
          />
          <Input
            type="datetime-local"
            {...register("milestones[0].targetCompletionDate")}
            placeholder="Target Completion Date"
            className="p-6 text-md"
          />
        </div> */}

        {/* Milestone Count Input */}
        <Label className="font-bold text-lg mt-4">Number of Milestones</Label>
        <Input
          type="number"
          min="0"
          onChange={handleMilestoneCountChange}
          placeholder="Enter number of milestones"
          className="p-6 text-md mb-4"
        />

        {Array.from({ length: milestoneCount }, (_, i) => (
          <div key={i} className="mt-4">
            <Label className="font-bold">Milestone {i + 1}</Label>
            <Input
              {...register(`milestones[${i}].milestone`)}
              placeholder="Milestone Name"
              className="p-6 text-md mb-2"
            />
            <Input
              type="datetime-local"
              {...register(`milestones[${i}].targetCompletionDate`)}
              placeholder="Target Completion Date"
              className="p-6 text-md"
            />
          </div>
        ))}

        {/* Project Plan URL */}
        <Label htmlFor="projectPlan" className="font-bold text-lg mt-4">
          Project Plan URL
        </Label>
        <Input
          id="projectPlan"
          {...register("projectPlan")}
          type="url"
          placeholder="https://example.com/project-plan"
          className="p-6 text-md"
        />

        {/* Project Status */}
        <Label htmlFor="completedTasks" className="font-bold text-lg mt-4">
          Completed Tasks
        </Label>
        <Textarea
          id="completedTasks"
          {...register("completedTasks")}
          placeholder="List completed tasks"
          className="p-6 text-md"
        />

        <Label htmlFor="ongoingTasks" className="font-bold text-lg mt-4">
          Ongoing Tasks
        </Label>
        <Textarea
          id="ongoingTasks"
          {...register("ongoingTasks")}
          placeholder="List ongoing tasks"
          className="p-6 text-md"
        />

        {/* External Links */}
        <Label htmlFor="youtubeLink" className="font-bold text-lg mt-4">
          YouTube Link
        </Label>
        <Input
          id="youtubeLink"
          {...register("youtubeLink")}
          type="url"
          placeholder="YouTube link"
          className="p-6 text-md"
        />

        <Label htmlFor="githubLink" className="font-bold text-lg mt-4">
          GitHub Repository
        </Label>
        <Input
          id="githubLink"
          {...register("githubLink")}
          type="url"
          placeholder="GitHub repository link"
          className="p-6 text-md"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full mt-4">
        Submit Project
      </Button>
    </form>
  );
};

export default ProjectForm;
