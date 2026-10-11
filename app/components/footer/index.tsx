import Link from "next/link";

const columns = [
  {
    title: "System",
    links: [
      { href: "/system", label: "How it works" },
      { href: "/specifications", label: "Specifications" },
      { href: "/faq", label: "FAQ" },
      { href: "/installers", label: "Certified installers" },
    ],
  },
  {
    title: "For",
    links: [
      { href: "/architects", label: "Architects" },
      { href: "/builders", label: "Construction & developers" },
      { href: "/pco", label: "Pest control companies" },
      { href: "/homeowners", label: "Homeowners" },
    ],
  },
];

const heading =
  "mb-3.5 font-mono text-[0.8rem] font-medium tracking-[0.12em] text-white uppercase";
const list = "m-0 flex list-none flex-col gap-2 p-0";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-[0.9rem] text-[#CFCAC2]">
      <div className="wrap grid grid-cols-1 gap-8 pt-14 pb-10 *:min-w-0 min-[521px]:grid-cols-2 min-[861px]:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="font-sans text-[1.4rem] font-extrabold tracking-[0.04em] text-white">
            TERMIPORE
          </div>
          <div className="text-[0.85rem]">Anti-Termite Reticulation System</div>
          <div className="mt-1.5 text-[#F7A06A] italic">
            Built Beneath. Protected for Life.
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className={heading}>{col.title}</h4>
            <ul className={list}>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#CFCAC2] no-underline hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className={heading}>Contact</h4>
          <ul className={list}>
            <li>0777 367 719</li>
            <li>info@termipore.lk</li>
            <li>809/36 Negombo Road, Mabola, Wattala</li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-wrap justify-between gap-4 border-t border-[#3A3536] py-5 text-[0.8rem] text-[#958F88]">
        <span>
          Distributed in Sri Lanka by Ceylon Pest Control Company (Pvt) Ltd
        </span>
        <span>© 2026 Termipore Sri Lanka</span>
      </div>
    </footer>
  );
}
