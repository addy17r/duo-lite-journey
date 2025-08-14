import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Clock, Award, ChevronRight } from "lucide-react";

const Lessons = () => {
  const [selectedUnit, setSelectedUnit] = useState(0);

  const units = [
    {
      title: "Unit 1: Basic Foundations",
      description: "Learn essential greetings, numbers, and basic vocabulary",
      progress: 60,
      lessons: [
        { id: 1, title: "Hello & Goodbye", type: "completed", duration: "5 min", xp: 10 },
        { id: 2, title: "Numbers 1-10", type: "current", duration: "7 min", xp: 15 },
        { id: 3, title: "Basic Colors", type: "available", duration: "6 min", xp: 12 },
        { id: 4, title: "Days of the Week", type: "locked", duration: "8 min", xp: 18 },
      ]
    },
    {
      title: "Unit 2: Daily Life",
      description: "Common phrases and vocabulary for everyday situations",
      progress: 0,
      lessons: [
        { id: 5, title: "Family Members", type: "locked", duration: "10 min", xp: 20 },
        { id: 6, title: "Food & Drinks", type: "locked", duration: "12 min", xp: 25 },
        { id: 7, title: "At the Restaurant", type: "locked", duration: "15 min", xp: 30 },
        { id: 8, title: "Shopping", type: "locked", duration: "12 min", xp: 22 },
      ]
    },
    {
      title: "Unit 3: Communication",
      description: "Express yourself with more complex conversations",
      progress: 0,
      lessons: [
        { id: 9, title: "Asking Questions", type: "locked", duration: "10 min", xp: 20 },
        { id: 10, title: "Directions", type: "locked", duration: "14 min", xp: 28 },
        { id: 11, title: "Weather", type: "locked", duration: "8 min", xp: 16 },
        { id: 12, title: "Time & Dates", type: "locked", duration: "12 min", xp: 24 },
      ]
    }
  ];

  const getLessonBadge = (type: string) => {
    switch (type) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "current":
        return <Badge className="bg-info text-info-foreground animate-pulse">Current</Badge>;
      case "available":
        return <Badge variant="outline" className="border-primary text-primary">Available</Badge>;
      case "locked":
        return <Badge variant="secondary">Locked</Badge>;
      default:
        return null;
    }
  };

  const getLessonStyle = (type: string) => {
    switch (type) {
      case "completed":
        return "border-success/50 bg-success/5";
      case "current":
        return "border-info bg-gradient-secondary/10 shadow-md";
      case "available":
        return "border-primary/30 hover:border-primary/60 hover:shadow-md transition-all duration-200";
      case "locked":
        return "border-muted bg-muted/30 opacity-60";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
          <BookOpen className="text-primary" size={32} />
          Lessons
        </h1>
        <p className="text-muted-foreground text-lg">
          Choose your learning path and start mastering a new language
        </p>
      </div>

      {/* Unit Selection */}
      <div className="grid lg:grid-cols-3 gap-6">
        {units.map((unit, index) => (
          <Card 
            key={index}
            className={`cursor-pointer transition-all duration-200 ${
              selectedUnit === index 
                ? "border-primary shadow-glow bg-gradient-primary/5" 
                : "hover:border-primary/50"
            }`}
            onClick={() => setSelectedUnit(index)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{unit.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{unit.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{unit.progress}%</span>
                </div>
                <Progress value={unit.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Unit Lessons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{units[selectedUnit].title}</span>
            <Badge variant="outline" className="text-xs">
              {units[selectedUnit].lessons.length} Lessons
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {units[selectedUnit].lessons.map((lesson, index) => (
              <Card 
                key={lesson.id}
                className={`${getLessonStyle(lesson.type)} ${
                  lesson.type !== "locked" ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        lesson.type === "completed" 
                          ? "bg-success text-success-foreground"
                          : lesson.type === "current"
                          ? "bg-info text-info-foreground"
                          : lesson.type === "available"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {lesson.type === "completed" ? "✓" : index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">{lesson.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award size={14} />
                            {lesson.xp} XP
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getLessonBadge(lesson.type)}
                      {lesson.type !== "locked" && (
                        <Button 
                          size="sm" 
                          className={
                            lesson.type === "current" 
                              ? "bg-gradient-secondary" 
                              : lesson.type === "completed"
                              ? "bg-gradient-primary"
                              : ""
                          }
                          disabled={lesson.type === "locked"}
                        >
                          <Play size={14} className="mr-1" />
                          {lesson.type === "completed" ? "Review" : "Start"}
                        </Button>
                      )}
                      <ChevronRight size={16} className="text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lessons;