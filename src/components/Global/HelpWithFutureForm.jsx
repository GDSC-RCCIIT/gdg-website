'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CareerPathForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log("submitted data", data);

  useEffect(() => {

  const onSubmit = async (data) => {
    try {
      console.log("Submitted Data:", data);

      // Make the API call
      const response = await axios.post('/api/generate-content', data);
      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  onSubmit(data);

},[data]);


  return (
    // <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Career Path Questionnaire</h1>
      
      <div className="grid gap-4">
        <Label className="font-bold">1. What subjects or topics are you most interested in?</Label>
        <Textarea {...register("interests")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">2. What are your strengths? (Skills, abilities, and traits)</Label>
        <Textarea {...register("strengths")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">3. What type of work environment do you envision for yourself? (Office, remote, fieldwork, etc.)</Label>
        <Textarea {...register("workEnvironment")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">4. What kind of tasks or activities do you enjoy doing in your free time?</Label>
        <Textarea {...register("hobbies")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">5. Do you prefer working alone or as part of a team?</Label>
        <Textarea {...register("workPreference")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">6. Are there specific industries or sectors you find appealing? (Technology, healthcare, education, etc.)</Label>
        <Textarea {...register("industries")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">7. Do you enjoy problem-solving, working with data, or being creative?</Label>
        <Textarea {...register("workStyle")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">8. What motivates you to work or pursue a goal? (e.g., helping others, financial stability, learning)</Label>
        <Textarea {...register("motivations")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">9. Are there specific job roles that appeal to you? (e.g., engineer, designer, teacher)</Label>
        <Textarea {...register("jobRoles")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">10. How do you define success in a career?</Label>
        <Textarea {...register("careerSuccess")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">11. Do you have a preference for job stability or rapid growth and new experiences?</Label>
        <Textarea {...register("jobPreference")} placeholder="Your response" className="p-4 text-md" />

        <Label className="font-bold">12. What type of impact would you like to have through your career?</Label>
        <Textarea {...register("careerImpact")} placeholder="Your response" className="p-4 text-md" />
      </div>

      <Button type="submit" className="w-full mt-6">
        Submit
      </Button>
    </form>
  );
}
