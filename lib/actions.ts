"use server";

import { sendEmail } from "@/lib/email";
import { client } from "@/sanity/lib/client";
import {
  getAllProducts,
  getDeal,
  getProductBySlug,
  getProductsBySearch,
  getWhatsappAndPromoMessage,
} from "./queries";
import { DealType } from "./types";

let lastSentTime = 0;

export const fetchProducts = async () => {
  try {
    const data = await client.fetch(getAllProducts);
    return data;
  } catch (error) {
    console.error("Error fetching fetchproducts:", error);
    return [];
  }
};

export const fetchProductsBySlug = async (slug: string) => {
  try {
    const data = await client.fetch(getProductBySlug, { slug });
    return data;
  } catch (error) {
    console.error("Error fetching fetchproductbyslug:", error);
    return [];
  }
};

export const fetchProductsBySearch = async (term: string) => {
  try {
    const data = await client.fetch(getProductsBySearch, { term });
    return data;
  } catch (error) {
    console.error("Error fetching fetchproductsbysearch:", error);
    return [];
  }
};

export const fetchWhatsappAndPromoMessage = async () => {
  const data = await client.fetch(getWhatsappAndPromoMessage);
  return data;
};

export const fetchDeal = async (): Promise<DealType> => {
  try {
    const data = await client.fetch(getDeal);
    if (!data) {
      return { name: "No deal found", image: false };
    }
    return {
      name: data.name || "No name found",
      image: data.image?.asset ? data.image : false,
    };
  } catch (error) {
    console.error("Error fetching deal:", error);
    return { name: "Error fetching deal", image: false };
  }
};

type dataType = {
  to: string;
  subject: string;
  text: string;
};

export const sendEmailAction = async (data: dataType) => {
  const currentTime = Date.now();
  if (currentTime - lastSentTime < 120000) {
    return {
      success: false,
      error:
        "Rate limit exceeded. Please wait 2 minutes before sending another email.",
    };
  }

  try {
    await sendEmail(data);
    lastSentTime = currentTime;
    return { success: true };
  } catch (error: unknown) {
    console.error("Server Action Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "server error",
    };
  }
};
