import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Flame, Gem, Calendar, Award, Target, Edit } from "lucide-react";

const Profile = () => {
  const achievements = [
    { title: "First Lesson", description: "Complete your first lesson", earned: true, icon: "🎓" },
    { title: "Week Warrior", description: "Learn for 7 days straight", earned: false, icon: "🔥" },
    { title: "XP Collector", description: "Earn 100 XP total", earned: false, icon: "💎" },
    { title: "Perfect Score", description: "Get 100% on any lesson", earned: false, icon: "⭐" },
    { title: "Monthly Master", description: "Learn for 30 days in a month", earned: false, icon: "🏆" },
    { title: "Speed Learner", description: "Complete 5 lessons in one day", earned: false, icon: "⚡" },
  ];

  const stats = [
    { label: "Total XP", value: "0", icon: Gem, color: "text-info" },
    { label: "Lessons Completed", value: "0", icon: Trophy, color: "text-success" },
    { label: "Current Streak", value: "0 days", icon: Flame, color: "text-warning" },
    { label: "Days Learning", value: "0", icon: Calendar, color: "text-purple" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-white/20">
              <AvatarFallback className="bg-white/20 text-2xl">👤</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Guest User</h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-white/20 text-white">Level 1</Badge>
                <Badge className="bg-white/20 text-white">Beginner</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level 2</span>
                  <span>0 / 100 XP</span>
                </div>
                <Progress value={0} className="h-2 bg-white/20" />
              </div>
            </div>
            <Button className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Edit size={16} className="mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="bg-gradient-card">
            <CardContent className="p-6 text-center">
              <Icon className={`mx-auto mb-2 ${color}`} size={32} />
              <p className="text-2xl font-bold mb-1">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="text-primary" size={24} />
            Learning Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-card rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Daily Goal</h3>
              <Badge variant="outline">0 / 1 lesson</Badge>
            </div>
            <Progress value={0} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">Complete 1 lesson per day</p>
          </div>
          
          <div className="p-4 bg-gradient-card rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Weekly Goal</h3>
              <Badge variant="outline">0 / 50 XP</Badge>
            </div>
            <Progress value={0} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">Earn 50 XP this week</p>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="text-primary" size={24} />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.title}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  achievement.earned 
                    ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                    : "bg-muted/30 opacity-60"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className={`text-xs ${
                    achievement.earned ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <Badge className="mt-2 bg-white/20 text-white">Earned!</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Calendar size={48} className="mx-auto mb-4 opacity-50" />
            <p>No activity yet. Start learning to see your progress here!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;