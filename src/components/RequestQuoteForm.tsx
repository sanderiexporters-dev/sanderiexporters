import { useEffect, useState } from "react";
import { getWhatsAppEnquiryUrl, productCategories } from "@/data/productCatalog";

const RequestQuoteForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState(productCategories[0]?.name || "Rice");
  const [variety, setVariety] = useState(productCategories[0]?.varieties?.[0]?.name || "");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  function resetTimer() {
    setSecondsLeft(10);
  }

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Create message and open WhatsApp link
    const prod = variety ? `${variety} (${category})` : `${category}`;
    const message = `Hello, I need a quote for ${prod}.\nName: ${name}\nCompany: ${company}\nQuantity: ${quantity}\nPhone: ${phone}`;
    // Use phone number from productCatalog helper
    const wa = `https://wa.me/${"917990343575"}?text=${encodeURIComponent(message)}`;
    window.open(wa, "_blank");
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">Quick 10s Quote Request</h3>
              <p className="text-sm text-neutral-600">Fill this quick form - estimated 10 seconds to request a quote.</p>
            </div>
            <div className="text-sm font-semibold bg-solar/10 text-solar px-3 py-1 rounded">{secondsLeft}s</div>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              placeholder="Your name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-premium"
            />

            <input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input-premium"
            />

            <select value={category} onChange={(e) => {
              setCategory(e.target.value);
              const cat = productCategories.find(c => c.name === e.target.value);
              setVariety(cat?.varieties?.[0]?.name || "");
            }} className="input-premium">
              {productCategories.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>

            <select value={variety} onChange={(e) => setVariety(e.target.value)} className="input-premium">
              {productCategories.find(c => c.name === category)?.varieties.map((v) => (
                <option key={v.slug} value={v.name}>{v.name}</option>
              ))}
            </select>

            <input
              placeholder="Quantity (e.g., 25 MT / 500 bags)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="input-premium md:col-span-2"
            />

            <input
              placeholder="Phone / WhatsApp*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input-premium"
            />

            <div className="md:col-span-2 flex items-center gap-3 mt-2">
              <button type="submit" className="btn-primary">Request Quote</button>
              <button type="button" onClick={resetTimer} className="btn-outline">Reset 10s</button>
              <div className="text-sm text-neutral-600 ml-auto">Or contact us on WhatsApp</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteForm;
