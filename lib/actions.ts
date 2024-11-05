"use server";

import { client } from "@/sanity/lib/client";
import { Resend } from "resend";
import React from "react";
import {
  getAllProducts,
  getProductBySlug,
  getProductsBySearch,
  getWhatsappAndPromoMessage,
} from "./queries";

const apikey = process.env.NEXT_PUBLIC_RESEND_API_KEY as string;
const resend = new Resend(apikey);

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

export const sendReceiptEmail = async (
  orderNumber: string,
  items: { name: string; price: number }[],
  total: number,
  to: string
) => {};

export const fetchWhatsappAndPromoMessage = async () => {
  const data = await client.fetch(getWhatsappAndPromoMessage);
  return data;
};
