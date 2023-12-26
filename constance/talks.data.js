export const talkData = [
  {
    serial: "01",
    about: (
      <span>
        boost your <br /> business in 2023
      </span>
    ),
    date: "25 JUNE 2023",
    img: "/assets/main_page/talk1.png",
  },
  {
    serial: "02",
    about: (
      <span>
        grid partners <br /> with Hisense
      </span>
    ),
    date: "25 JUNE 2023",
    img: "/assets/main_page/talk2.png",
  },
  {
    serial: "03",
    about: (
      <span>
        create engaging <br /> & shareable
        <br />
        video content
      </span>
    ),
    date: "25 JUNE 2023",
    img: "/assets/main_page/talk3.png",
  },
];

<div className="flex flex-row absolute w-full h-full top-[100px] bottom-[100px]">
  {talkData.map((talk, i) => (
    <div
      className={`flex flex-row gap-6 min-w-[600px] ${
        i % 2 === 0 ? "items-start" : "items-end"
      }`}
    >
      <span className="font-bold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
        {talk.serial}
      </span>
      <div>
        <img
          className="relative w-[600px] rounded-xl"
          src={talk.img}
          alt="img"
        />
        <h1 className="absolute text-[70px] text-light-50 top-[50%]">
          {talk.about}
        </h1>
      </div>
      <p className="text-lg font-normal tracking-widest ml-8">{talk.date}</p>
    </div>
  ))}
</div>;
