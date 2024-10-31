"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 280px;
  transition: transform 0.3s;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #0070f3;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

const ReadMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #005bb5;
  }
`;

const ConnectButton = styled.button`
  padding: 12px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin: 30px auto 0;
  &:hover {
    background-color: #005bb5;
  }
`;

const Mentorship = () => {
  const [achievements, setAchievements] = useState([]);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch achievements
    fetch('http://localhost:5000/achievements')
      .then((response) => response.json())
      .then((data) => setAchievements(data))
      .catch((error) => console.error("Error fetching achievements:", error));

    // Fetch mentors
    fetch('http://localhost:5000/mentors')
      .then((response) => response.json())
      .then((data) => setMentors(data))
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

return (
        <Container>
            <SectionTitle>Stories from the Community</SectionTitle>
            <Subtitle>Get inspired by the clever ways people are using Google technology.</Subtitle>
            <CardGrid>
                {achievements.map((achieve, index) => (
                    <Card key={index}>
                        <CardImage src={achieve.imageUrl} alt={`${achieve.name} photo`} />
                        <CardTitle>{achieve.name}</CardTitle>
                        <CardContent><strong>Job:</strong> {achieve.job}</CardContent>
                        <CardContent><strong>Project:</strong> {achieve.project}</CardContent>
                        <CardContent><strong>Testimonial:</strong> "{achieve.testimonial}"</CardContent>
                        <ReadMoreButton>Read now</ReadMoreButton>
                    </Card>
                ))}
            </CardGrid>

            <SectionTitle style={{marginTop:"50px"}}>Meet the Mentors</SectionTitle>
            <Subtitle>Our mentors are here to guide GDSC members in various fields.</Subtitle>
            <CardGrid>
                {mentors.map((mentor, index) => (
                    <Card key={index}>
                        <CardImage src={mentor.imageUrl} alt={`${mentor.name} photo`} />
                        <CardTitle>{mentor.name}</CardTitle>
                        <CardContent><strong>Position:</strong> {mentor.position}</CardContent>
                        <CardContent>{mentor.bio}</CardContent>
                        <ReadMoreButton>Read now</ReadMoreButton>
                    </Card>
                ))}
            </CardGrid>

            <SectionTitle style={{ marginTop: "50px" }}>Connect with GDSC Alumni</SectionTitle>
            <Subtitle>Our GDSC members can connect with alumni for advice and career guidance.</Subtitle>
            <ConnectButton>Connect with Alumni</ConnectButton>
        </Container>
    );
};

export default Mentorship;
