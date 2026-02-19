
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Auth = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      } else {
        // Get the current URL for redirect
        const redirectTo = `${window.location.origin}/auth`;

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectTo,
          },
        });
        if (error) throw error;
        toast({
          title: "Success!",
          description: "Please check your email to confirm your account.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("min-h-screen flex items-center justify-center px-4 transition-colors duration-300", isDarkMode ? "bg-black" : "bg-white")}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className={cn("mt-6 text-center text-3xl font-extrabold", isDarkMode ? "text-white" : "text-black")}>
            {isLogin ? "Sign in to your account" : "Create your account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                isDarkMode
                  ? "bg-white/5 border-white/10 text-white placeholder-white/40"
                  : "bg-black/5 border-black/10 text-black placeholder-black/40"
              )}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={cn(
                isDarkMode
                  ? "bg-white/5 border-white/10 text-white placeholder-white/40"
                  : "bg-black/5 border-black/10 text-black placeholder-black/40"
              )}
            />
          </div>

          <div>
            <Button
              type="submit"
              className={cn(
                "w-full",
                isDarkMode
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
              disabled={loading}
            >
              {loading ? "Loading..." : isLogin ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={cn("text-sm", isDarkMode ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black")}
          >
            {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
