import { MdArrowOutward } from "react-icons/md";

type Props = {
  link: string;
  image: any;
  title: string;
};

export function Contatos({ link, image, title }: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex-col gap-4">
        <a
          href={link}
          target="blank"
          className="flex w-[350px]  lg:w-[400px] h-[68px] bg-gray300 rounded-lg mb-5 px-5 items-center hover:border-blue"
        >
          <img src={image} alt="" className="w-7 h-7" />
          <p className="ml-3 text-zinc-400 font-maven font-bold text-base">
            {title}
          </p>
          <div className="flex w-screen justify-end">
            <MdArrowOutward className="text-blue size-5" />
          </div>
        </a>
      </div>
    </div>
  );
}
