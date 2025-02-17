import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";

export default function AuthComponent() {
  const [activeTab, setActiveTab] = useState("login");

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {activeTab === "login" && (
                  <motion.div
                    key="login"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={formVariants}
                  >
                    <TabsContent value="login" forceMount>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                          <motion.div variants={inputVariants}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="m@example.com"
                            />
                          </motion.div>
                          <motion.div variants={inputVariants}>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                          </motion.div>
                          <Button type="submit" className="w-full">
                            Sign In
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </motion.div>
                )}
                {activeTab === "register" && (
                  <motion.div
                    key="register"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={formVariants}
                  >
                    <TabsContent value="register" forceMount>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                          <motion.div variants={inputVariants}>
                            <Label htmlFor="register-name">Name</Label>
                            <Input
                              id="register-name"
                              type="text"
                              placeholder="John Doe"
                            />
                          </motion.div>
                          <motion.div variants={inputVariants}>
                            <Label htmlFor="register-email">Email</Label>
                            <Input
                              id="register-email"
                              type="email"
                              placeholder="m@example.com"
                            />
                          </motion.div>
                          <motion.div variants={inputVariants}>
                            <Label htmlFor="register-password">Password</Label>
                            <Input id="register-password" type="password" />
                          </motion.div>
                          <Button type="submit" className="w-full">
                            Create Account
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>

        <div className="grid grid-cols-2 gap-2 p-2">
          <Link to={"/admin"} className="w-full">
            <Button className="bg-blue-500 w-full text-white hover:bg-blue-600">
              Admin
            </Button>
          </Link>
          <Link to={"/trader"} className="w-full">
            <Button className="bg-orange-500 w-full text-white hover:bg-orange-600">
              Trader
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
