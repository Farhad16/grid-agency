"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { postContact } from "@/apis/contact.api";
import { toast } from "react-toastify";

const ContactHeader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      company: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      if (!values.name) {
        setError("name", { type: "manual", message: "The name is required" });
        return;
      }

      if (!values.company) {
        setError("company", {
          type: "manual",
          message: "The company is required",
        });
        return;
      }

      if (!values.email) {
        setError("email", {
          type: "manual",
          message: "The email is required",
        });
        return;
      }
      const res = await postContact(values);
      if (res) {
        toast.success("Sent successfully", {
          position: "top-right",
          autoClose: 3000,
        });
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    }
  };

  return (
    <Wrapper className="w-full flex flex-col relative contact-bg pb-6">
      <div className="flex flex-col md:flex-row gap-24 items-center">
        <img
          src="/assets/footer/footer.gif"
          layout="responsive"
          className="w-[308px]"
          alt="footergif"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex flex-col inline-block ">
              <div className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 font-bold">
                talk to us
              </div>
              <p className="text-light-50 md:text-[100px] lg:text-[130px] text-6xl font-bold">
                have a
              </p>
            </div>
            <Image
              src="/assets/main_page/Cat.gif"
              alt="cat"
              width={150}
              height={150}
              className="sm:max-w-[150px] max-w-[100px]"
              objectFit="cover"
            />
          </div>
          <div className="text-light-50 md:text-[100px] lg:text-[130px] text-6xl font-bold relative">
            project in
            <img
              src="/assets/contact/lines.png"
              alt="lines"
              className="absolute w-[60%] top-20 -left-4"
            />
            mind?
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-16 mt-[100px]">
        <div className="flex flex-col gap-16 col-span-1">
          <div className="flex flex-col">
            <p className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-sm text-xl md:text-[24px] lg:text-[30px] text-[#231F20] px-4 sm:py-2 font-bold">
              prefer email?
            </p>
            <p className="text-light-50 text-xl md:text-[24px] lg:text-[30px] font-bold sm:!leading-[40px]">
              You can reach us at
              <br />
              <span className="text-yellow-550 underline break-words">
                info@gridagencyinc.ca
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="bg-yellow-550 -rotate-[2deg] inline-block w-fit text-xl md:text-[24px] lg:text-[30px] text-[#231F20] px-4 sm:py-2 font-bold">
              prefer docs?
            </p>
            <p className="text-light-50 text-xl md:text-[24px] lg:text-[30px] font-bold sm:!leading-[40px]">
              check out our
              <br />
              <span className="text-yellow-550 underline">pricing slide</span>
            </p>
          </div>
        </div>
        <form
          className="md:col-span-2 col-span-1 flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <FormInput
              name="name"
              placeholder="Name*"
              register={{ ...register("name") }}
              errors={errors}
            />
            <FormInput
              name="company"
              placeholder="Company*"
              register={{ ...register("company") }}
              errors={errors}
            />
          </div>
          <FormInput
            name="email"
            placeholder="Email address*"
            register={{ ...register("email") }}
            errors={errors}
          />
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <FormInput
              name="subject"
              placeholder="Subject"
              register={{ ...register("subject") }}
              errors={errors}
            />
            <FormInput
              name="help"
              placeholder="How can we help?"
              register={{ ...register("help") }}
              errors={errors}
            />
          </div>
          <FormInput
            name="details"
            label="Project details"
            textarea={true}
            register={{ ...register("details") }}
            errors={errors}
          />

          <button
            type="submit"
            className="text-yellow-550 hover:bg-yellow-550 hover:bg-opacity-20 focus:outline-none outline-none group flex items-center border border-2 rounded-full border-yellow-550 transition duration-300 py-[10px] px-[32px] w-fit"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactHeader;
