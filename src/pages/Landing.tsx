import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Learn through engaging exercises with multiple choice, matching, and typing challenges."
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn XP, build streaks, and unlock achievements as you progress through your lessons."
    },
    {
      icon: Zap,
      title: "Quick & Effective",
      description: "Short, focused lessons that fit into your daily routine. Learn in just 5-10 minutes a day."
    },
    {
      icon: Users,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed progress tracking and personalized insights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm">🦉</span>
            </div>
            LearnLingo
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-8xl animate-bounce-in">🦉</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Learn Languages the Fun Way
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master new languages through bite-sized lessons, interactive exercises, and gamified learning. 
            Join millions of learners worldwide!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 animate-glow-pulse">
                <BookOpen className="mr-2" size={20} />
                Start Learning Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose LearnLingo?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform combines proven language learning techniques with modern technology 
            to make learning enjoyable and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Card 
              key={title} 
              className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering new languages with LearnLingo. 
            Start your free learning adventure today!
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-lg px-8 py-6"
            >
              Get Started Now - It's Free!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;