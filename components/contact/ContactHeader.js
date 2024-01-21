"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { postContact } from "@/apis/contact.api";
import { toast } from "react-toastify";
import FormSelect from "./FormSelect";
import { CircularProgress } from "@mui/material";

const ContactHeader = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        toast.success(
          "Thanks for your message, We will get back to you asap.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper className="border-bottom w-full flex flex-col relative contact-bg md:!px-[80px] lg:!px-[100px] sm:pb-[100px] pb-[50px] pt-[150px] sm:pt-[200px]">
      <div className="flex flex-col md:flex-row items-center lg:gap-16 gap-12 py-10 lg:px-10">
        <img
          src="/assets/footer/footer.gif"
          layout="responsive"
          className="lg:w-[308px] md:w-[250px] w-[224px]"
          alt="footergif"
        />
        <div className="flex flex-col ml-0 md:ml-10">
          <div className="flex flex-col">
            <div className="text-center bg-yellow-550 rotate-[2deg] text-[29px] text-[#231F20] px-4 sm:py-1 w-fit xs:-mb-3 -mb-1.5 font-extrabold">
              talk to us
            </div>
            <div className="flex text-light-50 md:text-[90px] lg:text-[130px] xs:text-[80px] text-[65px] font-extrabold sm:tracking-[-6.5px] tracking-[-4.5px] leading-[87.424%]">
              have a
              <Image
                src="/assets/main_page/Cat.gif"
                alt="cat"
                width={160}
                height={160}
                className="w-[120px] h-[120px] sm:mt-0 -mt-6"
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

      <div className="gap-16 sm:mt-[100px] flex sm:flex-row flex-col-reverse items-center">
        <div className="flex flex-col lg:ml-16 items-center justify-center text-center">
          <p className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-[30px] md:text-[24px] lg:text-[30px] text-[#231F20] px-4 sm:py-0 py-2 font-extrabold leading-[19px] tracking-[-1.5px] sm:leading-normal">
            prefer email?
          </p>
          <p className="text-light-50 text-[30px] md:text-[24px] lg:text-[30px] text-center tracking-[-1.5px] sm:leading-normal">
            You can reach us at
            <br />
            <span className="text-yellow-550 underline truncate">
              info@gridagencyinc.ca
            </span>
          </p>
        </div>
        <form
          className="w-full flex flex-col gap-8 sm:ml-10 ml-0"
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
              name="help"
              placeholder="How can we help"
              register={{ ...register("help") }}
              errors={errors}
            />
            <FormSelect
              name="subject"
              register={{ ...register("subject") }}
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
            disabled={loading}
            type="submit"
            className="font-extrabold text-yellow-550 hover:bg-yellow-550 hover:bg-opacity-20 focus:outline-none outline-none group flex items-center border border-1.5 justify-center rounded-full border-yellow-550 transition duration-300 py-[10px] px-[32px] sm:w-fit w-full min-w-[150px] min-h-[50px]"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactHeader;
