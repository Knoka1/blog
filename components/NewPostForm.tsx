"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import LogoLightAndDark from "./LogoLightAndDark";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import CustomInput from "./CustomInput";
import { sendPostFormSchema } from "@/lib/utils";

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = sendPostFormSchema();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          content: data.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      // Optionally, handle the success case
      alert("Post created successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex-col mt-4 mx-20">
      <header className="flex flex-col gap-5 md:gap-8">
        <LogoLightAndDark noText={true} size="big" />
        <span className="sr-only">Home</span>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
          Bem-Vindo ao OilBlog
        </h1>

        <p className="leading-relaxed text-gray-500">
          Ficamos felizes que queira contribuir. Basta preencher o formulário
          para criar o seu post!
        </p>
        <hr className="my-4" />
      </header>

      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="title"
                  label="Title"
                  placeholder="Dê um título"
                />
              </div>
              <CustomInput
                control={form.control}
                name="description"
                label="Description"
                placeholder="Dê uma breve descrição"
              />
              <CustomInput
                control={form.control}
                name="content"
                label="Conteúdo"
                placeholder="Escreva o conteúdo"
              />
            </>
            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Postar"}
              </Button>
            </div>
          </form>
        </Form>
      </>
      <div className="col-span-6 mt-6 mx-4">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span className="text-sm text-gray-700 dark:text-white">
            Eu quero receber emails sobre eventos, novos produtos e anúncios da
            companhia. company announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6 mt-1 mx-4">
        <p className="text-sm text-gray-500">
          Ao criar uma conta, você aceita os nossos
          <Link href="/" className="text-gray-700 dark:text-white underline">
            {" "}
            termos e condições{" "}
          </Link>
          e
          <Link href="/" className="text-gray-700 dark:text-white underline">
            {" "}
            política de privacidade
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default NewPostForm;
