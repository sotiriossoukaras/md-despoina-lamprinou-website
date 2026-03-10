import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { 
  Bars3Icon, 
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon 
} from "@heroicons/react/24/outline";
import logo from "../assets/md-despoina-lamprinou-logo.jpg";

const navigation = [
  { name: "ΑΡΧΙΚΗ", href: "#", current: true },
  { name: "ΤΟ ΙΑΤΡΕΙΟ", href: "#", current: false },
  { name: "ΥΠΗΡΕΣΙΕΣ", href: "#", current: false },
  { name: "ΕΠΙΚΟΙΝΩΝΙΑ", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="bg-[#214d72] text-white py-2.5 px-4 shadow-sm relative z-[60]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
          <div className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
            ΔΕΣΠΟΙΝΑ ΛΑΜΠΡΙΝΟΥ | ΓΕΝΙΚΗ ΙΑΤΡΟΣ | ΛΟΥΤΡΑ ΑΙΔΗΨΟΥ
          </div>
          <div className="flex items-center gap-6 text-[10px] md:text-[11px] font-bold mt-2 md:mt-0">
            <a href="tel:2226023899" className="flex items-center gap-1.5 hover:text-[#77a9c1] transition-colors">
              <PhoneIcon className="size-3.5" /> 2226 023899
            </a>
            <a href="mailto:info@example.gr" className="flex items-center gap-1.5 hover:text-[#77a9c1] transition-colors">
              <EnvelopeIcon className="size-3.5" /> EMAIL
            </a>
            <span className="hidden md:block w-px h-4 bg-white/20"></span>
            <div className="flex items-center gap-1.5 opacity-90 font-medium">
              <ClockIcon className="size-3.5" /> ΔΕΥΤ - ΠΑΡ: 09:00 - 14:00
            </div>
          </div>
        </div>
      </div>

      <Disclosure as="nav" className="relative bg-white z-50 shadow-md border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 md:h-24 items-center">
            
            {/* LOGO - Αριστερά */}
            <a href="#" className="flex shrink-0 items-center transition-transform hover:scale-105">
              <img
                alt="MD Despoina Lamprinou"
                src={logo}
                className="h-12 md:h-20 w-auto rounded-full shadow-lg"
              />
            </a>

            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-[#214d72] border-b-2 border-[#214d72]"
                        : "text-slate-500 hover:text-[#214d72]",
                      "px-1 py-2 text-sm font-bold tracking-tight transition-all duration-300"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-[#214d72] hover:bg-slate-50 focus:outline-none">
                <Bars3Icon className="block size-7 group-data-open:hidden" />
                <XMarkIcon className="hidden size-7 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel transition className="relative z-40 bg-white shadow-2xl origin-top transition duration-200 ease-out data-closed:-translate-y-4 data-closed:opacity-0 sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-6 border-t border-gray-50">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-slate-50 text-[#214d72] border-l-4 border-[#214d72]"
                    : "text-slate-500 hover:text-[#214d72] hover:bg-slate-50",
                  "block pl-8 pr-4 py-4 text-sm font-semibold tracking-widest uppercase transition-all"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}