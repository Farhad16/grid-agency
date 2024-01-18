import Link from "next/link";

const PortfolioItem = ({ port, colDynamic, firstGrid }) => {
  const classNames = !firstGrid
    ? `${
        colDynamic === 2 ? "sm:first:col-span-2 sm:mb-0 mb-10" : "col-span-3"
      } flex flex-col gap-4 group relative hover:no-underline no-underline`
    : "flex flex-col gap-4 group relative hover:no-underline no-underline";

  return (
    <Link
      href={`/case/${port.casestudy.id}`}
      key={port.id}
      className={`${classNames} cursor-[url(/assets/case/view.svg),_pointer]`}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
        alt="portimg"
        className="object-cover min-h-[560px] sm:h-[560px] w-full h-full"
      />

      <div className="flex gap-4 items-center text-[15px]">
        <p className="hover:text-yellow-550 text-yellow-550 font-extrabold uppercase">
          {port.name}
        </p>
        <span className="hover:text-light-50 text-light-50 font-extrabold">
          {port.desc}
        </span>
      </div>
    </Link>
  );
};

export default PortfolioItem;
