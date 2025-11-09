"use client";

export default function ShareButtons() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      icon: (
        <svg
          id="yith-wcwl-icon-facebook"
          className="yith-wcwl-icon-svg text-white"
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.79234 6.75L9.12562 4.57828H7.0418V3.16898C7.0418 2.57484 7.33289 1.9957 8.26617 1.9957H9.21351V0.146719C9.21351 0.146719 8.35383 0 7.53187 0C5.81578 0 4.69406 1.04016 4.69406 2.92313V4.57828H2.78648V6.75H4.69406V12H7.0418V6.75H8.79234Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      bg: "bg-[#39599e]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      icon: (
        <svg
          id="yith-wcwl-icon-x-twitter"
          className="yith-wcwl-icon-svg text-white"
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.4498 0.576279H11.2907L7.26988 5.1708L12 11.4237H8.29726L5.39505 7.63234L2.07823 11.4237H0.234681L4.53455 6.50848L0 0.576279H3.79661L6.41721 4.04173L9.4498 0.576279ZM8.80313 10.3233H9.82269L3.2412 1.6193H2.14602L8.80313 10.3233Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      bg: "bg-[#45afe2]",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      icon: (
        <svg
          id="yith-wcwl-icon-pinterest"
          className="yith-wcwl-icon-svg text-white"
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.28851 0C3.82171 0 1.38376 1.64454 1.38376 4.30608C1.38376 5.99871 2.33586 6.96042 2.91289 6.96042C3.15091 6.96042 3.28796 6.29684 3.28796 6.1093C3.28796 5.8857 2.71814 5.40965 2.71814 4.47919C2.71814 2.54614 4.18957 1.1757 6.09376 1.1757C7.73109 1.1757 8.94285 2.10616 8.94285 3.81561C8.94285 5.09229 8.43073 7.48696 6.77177 7.48696C6.17311 7.48696 5.66099 7.05419 5.66099 6.43388C5.66099 5.52506 6.29572 4.64509 6.29572 3.70742C6.29572 2.11578 4.0381 2.40429 4.0381 4.32772C4.0381 4.73164 4.08859 5.17884 4.26891 5.5467C3.93712 6.97485 3.25911 9.10264 3.25911 10.5741C3.25911 11.0285 3.32402 11.4757 3.3673 11.9301C3.44904 12.0215 3.40817 12.0118 3.53319 11.9662C4.74496 10.3072 4.70168 9.98261 5.24986 7.81154C5.54559 8.37414 6.31015 8.67708 6.91603 8.67708C9.46939 8.67708 10.6162 6.18864 10.6162 3.94544C10.6162 1.55798 8.55335 0 6.28851 0Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      bg: "bg-[#ab2e31]",
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      icon: (
        <svg
          id="yith-wcwl-icon-envelope"
          className="yith-wcwl-icon-svg text-white"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
        </svg>
      ),
      bg: "bg-[#fbb102]",
      href: `mailto:?subject=Chia sẻ sản phẩm&body=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      icon: (
        <svg
          id="yith-wcwl-icon-whatsapp"
          className="yith-wcwl-icon-svg text-white"
          width="16"
          height="16"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1126_7618)">
            <path
              d="M10.2027 1.74375C9.08036 0.61875 7.58571 0 5.99732 0C2.71875 0 0.0508929 2.66786 0.0508929 5.94643C0.0508929 6.99375 0.324107 8.01696 0.84375 8.91964L0 12L3.15268 11.1723C4.02054 11.6464 4.99821 11.8955 5.99464 11.8955H5.99732C9.27321 11.8955 12 9.22768 12 5.94911C12 4.36071 11.325 2.86875 10.2027 1.74375ZM5.99732 10.8938C5.10804 10.8938 4.2375 10.6554 3.47946 10.2054L3.3 10.0982L1.43036 10.5884L1.92857 8.76429L1.81071 8.57679C1.31518 7.78929 1.05536 6.88125 1.05536 5.94643C1.05536 3.22232 3.27321 1.00446 6 1.00446C7.32054 1.00446 8.56071 1.51875 9.49286 2.45357C10.425 3.38839 10.9982 4.62857 10.9955 5.94911C10.9955 8.67589 8.72143 10.8938 5.99732 10.8938ZM8.70804 7.19196C8.56071 7.11696 7.82946 6.75804 7.69286 6.70982C7.55625 6.65893 7.45714 6.63482 7.35804 6.78482C7.25893 6.93482 6.975 7.26696 6.88661 7.36875C6.80089 7.46786 6.7125 7.48125 6.56518 7.40625C5.69196 6.96964 5.11875 6.62679 4.54286 5.63839C4.39018 5.37589 4.69554 5.39464 4.97946 4.82679C5.02768 4.72768 5.00357 4.64196 4.96607 4.56696C4.92857 4.49196 4.63125 3.76071 4.50804 3.46339C4.3875 3.17411 4.26429 3.21429 4.17321 3.20893C4.0875 3.20357 3.98839 3.20357 3.88929 3.20357C3.79018 3.20357 3.62946 3.24107 3.49286 3.38839C3.35625 3.53839 2.97321 3.89732 2.97321 4.62857C2.97321 5.35982 3.50625 6.06696 3.57857 6.16607C3.65357 6.26518 4.62589 7.76518 6.11786 8.41071C7.06071 8.81786 7.43036 8.85268 7.90179 8.78304C8.18839 8.74018 8.78036 8.42411 8.90357 8.07589C9.02679 7.72768 9.02679 7.43036 8.98929 7.36875C8.95446 7.30179 8.85536 7.26429 8.70804 7.19196Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <rect width="12" height="12" fill="white"></rect>
          </defs>
        </svg>
      ),
      bg: "bg-[#00a901]",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        currentUrl
      )}`,
    },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-medium">Chia sẻ:</span>
      <div className="flex items-center gap-[5px]">
        {shareLinks.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center ${item.bg} hover:bg-[#39599e] duration-300 transition-all`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
