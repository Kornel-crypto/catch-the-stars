"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { LogIn } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      toast.success("Connexion réussie");
      router.push("/Dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-card w-full max-w-md">
        <h1 className="title-game mb-4">Connexion</h1>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Ton email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Mot de passe</Label>
          <Input
            type="password"
            name="password"
            placeholder="Ton mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" icon={<LogIn className="w-5 h-5" />}>
            Se connecter
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Pas encore de compte ?{" "}
          <a href="/register" className="link-style">
            S’inscrire
          </a>
        </p>
      </div>
    </div>
  );
}
