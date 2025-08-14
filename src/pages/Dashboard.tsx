import { BookOpen, Trophy, Flame, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const mockLessons = [
    { id: 1, title: "Basic Greetings", progress: 100, locked: false, type: "completed" },
    { id: 2, title: "Numbers 1-10", progress: 60, locked: false, type: "current" },
    { id: 3, title: "Colors", progress: 0, locked: false, type: "available" },
    { id: 4, title: "Family Members", progress: 0, locked: true, type: "locked" },
    { id: 5, title: "Food & Drinks", progress: 0, locked: true, type: "locked" },
  ];

  const getLessonStyle = (lesson: typeof mockLessons[0]) => {
    switch (lesson.type) {
      case "completed":
        return "bg-gradient-primary text-primary-foreground shadow-glow";
      case "current":
        return "bg-gradient-secondary text-secondary-foreground animate-glow-pulse";
      case "available":
        return "bg-gradient-card border-2 border-primary/30 hover:border-primary/60";
      case "locked":
        return "bg-muted text-muted-foreground opacity-50 cursor-not-allowed";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-success/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
              <Flame className="text-success" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-info/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-info/20 rounded-full flex items-center justify-center">
              <Gem className="text-info" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-purple/20">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center">
              <Trophy className="text-purple" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">Beginner</p>
              <p className="text-sm text-muted-foreground">Current Level</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Section */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardContent className="p-8 text-center">
          <div className="mb-4 text-6xl">🦉</div>
          <h1 className="text-3xl font-bold mb-2">Welcome to LearnLingo!</h1>
          <p className="text-lg opacity-90 mb-6">
            Start your language learning journey today. Complete lessons, earn XP, and build your streak!
          </p>
          <Button 
            size="lg" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
          >
            <BookOpen className="mr-2" size={20} />
            Continue Learning
          </Button>
        </CardContent>
      </Card>

      {/* Lesson Path */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="text-primary" size={24} />
            Your Learning Path
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {mockLessons.map((lesson, index) => (
            <div key={lesson.id} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <Button
                  size="lg"
                  className={`w-16 h-16 rounded-full ${getLessonStyle(lesson)}`}
                  disabled={lesson.locked}
                >
                  {lesson.progress === 100 ? "✓" : index + 1}
                </Button>
                {index < mockLessons.length - 1 && (
                  <div className="w-0.5 h-8 bg-border mt-2" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={lesson.progress} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground">
                    {lesson.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;