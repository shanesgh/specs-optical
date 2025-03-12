import { fetchWhatsappAndPromoMessage } from "@/lib/actions";
import { WhatsappAndPromoMessageType } from "@/lib/types";

const Promotional = async () => {
  const [{ whatsappNumber, promo }]: WhatsappAndPromoMessageType[] =
    await fetchWhatsappAndPromoMessage();

  return (
    <section className="hidden md:flex text-white/90 text-sm bg-blue-950 py-1 flex-col md:flex-row sm:justify-between px-8 justify-center items-center">
      <div className="whitespace-nowrap tracking-widest text-3xl font-semibold text-white/70 lg:hidden">
        SPECS CO
      </div>

      <div className="md:ml-auto whitespace-nowrap ">{promo}</div>
      <div className="md:ml-auto whitespace-nowrap ">
        Whatsapp or Call us at {whatsappNumber}
      </div>
    </section>
  );
};

export default Promotional;
