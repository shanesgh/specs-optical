"use client";

import React, { useRef, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useModal } from "@/hooks/use-modal";

const ModalComp: React.FC = () => {
  const { isOpen, handleClose, targetSection } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && targetSection) {
      const element = modalRef.current?.querySelector(`#${targetSection}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, targetSection]);

  return (
    <div className="flex flex-col gap-2 ">
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={handleClose}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <div ref={modalRef}>
              <ModalHeader className="flex flex-col gap-1 tracking-widest">
                Terms & Conditions
              </ModalHeader>
              <ModalBody>
                <section id="terms-of-service" className="space-y-6">
                  <h2 className="flex items-center text-2xl mt-4 mb-12 ">
                    <span className="text-red-800 mr-2 text-[40px]  ">#</span>
                    Terms of Service
                  </h2>
                  <hr />

                  <h2 className="font-semibold">1. Introduction</h2>
                  <p>
                    Welcome to Specs Optical and Eyewear Limited. By accessing
                    our website, you agree to comply with and be bound by the
                    following terms and conditions of use. Please read these
                    terms carefully.
                  </p>
                  <h2 className="font-semibold">2. Intellectual Property</h2>
                  <p>
                    All content on this website, including text, graphics,
                    logos, and images, is the property of Specs Optical and
                    Eyewear Limited or open source and protected by intellectual
                    property laws.
                  </p>
                  <h2 className="font-semibold">3. Use of Website</h2>
                  <p>
                    You may not use our website for any unlawful purpose. You
                    agree not to use the website in a way that may impair its
                    performance, corrupt or manipulate the content, or
                    compromise the overall functionality.
                  </p>
                  <h2 className="font-semibold">4. Limitation of Liability</h2>
                  <p>
                    Specs Optical and Eyewear Limited will not be liable for any
                    damages arising from the use or inability to use the
                    website, even if Specs Optical and Eyewear Limited has been
                    advised of the possibility of such damages.
                  </p>
                  <h2 className="font-semibold">5. Changes to Terms</h2>
                  <p>
                    Specs Optical and Eyewear Limited reserves the right to
                    change these terms at any time without notice. Your
                    continued use of the website signifies your acceptance of
                    any adjustments to these terms.
                  </p>
                  <h2 className="font-semibold">6. Governing Law</h2>
                  <p>
                    These terms shall be governed by and construed in accordance
                    with the laws of Trinidad and Tobago.
                  </p>
                </section>
                <section id="privacy-policy" className="space-y-6">
                  <h2 className="flex items-center text-2xl my-12 ">
                    <span className="text-red-800 mr-2 text-[50px] ">#</span>
                    Privacy Policy
                  </h2>
                  <hr />

                  <h2 className="font-semibold">1. Introduction</h2>
                  <p>
                    We are committed to protecting and respecting your privacy.
                    This policy explains how we collect, use, and safeguard your
                    information when you visit our website.
                  </p>
                  <h2 className="font-semibold">2. Information We Collect</h2>
                  <ul>
                    <li>Browser and device information</li>
                    <li>Product data</li>
                  </ul>
                  <h2 className="font-semibold">
                    3. How We Use Your Information
                  </h2>
                  <ul>
                    <li>Process transactions</li>
                    <li>Improve our products and services</li>
                    <li>Respond to customer service requests</li>
                  </ul>
                  <h2 className="font-semibold">4. Sharing Your Information</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties except as required by law.
                  </p>
                  <h2 className="font-semibold">5. Security</h2>
                  <p>
                    We implement a variety of security measures to maintain the
                    safety of your personal information.
                  </p>
                  <h2 className="font-semibold">6. Your Rights</h2>
                  <p>
                    You have the right to access, correct, or delete your
                    personal information. To exercise these rights, please
                    contact us at the number provided on our Homepage.
                  </p>
                  <h2 className="font-semibold">7. Changes to This Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page.
                  </p>
                </section>
                <section id="storage-policy" className="space-y-6">
                  <h2 className="flex items-center text-2xl my-12 ">
                    <span className="text-red-800 mr-2 text-[50px] ">#</span>
                    Storage Policy
                  </h2>
                  <hr />

                  <p>
                    We use localStorage to store data related to your shopping
                    cart. This allows us to maintain the state of your shopping
                    cart between sessions, ensuring a seamless shopping
                    experience. The information stored in localStorage is
                    included below
                  </p>
                </section>
                <section id="about-us" className="space-y-6">
                  <h2 className="flex items-center text-2xl my-12 ">
                    <span className="text-red-800 mr-2 text-[50px]">#</span>
                    About Us
                  </h2>
                  <hr />

                  <p>
                    Welcome to Specs Optical and Eyewear Limited, your trusted
                    partner in vision care and eyewear fashion. At our company,
                    we are dedicated to providing top-notch customer service,
                    ensuring that every interaction is met with a timely
                    response and personalized care. Our team of eyewear
                    specialists is committed to helping you find the perfect
                    pair of glasses or contact lenses that not only enhance your
                    vision but also complement your style. With a wide selection
                    of the latest eyewear trends and advanced lens technology,
                    we strive to make each visit a unique and satisfying
                    experience.
                  </p>
                  <p>
                    We pride ourselves on offering amazing deals and unbeatable
                    prices on a vast array of eyewear products. Our mission is
                    to make high-quality eyewear accessible to everyone. Whether
                    you&apos;re looking for prescription glasses, sunglasses, or
                    contact lenses, you can count on Specs Optical and Eyewear
                    Limited for exceptional value. Our dedication to excellence
                    and customer satisfaction drives us to continuously improve
                    our services and offerings, ensuring that you always receive
                    the best in vision care. Thank you for choosing us to be a
                    part of your eyewear journey.
                  </p>
                </section>

                <section id="book-appointment" className="space-y-6">
                  <h2 className="flex items-center text-2xl my-12 ">
                    <span className="text-red-800 mr-2 text-[40px]  ">#</span>
                    How to Book an Appointment
                  </h2>
                  <hr />

                  <p>
                    Booking an appointment with Specs Optical and Eyewear
                    Limited is convenient and easy. We offer multiple ways for
                    you to schedule your visit:
                  </p>
                  <h2 className="font-semibold">1. Call Us 363-3484:</h2>
                  <p>
                    You can call us directly to speak with one of our friendly
                    team members who will assist you in setting up your
                    appointment.
                  </p>
                  <h2 className="font-semibold">2. WhatsApp 363-3484</h2>
                  <p>
                    For those who prefer messaging, you can book your
                    appointment through WhatsApp by reaching out to us at our
                    dedicated number.
                  </p>
                  <h2 className="font-semibold">3. TikTok & Instagram</h2>
                  <p>
                    Connect with us on TikTok and send us a direct message to
                    book your appointment. You can also click the icons at the
                    bottom of our website to get in touch.
                  </p>
                  <h2 className="font-semibold">
                    4. Email specs.tt7@gmail.com
                  </h2>
                  <p>
                    Send us an email with your preferred appointment date and
                    time, and we will get back to you to confirm your booking.
                  </p>
                  <hr />

                  <div className="mt-12">
                    At Specs Optical and Eyewear Limited, we strive to provide
                    seamless and efficient service, ensuring that your booking
                    experience is as smooth and hassle-free as possible. We look
                    forward to assisting you and welcoming you to our store!
                  </div>
                  <hr />
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalComp;
