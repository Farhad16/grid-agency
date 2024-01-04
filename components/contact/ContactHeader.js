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
    <Wrapper className="border-bottom w-full flex flex-col relative contact-bg sm:pb-[100px] pb-[50px] pt-[150px] sm:pt-[200px]">
      <div className="flex flex-col md:flex-row sm:gap-24 gap-16 items-center">
        <img
          src="/assets/footer/footer.gif"
          layout="responsive"
          className="lg:w-[308px] md:w-[214px] w-[175px]"
          alt="footergif"
        />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-center bg-yellow-550 rotate-[2deg] text-[29px] text-[#231F20] px-4 sm:py-1 font-extrabold w-fit xs:-mb-3 -mb-1.5 font-extrabold">
              talk to us
            </div>
            <div className="flex inline-block">
              <p className="text-light-50 md:text-[90px] lg:text-[130px] xs:text-[80px] text-[65px] font-extrabold sm:tracking-[-6.5px] tracking-[-4.5px] leading-[87.424%]">
                have a
              </p>
              <Image
                src="/assets/main_page/Cat.gif"
                alt="cat"
                width={150}
                height={150}
                className="w-[120px] h-[120px] -mt-6"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="text-light-50 md:text-[90px] lg:text-[130px] xs:text-[80px] text-[65px] font-extrabold relative sm:tracking-[-6.5px] tracking-[-4.5px] md:leading-[130px] leading-[90px] -mt-8">
            project in
            <img
              src="/assets/contact/lines.png"
              alt="lines"
              className="absolute w-[60%] sm:top-24 top-16 left-0"
            />{" "}
            mind?
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 gap-16 mt-[100px] flex flex-col-reverse">
        <div className="flex flex-col gap-16 sm:col-span-1 py-10 sm:py-0">
          <div className="flex flex-col sm:items-start items-center">
            <p className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-[30px] text-[#231F20] px-4 sm:py-0 py-2 font-extrabold leading-[19px] tracking-[-1.5px] sm:leading-normal">
              prefer email?
            </p>
            <p className="text-light-50 text-[30px] sm:text-left text-center tracking-[-1.5px] sm:leading-normal">
              You can reach us at
              <br />
              <span className="text-yellow-550 underline break-words">
                info@gridagencyinc.ca
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:items-start items-center mt-4">
            <p className="bg-yellow-550 -rotate-[2deg] inline-block w-fit text-[30px] text-[#231F20] px-4 sm:py-0 py-2 font-extrabold leading-[19px] tracking-[-1.5px] sm:leading-normal">
              prefer docs?
            </p>
            <p className="text-light-50 text-[30px] sm:text-left text-center tracking-[-1.5px] sm:leading-normal">
              check out our
              <br />
              <span className="text-yellow-550 underline break-words">
                pricing slide
              </span>
            </p>
          </div>
        </div>
        <form
          className="md:col-span-2 flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row gap-4 w-full">
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
            name="project_details"
            label="Project details"
            textarea={true}
            register={{ ...register("project_details") }}
            errors={errors}
          />

          <button
            type="submit"
            className="font-extrabold text-yellow-550 hover:bg-yellow-550 hover:bg-opacity-20 focus:outline-none outline-none group flex items-center border border-1.5 justify-center rounded-full border-yellow-550 transition duration-300 py-[10px] px-[32px] sm:w-fit w-full"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactHeader;
